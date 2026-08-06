import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle2, MoreVertical, Plus, KeyRound, Webhook } from 'lucide-react'

export function ApiIntegrationsTab() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-[#1e293b] mb-1">API & Integrations</h2>
        <p className="text-sm text-slate-500">Manage connections to your existing tools and generate access keys.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Main Content: Integrations (2/3 width) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Active Integrations */}
          <Card className="rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-800">Active Integrations</h3>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Slack */}
              <div className="p-5 rounded-xl border border-slate-200/80 relative overflow-hidden flex flex-col">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl"></div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-lg">#</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Slack</h4>
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Connected
                      </div>
                    </div>
                  </div>
                  <button className="p-1 rounded text-slate-400 hover:text-slate-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-slate-500 mb-5 flex-1 leading-relaxed">
                  Real-time candidate notifications and interview scheduling alerts in specific channels.
                </p>
                <Button variant="outline" className="w-full font-semibold text-slate-700 h-9 text-sm rounded-lg">Configure</Button>
              </div>

              {/* Greenhouse */}
              <div className="p-5 rounded-xl border border-slate-200/80 relative overflow-hidden flex flex-col">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl"></div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-lg">G</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Greenhouse</h4>
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Connected
                      </div>
                    </div>
                  </div>
                  <button className="p-1 rounded text-slate-400 hover:text-slate-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-slate-500 mb-5 flex-1 leading-relaxed">
                  Two-way sync for candidate profiles, notes, and pipeline stage movements.
                </p>
                <Button variant="outline" className="w-full font-semibold text-slate-700 h-9 text-sm rounded-lg">Configure</Button>
              </div>
            </div>
          </Card>

          {/* Available Integrations */}
          <Card className="rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-500"><path d="M5.5 3.5L5.5 2C5.5 1.44772 5.94772 1 6.5 1H9.5C10.0523 1 10.5 1.44772 10.5 2V3.5M2 5.5H13M3.5 5.5V12C3.5 12.5523 3.94772 13 4.5 13H10.5C11.0523 13 11.5 12.5523 11.5 12V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <h3 className="text-base font-bold text-slate-800">Available Integrations</h3>
            </div>
            
            <div className="p-6 flex flex-col gap-4">
              {/* LinkedIn Recruiter */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50/80 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0A66C2] flex items-center justify-center font-bold text-white text-lg">in</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">LinkedIn Recruiter</h4>
                    <p className="text-sm text-slate-500">Import candidates directly from LinkedIn profiles.</p>
                  </div>
                </div>
                <Button variant="ghost" className="text-indigo-600 font-semibold hover:text-indigo-700 hover:bg-indigo-50 text-sm h-9">
                  <Plus className="w-4 h-4 mr-1.5" /> Connect
                </Button>
              </div>

              {/* Workday */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50/80 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-blue-600 text-lg shadow-sm">W</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Workday</h4>
                    <p className="text-sm text-slate-500">Sync hired candidates automatically to HRIS.</p>
                  </div>
                </div>
                <Button variant="ghost" className="text-indigo-600 font-semibold hover:text-indigo-700 hover:bg-indigo-50 text-sm h-9">
                  <Plus className="w-4 h-4 mr-1.5" /> Connect
                </Button>
              </div>
            </div>
          </Card>

        </div>

        {/* Side Panel: API Keys & Webhooks (1/3 width) */}
        <div className="flex flex-col gap-6">
          
          {/* API Keys - Dark Panel */}
          <div className="bg-[#111827] rounded-2xl p-6">
            <div className="flex items-center gap-2 text-white mb-2">
              <KeyRound className="w-5 h-5" />
              <h3 className="text-lg font-bold">API Keys</h3>
            </div>
            <p className="text-sm text-slate-400 mb-6">Manage programmatic access to your SmartSift workspace.</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-slate-800/60 border border-slate-700 p-4 rounded-xl">
                <div className="text-[11px] font-semibold text-indigo-400 mb-1.5 tracking-wide">Production Key</div>
                <div className="font-mono text-sm text-white">sk_prod_...8f92</div>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 p-4 rounded-xl">
                <div className="text-[11px] font-semibold text-indigo-400 mb-1.5 tracking-wide">Test Key</div>
                <div className="font-mono text-sm text-white">sk_test_...3a1b</div>
              </div>
            </div>

            <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold h-10 rounded-xl">
              <Plus className="w-4 h-4 mr-2" /> Generate New Key
            </Button>
          </div>

          {/* Webhooks */}
          <Card className="rounded-2xl shadow-sm border border-slate-200/60 p-6">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Webhook className="w-5 h-5 text-slate-500" />
                <h3 className="text-base font-bold text-slate-800">Webhooks</h3>
              </div>
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[11px] font-bold rounded-md">2 Active</span>
            </div>
            <p className="text-sm text-slate-500 mb-5">Receive real-time HTTP payloads when specific events occur in SmartSift.</p>
            
            <div className="space-y-4 mb-5">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-800">Candidate Created</span>
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-[11px] text-slate-400 font-mono block truncate">https://api.yourdomain.com/v1/webhooks/candidate</span>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-800">Job Status Changed</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-[11px] text-slate-400 font-mono block truncate">https://api.yourdomain.com/v1/webhooks/job</span>
              </div>
            </div>

            <button className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1C7.77614 1 8 1.22386 8 1.5V7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H8V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V8H1.5C1.22386 8 1 7.77614 1 7.5C1 7.22386 1.22386 7 1.5 7H7V1.5C7 1.22386 7.22386 1 7.5 1Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              Add Endpoint
            </button>
          </Card>

        </div>

      </div>
    </div>
  )
}
