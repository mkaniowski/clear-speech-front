import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'

const SummarizeTab = ({ summarize }: { summarize: string }) => {
  return (
    <TabsContent value='summarize'>
      <Card>
        <CardHeader>
          <CardTitle>Summarize</CardTitle>
          <CardDescription>Summirazes the video</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>{summarize}</CardContent>
      </Card>
    </TabsContent>
  )
}

export default SummarizeTab
