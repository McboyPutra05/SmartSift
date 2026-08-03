import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import type { WebSocketProgressPayload, WebSocketProgressStatus } from '@/features/screener/types/screener'
import { FileText, CheckCircle2, Loader2 } from 'lucide-react'

interface RealtimeProgressListProps {
  progressItems: Map<string, WebSocketProgressPayload>
  onViewResults?: () => void
}

const statusConfig: Record<
  WebSocketProgressStatus,
  { label: string; badgeClass: string; barClass: string; isComplete: boolean }
> = {
  PARSING: {
    label: 'EXTRACTING',
    badgeClass: 'bg-slate-100 text-slate-500',
    barClass: 'bg-brand/40',
    isComplete: false,
  },
  EMBEDDING: {
    label: 'ANALYZING',
    badgeClass: 'bg-emerald-700 text-white',
    barClass: 'bg-emerald-600',
    isComplete: false,
  },
  ANALYZING: {
    label: 'ANALYZING',
    badgeClass: 'bg-emerald-700 text-white',
    barClass: 'bg-emerald-600',
    isComplete: false,
  },
  COMPLETED: {
    label: 'DONE',
    badgeClass: 'bg-blue-100 text-brand',
    barClass: 'bg-emerald-600',
    isComplete: true,
  },
  FAILED: {
    label: 'ERROR',
    badgeClass: 'bg-red-100 text-red-600',
    barClass: 'bg-red-500',
    isComplete: true,
  },
}

export function RealtimeProgressList({ progressItems, onViewResults }: RealtimeProgressListProps) {
  const items = Array.from(progressItems.values())

  if (items.length === 0) return null

  const completed = items.filter((i) => i.status === 'COMPLETED').length
  const failed = items.filter((i) => i.status === 'FAILED').length
  const inProgress = items.length - completed - failed

  return (
    <div className="w-[360px] flex-shrink-0 flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm h-full max-h-[800px] animate-fade-in">
      {/* Header */}
      <div className="p-6 border-b border-slate-100 flex items-start justify-between">
         <div>
            <h3 className="text-lg font-bold text-slate-900">Processing Queue</h3>
            <p className="text-sm text-slate-500">{inProgress} Active • {completed} Done</p>
         </div>
         <div className="flex items-center gap-1.5 mt-1 text-[10px] font-bold tracking-wider text-slate-600 uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Engine Live
         </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
         {items.map((item) => {
            const config = statusConfig[item.status]
            const isCompleted = item.status === 'COMPLETED'
            
            return (
              <div key={item.candidate_id} className={cn(
                "p-4 rounded-xl border transition-all duration-300",
                isCompleted ? "border-slate-200 bg-white" : "border-emerald-600/30 bg-emerald-50/20"
              )}>
                 <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 max-w-[65%]">
                       <FileText className={cn("h-4 w-4", isCompleted ? "text-emerald-600" : "text-slate-400")} />
                       <span className="text-sm font-bold text-slate-900 truncate">{item.file_name}</span>
                    </div>
                    <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide", config.badgeClass)}>
                      {config.label}
                    </span>
                 </div>
                 
                 <div className="flex items-center gap-3 mb-3">
                   <Progress 
                     value={item.progress_percentage} 
                     className="h-1.5" 
                   />
                   <span className="text-xs font-semibold text-slate-600">{item.progress_percentage}%</span>
                 </div>
                 
                 {isCompleted ? (
                   <div className="flex items-center gap-4 text-xs font-medium text-emerald-700">
                     <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> Entities Mapped</span>
                     <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> Skill Clustering</span>
                   </div>
                 ) : item.status === 'FAILED' ? (
                   <p className="text-xs text-red-500">{item.message}</p>
                 ) : (
                   <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                     <Loader2 className="h-3.5 w-3.5 animate-spin" />
                     {item.message}
                   </div>
                 )}
              </div>
            )
         })}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-xl mt-auto">
         <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-900">Total Progress</span>
            <span className="text-sm font-bold text-brand">{completed + failed}/{items.length} files processed</span>
         </div>
         <Progress 
            value={((completed + failed) / Math.max(items.length, 1)) * 100} 
            className="h-1.5 mb-4 bg-slate-200" 
         />
         <button 
           onClick={onViewResults}
           disabled={completed === 0}
           className="w-full py-2.5 rounded-lg bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
         >
           View Analyzed Results
         </button>
      </div>
    </div>
  )
}
