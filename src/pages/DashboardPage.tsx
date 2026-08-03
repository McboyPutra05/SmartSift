import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'

import { JobForm } from '@/features/job-description/components/JobForm'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Users, History, CheckCircle2,
  AlertTriangle, Sparkles, Plus, User
} from 'lucide-react'

export function DashboardPage() {
  const navigate = useNavigate()
  const [showJobForm, setShowJobForm] = useState(false)
  const isLoading = false
  const jobs = [
    { id: '1', title: 'Senior Frontend Developer', department: 'Engineering', candidates_count: 24 },
    { id: '2', title: 'Product Manager', department: 'Product', candidates_count: 12 },
  ]

  const handleJobCreated = (jobId: string) => {
    setShowJobForm(false)
    navigate({ to: '/jobs/$jobId', params: { jobId } })
  }

  return (
    <div className="h-full">
      {showJobForm ? (
        <div className="p-8 max-w-3xl mx-auto">
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-xl font-semibold text-foreground">Create New Campaign</h2>
             <button onClick={() => setShowJobForm(false)} className="text-muted-foreground hover:text-foreground">Close</button>
           </div>
           <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
             <JobForm onSuccess={handleJobCreated} />
           </div>
        </div>
      ) : (
        <div className="p-8 flex gap-8 max-w-[1400px] mx-auto animate-fade-in">
              
              {/* Left Column (Main) */}
              <div className="flex-1 space-y-8">
                {/* Header Stats */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Welcome back, Sarah</p>
                  <h3 className="text-xl font-bold text-foreground mb-4">Operations Overview</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {/* Stat 1 */}
                    <Card className="p-5 flex items-center gap-4 rounded-xl border-slate-200 shadow-sm">
                      <div className="p-3 bg-blue-50 text-brand rounded-lg">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">Candidates Processed</p>
                        <p className="text-2xl font-bold text-foreground mt-0.5">1,284</p>
                      </div>
                    </Card>
                    
                    {/* Stat 2 */}
                    <Card className="p-5 flex items-center gap-4 rounded-xl border-slate-200 shadow-sm">
                      <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">Avg. Match Score</p>
                        <p className="text-2xl font-bold text-foreground mt-0.5">88.4%</p>
                      </div>
                    </Card>
                    
                    {/* Stat 3 */}
                    <Card className="p-5 flex items-center gap-4 rounded-xl border-slate-200 shadow-sm">
                      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">New Top Matches</p>
                        <p className="text-2xl font-bold text-foreground mt-0.5">42</p>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Active Campaigns */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-foreground">Active Campaigns</h3>
                    <button className="text-sm font-medium text-brand hover:underline">View All Campaigns &rarr;</button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Hardcoded cards to match design closely, though we could map `jobs` here */}
                    {isLoading ? (
                       <Skeleton className="h-48 rounded-xl" />
                    ) : (
                      <>
                        {jobs.slice(0, 2).map((job) => (
                           <Card key={job.id} className="p-6 rounded-xl border-slate-200 shadow-sm flex flex-col justify-between h-48 cursor-pointer hover:border-brand/30 transition-colors bg-white">
                             <div>
                               <div className="flex justify-between items-start mb-3">
                                  <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none font-medium text-[10px] uppercase">{job.department || 'General'}</Badge>
                                  <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white border-none font-medium text-[10px] uppercase">AI Filtering Active</Badge>
                               </div>
                               <h4 className="font-bold text-lg text-foreground line-clamp-1">{job.title}</h4>
                               <p className="text-sm text-muted-foreground mt-1 line-clamp-2">Looking for candidates matching this role's specific requirements.</p>
                             </div>
                             <div className="flex justify-between items-end mt-4 pt-4 border-t border-slate-100">
                               <div className="flex -space-x-2">
                                  <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">JD</div>
                                  <div className="w-7 h-7 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-emerald-600">SK</div>
                                  <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">+{job.candidates_count}</div>
                               </div>
                               <div className="text-right">
                                  <p className="text-[10px] font-semibold text-muted-foreground uppercase">Candidates</p>
                                  <p className="text-sm font-bold text-foreground">{job.candidates_count} Total</p>
                               </div>
                             </div>
                           </Card>
                        ))}
                        
                        {/* Static "Start New Campaign" card matching the UI */}
                        <Card 
                          onClick={() => setShowJobForm(true)}
                          className="p-6 rounded-xl border-2 border-dashed border-slate-200 bg-transparent flex flex-col items-center justify-center h-48 cursor-pointer hover:bg-slate-50 transition-colors"
                        >
                           <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand mb-3">
                              <Plus className="h-5 w-5" />
                           </div>
                           <h4 className="font-semibold text-foreground">Start New Campaign</h4>
                        </Card>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Sidebar (Recent Activity) */}
              <div className="w-[320px] flex-shrink-0">
                <Card className="rounded-xl border-slate-200 shadow-sm bg-white h-full flex flex-col">
                  <div className="flex items-center justify-between p-5 border-b border-slate-100">
                    <h3 className="font-bold text-foreground">Recent Activity</h3>
                    <History className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 p-5 space-y-6 overflow-y-auto">
                    {/* Activity Item 1 */}
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">AI Extraction Complete</p>
                        <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">Successfully parsed 15 new resumes for <span className="text-brand font-medium">Senior Frontend Dev</span>.</p>
                        <p className="text-xs text-slate-400 mt-1">2 minutes ago</p>
                      </div>
                    </div>
                    
                    {/* Activity Item 2 */}
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <User className="h-4 w-4 text-brand" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">New Top Match Identified</p>
                        <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed"><span className="text-brand font-medium">Alex Chen</span> scored 96% fit for Product Manager role.</p>
                        <button className="mt-2 px-3 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600 hover:bg-slate-200 transition-colors">Review</button>
                        <p className="text-xs text-slate-400 mt-2">1 hour ago</p>
                      </div>
                    </div>

                    {/* Activity Item 3 */}
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Extraction Warning</p>
                        <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">Incomplete data found in 2 resumes from the LinkedIn bulk upload.</p>
                        <p className="text-xs text-slate-400 mt-1">3 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-slate-100">
                    <button className="w-full py-2 rounded-md border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                      View Activity Logs
                    </button>
                  </div>
                </Card>
              </div>

        </div>
      )}
    </div>
  )
}
