import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function Footer() {
  const navigate = useNavigate()

  return (
    <div className="p-6 bg-slate-50 mt-auto">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-bold text-slate-700">Total Progress</span>
        <span className="text-xs font-bold text-indigo-700">16/20 files processed</span>
      </div>
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mb-6">
        <div className="h-full bg-indigo-600 rounded-full" style={{ width: '80%' }}></div>
      </div>
      <Button 
        onClick={() => navigate({ to: '/candidates' })}
        className="w-full bg-[#2F4F4F] hover:bg-[#1f3636] text-white font-bold h-12 shadow-sm rounded-xl text-sm"
      >
        View Analyzed Results
      </Button>
    </div>
  )
}
