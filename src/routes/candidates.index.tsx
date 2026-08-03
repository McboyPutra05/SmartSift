import { createFileRoute } from '@tanstack/react-router'
import { CandidatesPage } from '@/pages/CandidatesPage'

export const Route = createFileRoute('/candidates/')({
  component: CandidatesPage,
})
