import { useParams } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { 
  Mail, Phone, Link as LinkIcon, CheckCircle2, 
  AlertTriangle, Share, Download, ChevronDown, Check, Sparkles
} from 'lucide-react'


export function CandidateDetailPage() {
  const { candidateId } = useParams({ strict: false }) as { candidateId: string }
  console.log('Viewing candidate:', candidateId)

  // Mock data for the candidate based on UI design
  const candidate = {
    name: 'Elena Rodriguez',
    role: 'Senior Product Manager',
    experience: '8+ Years Experience',
    location: 'New York, NY',
    email: 'elena.rodriguez@email.com',
    phone: '+1 (555) 0123-4567',
    linkedin: 'linkedin.com/in/elenarod',
    fitScore: 92,
    competenciesMatched: 14,
    competenciesTotal: 15,
    targetRole: 'Sr. Product Lead',
  }

  return (
    <div className="h-full flex flex-col bg-[#F8FAFC] overflow-y-auto relative">
      <div className="p-8 max-w-[1400px] mx-auto w-full flex flex-col gap-6 mb-24 animate-fade-in">
        
        {/* Top Card: Candidate Profile & Fit Score */}
        <div className="bg-white rounded-2xl shadow-sm border border-transparent p-8 flex items-center justify-between">
          
          {/* Info Section */}
          <div className="flex gap-6 items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-sm">
                <img 
                  src="https://i.pravatar.cc/150?u=elena" 
                  alt="Elena Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-3xl font-bold text-slate-900">{candidate.name}</h2>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">
                  Active Candidate
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                {candidate.role} • {candidate.experience} • {candidate.location}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {candidate.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {candidate.phone}
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4" />
                  {candidate.linkedin}
                </div>
              </div>
            </div>
          </div>
          
          {/* Fit Score Section */}
          <div className="flex flex-col items-center justify-center pr-8 border-l border-slate-100 pl-12">
            <div className="relative w-24 h-24 flex items-center justify-center mb-2">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E2E8F0" strokeWidth="8" />
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="transparent" 
                  stroke="#3b82f6" 
                  strokeWidth="8" 
                  strokeDasharray={`${251.2 * (candidate.fitScore / 100)} 251.2`} 
                  strokeLinecap="round" 
                />
              </svg>
              <span className="absolute text-2xl font-bold text-slate-900">{candidate.fitScore}%</span>
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Fit Score</h3>
            <p className="text-sm text-slate-500 text-center max-w-[200px] mt-1 leading-relaxed">
              Matches {candidate.competenciesMatched}/{candidate.competenciesTotal} required competencies for <span className="font-bold text-slate-900">{candidate.targetRole}</span>
            </p>
            <button className="text-emerald-600 text-xs font-semibold mt-3 flex items-center gap-1 hover:text-emerald-700">
              View matching logic &rarr;
            </button>
          </div>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column: Competency Map */}
          <div className="bg-white rounded-2xl shadow-sm border border-transparent p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-slate-900">Competency Map</h3>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-700"></div>
                  Elena
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full border border-slate-400 border-dashed"></div>
                  Target
                </span>
              </div>
            </div>
            
            {/* Mock Radar Chart Area */}
            <div className="flex-1 flex items-center justify-center py-10 relative">
               {/* This is a visual approximation of the radar chart from the image */}
               <div className="w-64 h-64 relative flex items-center justify-center">
                 {/* Hexagon base rings */}
                 <div className="absolute inset-0 border border-slate-200 rounded-full scale-100"></div>
                 <div className="absolute inset-0 border border-slate-200 rounded-full scale-75"></div>
                 <div className="absolute inset-0 border border-slate-200 rounded-full scale-50"></div>
                 <div className="absolute inset-0 border border-slate-200 rounded-full scale-25"></div>
                 
                 {/* Cross lines */}
                 <div className="absolute w-full h-px bg-slate-200"></div>
                 <div className="absolute h-full w-px bg-slate-200"></div>
                 
                 {/* Target shape (dashed) */}
                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                   <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                 </svg>
                 
                 {/* Candidate shape */}
                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                   <polygon points="50,15 85,50 50,85 20,50" fill="rgba(67, 56, 202, 0.1)" stroke="#4338ca" strokeWidth="2" />
                 </svg>

                 {/* Labels */}
                 <span className="absolute -top-6 text-xs font-bold text-slate-600">Strategy</span>
                 <span className="absolute -right-12 text-xs font-bold text-slate-600">Leadership</span>
                 <span className="absolute -bottom-6 text-xs font-bold text-slate-600">Tech Stack</span>
                 <span className="absolute -left-12 text-xs font-bold text-slate-600">Execution</span>
               </div>
            </div>
            
            {/* Insights Bottom */}
            <div className="grid grid-cols-2 gap-4 mt-auto pt-6">
              <div className="bg-indigo-50/50 rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">Highest Edge</p>
                <p className="font-bold text-slate-900 text-sm">Strategic Vision (9.8)</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">Gap Area</p>
                <p className="font-bold text-slate-900 text-sm">Agile Mentorship (6.2)</p>
              </div>
            </div>
          </div>

          {/* Right Column: AI Insights & Interview Guide */}
          <div className="flex flex-col gap-6">
            
            {/* AI Insights Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-transparent p-6">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-emerald-700" />
                <h3 className="text-lg font-bold text-slate-900">AI Insights: Strategic Fit</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">Value Propositions</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed">Proven track record scaling B2B SaaS from $10M to $50M ARR.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed">Expertise in AI-driven automation workflows, aligned with our 2024 roadmap.</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-4">Potential Flags</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed">Has primarily worked in large corporate environments; may need time to adjust to seed-stage speed.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tailored Interview Guide */}
            <div className="bg-white rounded-2xl shadow-sm border border-transparent p-6 flex-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
                    <path d="M2 12h3M19 12h3M12 2v3M12 19v3M5 5l2 2M17 17l2 2M5 19l2-2M17 5l-2 2" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Tailored Interview Guide</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-indigo-50/40 rounded-xl p-5">
                  <p className="text-xs font-bold text-emerald-700 mb-2">Question 1: Transition Management</p>
                  <p className="text-sm text-slate-700 leading-relaxed">"In your previous role at Enterprise Corp, you managed large teams. How would you approach the first 30 days here, where you'll be a hands-on individual contributor while building the team?"</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <p className="text-xs font-bold text-emerald-700 mb-2">Question 2: Domain Deep-Dive</p>
                  <p className="text-sm text-slate-700 leading-relaxed">"You mentioned experience with 'Predictive Logic' systems. Can you walk us through a time an AI insight failed your user, and how you iterated on the UI to solve for trust?"</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <p className="text-xs font-bold text-emerald-700 mb-2">Question 3: Growth Mindset</p>
                  <p className="text-sm text-slate-700 leading-relaxed">"Our roadmap requires pivoting quickly based on user feedback. Describe a product launch you led where you had to kill a major feature 2 weeks before release."</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-[260px] right-0 bg-indigo-50/90 backdrop-blur-sm border-t border-indigo-100 p-4 flex items-center justify-between px-8 z-10">
         <div className="flex items-center gap-4">
            <div>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-0.5">Current Stage</p>
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                 <span className="text-sm font-bold text-slate-900">Technical Interview</span>
              </div>
            </div>
            
            <div className="h-8 w-px bg-slate-300 mx-2"></div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="bg-white border-transparent shadow-sm hover:bg-slate-50 h-10 w-10">
                 <Download className="h-4 w-4 text-slate-600" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white border-transparent shadow-sm hover:bg-slate-50 h-10 w-10">
                 <Share className="h-4 w-4 text-slate-600" />
              </Button>
            </div>
         </div>
         
         <div className="flex items-center gap-6">
            <button className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
               Reject Candidate
            </button>
            <div className="flex">
               <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-r-none border-r border-emerald-800/50 shadow-sm px-6 h-10">
                 Move to Decision Stage
               </Button>
               <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-l-none shadow-sm px-3 h-10">
                 <ChevronDown className="h-4 w-4" />
               </Button>
            </div>
         </div>
      </div>
    </div>
  )
}
