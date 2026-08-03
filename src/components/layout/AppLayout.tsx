import { Outlet } from '@tanstack/react-router'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden bg-[#F8FAFC]">
        <Header />
        
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        
        {/* Global Footer info (branding/status at very bottom) */}
        <div className="h-8 border-t border-border bg-[#F8FAFC] flex items-center justify-between px-6 text-[11px] text-muted-foreground flex-shrink-0">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1.5 font-semibold text-slate-600">
               <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
               <span>SYSTEM STATUS: ALL SYSTEMS OPERATIONAL</span>
             </div>
          </div>
          <div className="flex gap-4 font-medium">
            <a href="#" className="hover:text-foreground">Help Center</a>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </main>
    </div>
  )
}
