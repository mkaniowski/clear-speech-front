import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'

const AudioTab = () => {
  return (
    <TabsContent value='audio'>
      <Card>
        <CardHeader>
          <CardTitle>Audio</CardTitle>
          <CardDescription>Shows information about audio in the video</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'></CardContent>
      </Card>
    </TabsContent>
  )
}

export default AudioTab
