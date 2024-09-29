import { Route } from '@/routes/analyze/$queryId'
import InfoTabs from './components/InfoTabs'
import { getAnalysisQuery } from '@/shared/queries'
import { Skeleton } from '@/components/ui/skeleton'

const AnalyzeView = () => {
  const { queryId } = Route.useParams()
  const { data, isLoading } = getAnalysisQuery(queryId)

  if (!data || isLoading) return <Skeleton />

  return (
    <div className='min-h-screen w-full bg-slate-100 flex flex-col items-center space-y-8'>
      <div className='w-[960px] h-[540px] bg-slate-600 flex mt-8'></div>

      <InfoTabs {...data} />
    </div>
  )
}

export default AnalyzeView
