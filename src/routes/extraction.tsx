import { createFileRoute } from '@tanstack/react-router'
import { ExtractionPage } from '@/pages/ExtractionPage'

export const Route = createFileRoute('/extraction')({
  component: ExtractionPage,
})
