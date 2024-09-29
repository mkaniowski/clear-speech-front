import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TabsContent } from '@/components/ui/tabs'
import { IAnalysisResponseDataEmotions } from '@/model/analysis'

const EmotionTab = ({
  angry,
  disgust,
  fear,
  happy,
  neutral,
  sad,
  surprise,
}: IAnalysisResponseDataEmotions) => {
  return (
    <TabsContent value='emotion'>
      <Card>
        <CardHeader>
          <CardTitle>Emotions</CardTitle>
          <CardDescription>Shows emotions in the video</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Angry</TableHead>
                <TableHead>Disgust</TableHead>
                <TableHead>Fear</TableHead>
                <TableHead>Happy</TableHead>
                <TableHead>Neutral</TableHead>
                <TableHead>Sad</TableHead>
                <TableHead>Surprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{Math.round(angry)}%</TableCell>
                <TableCell>{Math.round(disgust)}%</TableCell>
                <TableCell>{Math.round(fear)}%</TableCell>
                <TableCell>{Math.round(happy)}%</TableCell>
                <TableCell>{Math.round(neutral)}%</TableCell>
                <TableCell>{Math.round(sad)}%</TableCell>
                <TableCell>{Math.round(surprise)}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export default EmotionTab
