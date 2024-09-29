import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import EmotionTab from './EmotionTab'
import SentimentTab from './SentimentTab'
import AudioTab from './AudioTab'
import SummarizeTab from './SummarizeTab'
import TranscriptTab from './TranscriptTab'
import { IAnalysisResponse } from '@/model/analysis'

const InfoTabs = ({ query_id: _, data }: IAnalysisResponse) => {
  return (
    <Tabs
      defaultValue='sentiment'
      className='w-1/2 pb-16'
    >
      <TabsList className='grid w-full grid-cols-4'>
        <TabsTrigger value='sentiment'>Sentiment</TabsTrigger>
        <TabsTrigger value='emotion'>Emotion</TabsTrigger>
        {/* <TabsTrigger value='audio'>Aduio</TabsTrigger> */}
        <TabsTrigger value='summarize'>Summarize</TabsTrigger>
        <TabsTrigger value='transcript'>Transcript</TabsTrigger>
      </TabsList>
      <SentimentTab sentiments={data.sentiment[0]} />
      <EmotionTab {...data.emotions} />
      <AudioTab />
      <SummarizeTab summarize={data.summarize} />
      <TranscriptTab transcript={data.transcript} />
    </Tabs>
  )
}

export default InfoTabs
