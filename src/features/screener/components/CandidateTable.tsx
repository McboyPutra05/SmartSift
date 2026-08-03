import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import type { Candidate } from '@/features/screener/types/screener'
import {
  ChevronDown, AlertTriangle, CheckCircle2, MoreHorizontal, LayoutList, LayoutGrid, Info
} from 'lucide-react'

interface CandidateTableProps {
  jobDescriptionId: string
  onSelectCandidate: (candidateId: string) => void
}

function CircularProgress({ score, label, colorClass, bgColorClass }: { score: number, label: string, colorClass: string, bgColorClass: string }) {
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-1.5">
       <div className="relative w-12 h-12 flex items-center justify-center">
         <svg className="w-12 h-12 transform -rotate-90">
           <circle cx="24" cy="24" r={radius} stroke="currentColor" strokeWidth="4" fill="none" className="text-slate-100" />
           <circle 
             cx="24" cy="24" r={radius} 
             stroke="currentColor" 
             strokeWidth="4" 
             fill="none" 
             className={colorClass}
             strokeDasharray={circumference}
             strokeDashoffset={strokeDashoffset}
             strokeLinecap="round"
           />
         </svg>
         <span className="absolute text-sm font-bold text-slate-900">{score}%</span>
       </div>
       <span className={cn("text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm", bgColorClass, colorClass)}>{label}</span>
    </div>
  )
}

