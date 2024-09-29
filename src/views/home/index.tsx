import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useUploadVideoMutation } from '@/shared/queries'
import { Button } from '@/components/ui/button'
import { useNavigate } from '@tanstack/react-router'
import { useToast } from '@/hooks/use-toast'

const Home = () => {
  const { toast } = useToast()

  const { mutateAsync: uploadVideo } = useUploadVideoMutation()

  const navigate = useNavigate()

  const [file, setFile] = useState<File | undefined>(undefined)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSendFile = () => {
    if (!file) return
    uploadVideo(file)
      .then((res) => {
        navigate({ to: `/analyze/${res.query_id}` })
      })
      .catch((_) => {
        toast({
          title: 'Ooops! An error ahs occured!',
          description: 'Please try again',
        })
      })
  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-2/12 flex items-center justify-center flex-col space-y-4'>
        <Label htmlFor='picture'>Upload video to analysis</Label>
        <Input
          id='video'
          type='file'
          onChange={handleFileChange}
        />
        <Button
          onClick={handleSendFile}
          disabled={!file}
        >
          Send
        </Button>
      </div>
    </div>
  )
}

export default Home
