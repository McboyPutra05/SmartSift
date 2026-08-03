import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import api from '@/lib/axios'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Upload, FileText, X, CloudUpload, AlertCircle, Sparkles, Languages, ShieldCheck, FileUp } from 'lucide-react'
import type { UploadedFile } from '@/features/screener/types/screener'

interface FileUploaderProps {
  jobDescriptionId: string
  jobTitle?: string
  onUploaded: (files: UploadedFile[]) => void
}

interface PendingFile {
  file: File
  preview: string
}

export function FileUploader({ jobDescriptionId, jobTitle, onUploaded }: FileUploaderProps) {
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([])
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null)
    const newFiles = acceptedFiles.map((file) => ({
      file,
      preview: file.name,
    }))
    setPendingFiles((prev) => [...prev, ...newFiles].slice(0, 50))
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 50,
    maxSize: 10 * 1024 * 1024, // 10MB
    onDropRejected: () => setError('Some files were rejected. Only PDFs up to 10MB are allowed.'),
  })

  const removeFile = (index: number) => {
    setPendingFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleUpload = async () => {
    if (pendingFiles.length === 0) return
    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      pendingFiles.forEach(({ file }) => {
        formData.append('resumes[]', file)
      })

      const { data } = await api.post<{ data: UploadedFile[] }>(
        `/job-descriptions/${jobDescriptionId}/candidates/upload`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )

      setPendingFiles([])
      onUploaded(data.data)
    } catch {
      setError('Upload failed. Please check your connection and try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex-1 max-w-4xl space-y-6">
      {/* Banner */}
      <div className="bg-[#AEC4FC] rounded-xl p-6 flex items-start gap-4">
         <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
           <Sparkles className="h-5 w-5 text-white" />
         </div>
         <div>
           <h3 className="text-lg font-bold text-slate-900">Semantic Extraction Active</h3>
           <p className="text-slate-700 text-sm mt-1">Our neural engine is context-mapping candidate experience beyond simple keywords. JD context is required for weighted scoring.</p>
         </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Step 1 */}
        <div className="rounded-xl border-2 border-slate-200 border-dashed p-6 bg-white flex flex-col h-[320px]">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold tracking-wider text-brand uppercase">Step 01</span>
            <FileText className="h-5 w-5 text-slate-400" />
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">Job Description</h4>
          <p className="text-sm text-slate-500 mb-6 flex-1">Paste the JD or upload a file to set the semantic context for candidate matching.</p>
          
          <div className="border-2 border-dashed border-indigo-200 rounded-xl bg-indigo-50/50 p-6 flex flex-col items-center justify-center mb-4">
             <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-2">
               <span className="text-brand font-bold leading-none">+</span>
             </div>
             <p className="text-sm font-semibold text-slate-900">Active JD Attached</p>
             <p className="text-[10px] text-slate-500 uppercase">{jobTitle || 'Current Job'}</p>
          </div>
          
          <button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors">
            Paste text instead
          </button>
        </div>

        {/* Step 2 */}
        <div 
          {...getRootProps()}
          className={cn(
            "rounded-xl border-2 border-brand border-dashed p-6 bg-white flex flex-col h-[320px] transition-colors cursor-pointer group relative",
            isDragActive ? "bg-indigo-50 border-brand" : "hover:bg-indigo-50/30"
          )}
        >
          <input {...getInputProps()} />
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold tracking-wider text-brand uppercase">Step 02</span>
            <CloudUpload className="h-5 w-5 text-brand" />
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">Drop CVs Here</h4>
          <p className="text-sm text-slate-500 mb-8">Process up to 500 files at once. Portfolios and multiple formats supported.</p>
          
          <div className="flex-1 flex flex-col items-center justify-center">
             <div className={cn(
               "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform",
               isDragActive ? "bg-brand text-white scale-110" : "bg-indigo-100 text-brand group-hover:scale-105"
             )}>
                <FileUp className="h-6 w-6" />
             </div>
             <h5 className="font-bold text-slate-900 text-lg">Click or drag files</h5>
             <p className="text-xs text-slate-500 mt-1">CVs, Resume, Portfolios</p>
          </div>

          {pendingFiles.length > 0 && (
             <div className="absolute inset-x-4 bottom-4">
                <Button 
                  onClick={(e) => { e.stopPropagation(); handleUpload(); }}
                  disabled={uploading}
                  className="w-full bg-brand hover:bg-brand/90 text-white shadow-sm"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {uploading ? 'Uploading...' : `Upload ${pendingFiles.length} file${pendingFiles.length !== 1 ? 's' : ''}`}
                </Button>
             </div>
          )}
        </div>
      </div>

      {/* Pending Files summary if any */}
      {pendingFiles.length > 0 && (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
           <div className="flex justify-between items-center mb-3">
             <span className="font-semibold text-sm text-slate-700">{pendingFiles.length} files selected</span>
             <button onClick={() => setPendingFiles([])} className="text-xs text-slate-500 hover:text-red-500">Clear all</button>
           </div>
           <div className="flex gap-2 overflow-x-auto pb-2">
              {pendingFiles.map((pf, i) => (
                <div key={i} className="flex-shrink-0 bg-white border border-slate-200 rounded-md py-1 px-3 flex items-center gap-2">
                   <FileText className="h-3 w-3 text-brand" />
                   <span className="text-xs text-slate-600 max-w-[100px] truncate">{pf.file.name}</span>
                   <X className="h-3 w-3 text-slate-400 cursor-pointer hover:text-red-500" onClick={() => removeFile(i)} />
                </div>
              ))}
           </div>
        </div>
      )}
      
      {error && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Feature Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white">
           <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-emerald-600" />
           </div>
           <div>
             <h5 className="text-xs font-bold text-slate-900">Intent Mapping</h5>
             <p className="text-[10px] text-slate-500">Understands career trajectory</p>
           </div>
        </div>
        <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white">
           <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
              <Languages className="h-5 w-5 text-slate-700" />
           </div>
           <div>
             <h5 className="text-xs font-bold text-slate-900">Cross-lingual</h5>
             <p className="text-[10px] text-slate-500">Parses 14+ languages</p>
           </div>
        </div>
        <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white">
           <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
           </div>
           <div>
             <h5 className="text-xs font-bold text-slate-900">PII Scrubbing</h5>
             <p className="text-[10px] text-slate-500">Bias-free matching ready</p>
           </div>
        </div>
      </div>
    </div>
  )
}
