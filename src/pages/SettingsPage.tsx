import { useState } from 'react'
import { AiConfigurationTab } from '@/features/settings/components/AiConfigurationTab'
import { TeamManagementTab } from '@/features/settings/components/TeamManagementTab'
import { ApiIntegrationsTab } from '@/features/settings/components/ApiIntegrationsTab'
import { BillingTab } from '@/features/settings/components/BillingTab'

type TabId = 'ai-configuration' | 'team-management' | 'api-integrations' | 'billing'

const TABS: { id: TabId; label: string }[] = [
  { id: 'ai-configuration', label: 'AI Configuration' },
  { id: 'team-management', label: 'Team Management' },
  { id: 'api-integrations', label: 'API & Integrations' },
  { id: 'billing', label: 'Billing' },
]

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('ai-configuration')

  return (
    <div className="h-full flex flex-col bg-[#F8FAFC] overflow-y-auto">
      <div className="p-8 max-w-[1200px] mx-auto w-full flex flex-col gap-6 animate-fade-in mb-12">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#1e293b] tracking-tight">Platform Settings</h1>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200">
          <nav className="flex gap-0 -mb-px">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap',
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'ai-configuration' && <AiConfigurationTab />}
          {activeTab === 'team-management' && <TeamManagementTab />}
          {activeTab === 'api-integrations' && <ApiIntegrationsTab />}
          {activeTab === 'billing' && <BillingTab />}
        </div>

      </div>
    </div>
  )
}