export function CandidateTable({ onSelectCandidate }: CandidateTableProps) {
  const [minScore, setMinScore] = useState(75)
  const isLoading = false
  const candidates: Candidate[] = [
    {
      id: 'c1',
      file_name: 'alex_chen_resume.pdf',
      status: 'completed',
      screening_result: { overall_score: 96, key_skills_found: ['React', 'TypeScript'], missing_skills: [], matched_skills: ['React', 'TypeScript'] },
      full_name: 'Alex Chen',
      email: 'alex.chen@example.com'
    },
    {
      id: 'c2',
      file_name: 'sarah_smith.docx',
      status: 'completed',
      screening_result: { overall_score: 88, key_skills_found: ['React'], missing_skills: ['GraphQL'], matched_skills: ['React'] },
      full_name: 'Sarah Smith',
      email: 'sarah@example.com'
    },
    {
      id: 'c3',
      file_name: 'john_doe_portfolio.pdf',
      status: 'completed',
      screening_result: { overall_score: 72, key_skills_found: [], missing_skills: ['React', 'TypeScript'], matched_skills: [] },
      full_name: 'John Doe',
      email: 'john@example.com'
    }
  ] as unknown as Candidate[]

  const getScoreInfo = (score: number) => {
     if (score >= 95) return { label: 'PERFECT FIT', colorClass: 'text-emerald-600', bgColorClass: 'bg-emerald-100' }
     if (score >= 85) return { label: 'HIGH POTENTIAL', colorClass: 'text-emerald-500', bgColorClass: 'bg-emerald-50' }
     if (score >= 75) return { label: 'STRONG MATCH', colorClass: 'text-emerald-400', bgColorClass: 'bg-emerald-50' }
     if (score >= 60) return { label: 'GOOD MATCH', colorClass: 'text-blue-500', bgColorClass: 'bg-blue-50' }
     return { label: 'AVERAGE FIT', colorClass: 'text-amber-500', bgColorClass: 'bg-amber-50' }
  }

  const filtered = candidates
    .filter((c) => {
       const score = c.screening_result?.overall_score ?? 0
       if (c.status === 'completed' && score < minScore) return false
       return true
    })
    .sort((a, b) => {
       const aScore = a.screening_result?.overall_score ?? 0
       const bScore = b.screening_result?.overall_score ?? 0
       return bScore - aScore // Default sort by score descending
    })

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    )
  }

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden animate-fade-in">
      
      {/* Top Filter Bar */}
      <div className="px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 bg-slate-50">
         <div className="flex items-center gap-6">
            {/* Min Score Slider */}
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
               <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">Min AI Score:</span>
               <input 
                 type="range" 
                 min="0" max="100" 
                 value={minScore} 
                 onChange={(e) => setMinScore(Number(e.target.value))}
                 className="w-24 accent-brand"
               />
               <span className="text-xs font-bold text-slate-900 w-8">{minScore}%</span>
            </div>

            {/* Experience Level */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
               <span className="text-xs font-semibold text-slate-700">Experience Level</span>
               <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>

            {/* Key Skills */}
            <div className="flex items-center gap-2">
               <span className="text-xs font-semibold text-slate-700">Key Skills:</span>
               <div className="flex items-center gap-1.5">
                  <span className="text-[11px] px-2 py-1 bg-white border border-slate-200 rounded text-slate-600 flex items-center gap-1">
                    React <span className="text-slate-400 hover:text-red-500 cursor-pointer">×</span>
                  </span>
                  <span className="text-[11px] px-2 py-1 bg-white border border-slate-200 rounded text-slate-600 flex items-center gap-1">
                    GraphQL <span className="text-slate-400 hover:text-red-500 cursor-pointer">×</span>
                  </span>
                  <button className="text-[11px] font-semibold text-brand hover:underline ml-1">+ Add Skill</button>
               </div>
            </div>
         </div>

         {/* Display Mode */}
         <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-1">Display:</span>
            <div className="flex items-center border border-slate-200 rounded-md bg-white p-0.5">
               <button className="p-1.5 rounded bg-slate-100 text-slate-700"><LayoutList className="h-4 w-4" /></button>
               <button className="p-1.5 rounded text-slate-400 hover:text-slate-700"><LayoutGrid className="h-4 w-4" /></button>
            </div>
         </div>
      </div>

      {/* Table */}
      <div className="w-full">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-slate-200 bg-white">
                  <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-brand focus:ring-brand" /></th>
                  <th className="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Candidate & Role</th>
                  <th className="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">AI Match Score</th>
                  <th className="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Semantic Gaps</th>
                  <th className="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Top Skills</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               {filtered.map(candidate => {
                  const result = candidate.screening_result
                  const name = candidate.full_name || candidate.file_name.replace('.pdf', '')
                  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
                  
                  return (
                    <tr key={candidate.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer" onClick={() => onSelectCandidate(candidate.id)}>
                       <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}><input type="checkbox" className="rounded border-slate-300 text-brand focus:ring-brand" /></td>
                       <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-brand font-bold text-sm flex-shrink-0">
                                {initials}
                             </div>
                             <div>
                                <p className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors">{name}</p>
                                <p className="text-xs text-slate-500">{candidate.email || 'Candidate'}</p>
                             </div>
                          </div>
                       </td>
                       <td className="px-4 py-4">
                          {result ? (
                             <div className="flex justify-center">
                               {(() => {
                                 const info = getScoreInfo(result.overall_score)
                                 return <CircularProgress score={result.overall_score} label={info.label} colorClass={info.colorClass} bgColorClass={info.bgColorClass} />
                               })()}
                             </div>
                          ) : (
                             <div className="text-center text-xs text-slate-400">Processing...</div>
                          )}
                       </td>
                       <td className="px-4 py-4 max-w-[240px]">
                          {result ? (
                             result.missing_skills.length > 0 ? (
                               <div className="space-y-2">
                                  <div className="flex gap-2 items-start">
                                     <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                                     <span className="text-sm text-slate-700 leading-tight">{result.missing_skills[0]} (missing requirement)</span>
                                  </div>
                                  {result.missing_skills.length > 1 && (
                                     <div className="flex gap-2 items-start">
                                        <Info className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-xs text-slate-500 leading-tight">Minor mismatch: {result.missing_skills[1]}</span>
                                     </div>
                                  )}
                               </div>
                             ) : (
                               <div className="flex items-center gap-2 text-emerald-600">
                                  <CheckCircle2 className="h-4 w-4" />
                                  <span className="text-sm font-medium">Fully Aligned Semantic Match</span>
                               </div>
                             )
                          ) : <span className="text-slate-300">—</span>}
                       </td>
                       <td className="px-4 py-4 max-w-[200px]">
                          {result ? (
                             <div className="flex flex-wrap gap-1.5">
                               {result.matched_skills.slice(0, 3).map(skill => (
                                 <span key={skill} className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-[11px] font-medium whitespace-nowrap">
                                    {skill}
                                 </span>
                               ))}
                             </div>
                          ) : <span className="text-slate-300">—</span>}
                       </td>
                       <td className="px-6 py-4 text-right">
                          <button onClick={(e) => { e.stopPropagation(); onSelectCandidate(candidate.id) }} className="p-2 text-slate-400 hover:text-brand hover:bg-slate-100 rounded-lg transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                       </td>
                    </tr>
                  )
               })}
               {filtered.length === 0 && (
                  <tr>
                     <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                        No candidates found matching your filters.
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
      
      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
         <span className="text-xs text-slate-500 font-medium">Showing {filtered.length} of {candidates.length} candidates</span>
         
         <div className="flex items-center gap-1">
            <button className="px-3 py-1 border border-slate-200 bg-white rounded-md text-xs text-slate-600 hover:bg-slate-50 font-medium">&lt;</button>
            <span className="px-3 text-xs font-semibold text-slate-700">Page 1 of 1</span>
            <button className="px-3 py-1 border border-slate-200 bg-white rounded-md text-xs text-slate-600 hover:bg-slate-50 font-medium">&gt;</button>
         </div>
      </div>
    </div>
  )
}
