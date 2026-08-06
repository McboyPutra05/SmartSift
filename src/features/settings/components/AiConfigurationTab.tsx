import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'

export function AiConfigurationTab() {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800 mb-1">AI Configuration</h2>
      <p className="text-sm text-slate-500 mb-6">Manage how the AI interprets and processes candidate data.</p>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 divide-y divide-slate-100">
        
        {/* Semantic Matching Sensitivity */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-800 mb-1">Semantic Matching Sensitivity</h3>
              <p className="text-sm text-slate-500">Adjusts how strictly the AI matches candidate skills to job descriptions.</p>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 whitespace-nowrap ml-4">High Precision</span>
          </div>
          
          <div>
            <Slider 
              defaultValue={[75]} 
              min={0}
              max={100} 
              step={1} 
            />
            <div className="flex justify-between mt-3 text-xs text-slate-400 font-medium">
              <span>Broad (Exploratory)</span>
              <span>Strict (Exact Match)</span>
            </div>
          </div>
        </div>
        
        {/* Autonomous Shortlisting */}
        <div className="flex justify-between items-center p-6">
          <div>
            <h3 className="text-base font-bold text-slate-800 mb-1">Autonomous Shortlisting</h3>
            <p className="text-sm text-slate-500">Automatically move top 10% candidates to 'Shortlisted' stage.</p>
          </div>
          <Switch defaultChecked className="ml-4" />
        </div>
        
        {/* Blind Hiring */}
        <div className="flex justify-between items-center p-6">
          <div>
            <h3 className="text-base font-bold text-slate-800 mb-1">Blind Hiring (PII Scrubbing)</h3>
            <p className="text-sm text-slate-500">Redact names, ages, and demographic indicators from initial review.</p>
          </div>
          <Switch className="ml-4" />
        </div>
        
      </div>
    </div>
  )
}
