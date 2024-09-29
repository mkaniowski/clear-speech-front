import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'

const TranscriptTab = ({ transcript }: { transcript: string }) => {
  return (
    <TabsContent value='transcript'>
      <Card>
        <CardHeader>
          <CardTitle>Transcript</CardTitle>
          <CardDescription>Shows transcript of the video</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>{transcript}</CardContent>
      </Card>
    </TabsContent>
  )
}

export default TranscriptTab
