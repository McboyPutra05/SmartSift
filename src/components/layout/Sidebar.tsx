import { Link, useLocation } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Settings,
  User
} from 'lucide-react'

export function Sidebar() {
  const location = useLocation()
  
  const isHome = location.pathname === '/'
  const isJobs = location.pathname.startsWith('/extraction')
  const isCandidates = location.pathname === '/candidates'
  const isSettings = location.pathname === '/settings'

  return (
    <aside className="w-[260px] flex-shrink-0 flex flex-col bg-white h-screen shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 relative">
      {/* Logo */}
      <div className="flex flex-col justify-center px-6 h-20">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-brand tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
            <LayoutDashboard className="h-4 w-4 text-white" />
          </div>
          SmartSift
        </h1>
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">AI Recruitment</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <Link
          to="/"
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
            isHome
              ? 'bg-primary/10 text-brand'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
          )}
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Link>

        <Link
          to="/extraction"
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
            isJobs
              ? 'bg-brand/10 text-brand'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
          )}
        >
          <Briefcase className="h-4 w-4" />
          Jobs
        </Link>

        <Link
          to="/candidates"
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
            isCandidates
              ? 'bg-brand/10 text-brand'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
          )}
        >
          <Users className="h-4 w-4" />
          Candidates
        </Link>

        <Link
          to="/settings"
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
            isSettings
              ? 'bg-brand/10 text-brand'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
          )}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </nav>

      {/* Footer / User Profile */}
      <div className="mt-auto p-4 mb-2">
        <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-secondary transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center overflow-hidden">
             <User className="h-4 w-4 text-slate-500" />
          </div>
          <span className="text-sm font-medium text-foreground">User Profile</span>
        </div>
      </div>
    </aside>
  )
}
