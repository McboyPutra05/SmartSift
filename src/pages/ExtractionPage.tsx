
import { Button } from '@/components/ui/button'
import {
  Sparkles, FileText, UploadCloud, FileUp, 
  CheckCircle2, BrainCircuit, Languages, ShieldCheck
} from 'lucide-react'

export function ExtractionPage() {
  return (
    <div className="h-full flex flex-col bg-[#F8FAFC] overflow-y-auto">
      <div className="p-8 max-w-[1400px] mx-auto w-full flex flex-col gap-6 animate-fade-in mb-12">
        
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-[#93A5F5] to-[#A5B4FC] rounded-2xl p-6 flex items-start gap-5 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-[#2F4F4F] flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Semantic Extraction Active</h2>
            <p className="text-white/90 text-sm max-w-2xl leading-relaxed">
              Our neural engine is context-mapping candidate experience beyond simple keywords. JD context is required for weighted scoring.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Side: Steps (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              
              {/* STEP 01 */}
              <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col border border-transparent">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase">Step 01</span>
                  <FileText className="h-5 w-5 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Job Description</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Paste the JD or upload a file to set the semantic context for candidate matching.
                </p>
                
                <div className="flex-1 border-2 border-dashed border-indigo-200 rounded-xl bg-indigo-50/30 flex flex-col items-center justify-center p-6 text-center mb-4 hover:bg-indigo-50/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white border border-indigo-100 flex items-center justify-center mb-3 shadow-sm">
                    <span className="text-indigo-500 font-medium text-xl">+</span>
                  </div>
                  <p className="text-sm font-bold text-indigo-900 mb-1">Attach JD File</p>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">PDF, DOCX, TXT</p>
                </div>
                
                <Button variant="outline" className="w-full text-slate-700 font-bold border-slate-200 shadow-sm h-11">
                  Paste text instead
                </Button>
              </div>

              {/* STEP 02 */}
              <div className="bg-white rounded-2xl p-6 flex flex-col border-2 border-dashed border-indigo-300 relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-indigo-500 tracking-widest uppercase">Step 02</span>
                  <UploadCloud className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Drop CVs Here</h3>
                <p className="text-sm text-slate-500 mb-10 leading-relaxed">
                  Process up to 500 files at once. Portfolios and multiple formats supported.
                </p>
                
                <div className="flex-1 flex flex-col items-center justify-center text-center pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-5 shadow-sm">
                    <FileUp className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Click or drag files</h4>
                  <p className="text-sm text-slate-500 font-medium">CVs, Resume,<br/>Portfolios</p>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 border border-transparent">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <BrainCircuit className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Intent Mapping</h5>
                  <p className="text-[10px] text-slate-500">Understands career trajectory</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 border border-transparent">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Languages className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Cross-lingual</h5>
                  <p className="text-[10px] text-slate-500">Parses 14+ languages</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 border border-transparent">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">PII Scrubbing</h5>
                  <p className="text-[10px] text-slate-500">Bias-free matching ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Processing Queue */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 flex flex-col h-[700px]">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Processing Queue</h3>
                <p className="text-xs font-medium text-slate-500 mt-1">4 Active • 12 Done</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Engine Live</span>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              
              {/* Item 1: Done */}
              <div className="border border-slate-200 rounded-xl p-4 shadow-sm bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900">resume_alex_chen.pdf</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-wider rounded-full">Done</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600">100%</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-emerald-700">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3" /> Entities Mapped</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3" /> Skill Clustering</span>
                </div>
              </div>

              {/* Item 2: Analyzing */}
              <div className="border border-emerald-600 rounded-xl p-4 shadow-sm bg-emerald-50/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-emerald-700" />
                    <span className="text-sm font-bold text-slate-900">sarah_smith_v2.docx</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">Analyzing</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '64%' }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600">64%</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-700">
                  <div className="w-3 h-3 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin"></div>
                  Running semantic similarity against Job Description...
                </div>
              </div>

              {/* Item 3: Extracting */}
              <div className="border border-indigo-200 rounded-xl p-4 shadow-sm bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-indigo-400" />
                    <span className="text-sm font-bold text-slate-900">portfolio_john_d.pdf</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-500 text-[10px] font-bold uppercase tracking-wider rounded-full">Extracting</span>
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-400 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600">28%</span>
                </div>
              </div>

              {/* Item 4: Waiting */}
              <div className="border border-slate-100 rounded-xl p-4 shadow-sm bg-slate-50/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-bold text-slate-400">resume_marcus_v4.pdf</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-full">Waiting</span>
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden"></div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto rounded-b-2xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-slate-700">Total Progress</span>
                <span className="text-xs font-bold text-indigo-700">16/20 files processed</span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1f3636] text-white font-bold h-12 shadow-sm rounded-xl text-sm">
                View Analyzed Results
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
