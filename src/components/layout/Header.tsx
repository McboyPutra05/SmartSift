import { Search, Bell, HelpCircle, Upload } from 'lucide-react'
import { useLocation } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Header() {
  const location = useLocation()
  
  const isHome = location.pathname === '/'
  const isExtraction = location.pathname.includes('/extraction')
  
  let title = 'Candidates'
  if (isHome) title = 'Recruitment Hub'
  if (isExtraction) title = 'Bulk Upload'

  return (
    <header className="flex items-center justify-between px-8 h-20 bg-white flex-shrink-0 w-full shadow-[0_4px_24px_rgba(0,0,0,0.02)] z-0 relative">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-brand">
          {title}
        </h2>
        {isExtraction && (
          <Badge variant="outline" className="text-[10px] font-bold text-emerald-600 border-emerald-200 bg-emerald-50 px-2 uppercase tracking-wide">
            Processing Hub
          </Badge>
        )}
      </div>
      
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative w-[320px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search files..."
            className="w-full pl-9 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-700"
          />
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-5 text-slate-500">
          <button className="hover:text-foreground transition-colors"><Bell className="h-5 w-5" /></button>
          <button className="hover:text-foreground transition-colors"><HelpCircle className="h-5 w-5" /></button>
          <Button className="gap-2 shadow-sm">
            <Upload className="h-4 w-4" />
            Bulk Upload
          </Button>
        </div>
      </div>
    </header>
  )
}
