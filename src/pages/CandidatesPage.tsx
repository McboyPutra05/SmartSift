import { useNavigate } from '@tanstack/react-router'
import { CandidateTable } from '@/features/screener/components/CandidateTable'

export function CandidatesPage() {
  const navigate = useNavigate()
  
  // Hardcode job 1 for now since we're viewing all candidates for a specific campaign.
  // In a real app, there would be a dropdown to select the campaign.
  const job = { id: '1', title: 'Senior Frontend Developer' }

  return (
    <div className="h-full flex flex-col bg-[#F8FAFC] overflow-y-auto">
      <div className="p-8 max-w-[1400px] mx-auto w-full flex flex-col gap-8 animate-fade-in">
        
        {/* Header */}
        <div>
          <h2 className="text-xl font-bold text-foreground">Screener Results</h2>
          <p className="text-sm text-muted-foreground mt-1">Review AI analysis for {job.title}</p>
        </div>

        {/* Screener Table Section */}
        <section>
          <CandidateTable
            jobDescriptionId={job.id}
            onSelectCandidate={(id) => navigate({ to: '/candidates/$candidateId', params: { candidateId: id } })}
          />
        </section>

      </div>
    </div>
  )
}
