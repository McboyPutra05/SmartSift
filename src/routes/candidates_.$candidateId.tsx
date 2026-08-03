import { createFileRoute } from '@tanstack/react-router'
import { CandidateDetailPage } from '@/pages/CandidateDetailPage'

export const Route = createFileRoute('/candidates_/$candidateId')({
  component: CandidateDetailPage,
})
