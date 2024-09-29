import AnalyzeView from '@/views/analyze'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analyze/$queryId')({
  component: () => AnalyzeView,
})
