import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { IAnalysisResponseDataAudioSentiment } from '@/model/analysis'
import { MdSentimentDissatisfied } from 'react-icons/md'
import { MdSentimentNeutral } from 'react-icons/md'
import { MdSentimentVerySatisfied } from 'react-icons/md'

const SentimentTab = ({ sentiments }: { sentiments: IAnalysisResponseDataAudioSentiment[] }) => {
  const negativeSentiment =
    Math.round(sentiments.find((sent) => sent.label === 'negative')?.score ?? 0) * 100
  const neutralSentiment =
    Math.round(sentiments.find((sent) => sent.label === 'neutral')?.score ?? 0) * 100
  const positiveSentiment =
    Math.round(sentiments.find((sent) => sent.label === 'positive')?.score ?? 0) * 100

  return (
    <TabsContent value='sentiment'>
      <Card>
        <CardHeader>
          <CardTitle>Senitment</CardTitle>
          <CardDescription>Shows sentiments in the video</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2 grid-cols-3 w-full grid'>
          <div className='flex items-center justify-center flex-col'>
            <MdSentimentDissatisfied className='w-8 h-8' />
            <div>Negative</div>
            {negativeSentiment}%
          </div>
          <div className='flex items-center justify-center flex-col'>
            <MdSentimentNeutral className='w-8 h-8' />
            <div>Neutral</div>
            {neutralSentiment}%
          </div>
          <div className='flex items-center justify-center flex-col'>
            <MdSentimentVerySatisfied className='w-8 h-8' />
            <div>Positive</div>
            {positiveSentiment}%
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export default SentimentTab
