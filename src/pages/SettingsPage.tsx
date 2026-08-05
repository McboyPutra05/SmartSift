import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AiConfigurationTab } from '@/features/settings/components/AiConfigurationTab'
import { TeamManagementTab } from '@/features/settings/components/TeamManagementTab'
import { ApiIntegrationsTab } from '@/features/settings/components/ApiIntegrationsTab'
import { BillingTab } from '@/features/settings/components/BillingTab'

export function SettingsPage() {
  return (
    <div className="h-full flex flex-col bg-[#F8FAFC] overflow-y-auto">
      <div className="p-8 max-w-[1200px] mx-auto w-full flex flex-col gap-2 animate-fade-in mb-12">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#1e293b] tracking-tight">Platform Settings</h1>

        {/* Tabs */}
        <Tabs defaultValue="ai-configuration" className="w-full">
          <TabsList
            variant="line"
            className="w-full justify-start border-b border-slate-200 rounded-none p-0 h-auto gap-0"
          >
            <TabsTrigger
              value="ai-configuration"
              className="rounded-none px-4 py-3 text-sm font-semibold text-slate-500 hover:text-slate-700 data-active:text-indigo-600 after:!bg-indigo-600"
            >
              AI Configuration
            </TabsTrigger>
            <TabsTrigger
              value="team-management"
              className="rounded-none px-4 py-3 text-sm font-semibold text-slate-500 hover:text-slate-700 data-active:text-indigo-600 after:!bg-indigo-600"
            >
              Team Management
            </TabsTrigger>
            <TabsTrigger
              value="api-integrations"
              className="rounded-none px-4 py-3 text-sm font-semibold text-slate-500 hover:text-slate-700 data-active:text-indigo-600 after:!bg-indigo-600"
            >
              API & Integrations
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="rounded-none px-4 py-3 text-sm font-semibold text-slate-500 hover:text-slate-700 data-active:text-indigo-600 after:!bg-indigo-600"
            >
              Billing
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-8">
            <TabsContent value="ai-configuration">
              <AiConfigurationTab />
            </TabsContent>
            
            <TabsContent value="team-management">
              <TeamManagementTab />
            </TabsContent>
            
            <TabsContent value="api-integrations">
              <ApiIntegrationsTab />
            </TabsContent>
            
            <TabsContent value="billing">
              <BillingTab />
            </TabsContent>
          </div>
        </Tabs>
        
      </div>
    </div>
  )
}
