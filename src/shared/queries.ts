import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from './api'
import { IAnalysisResponse } from '@/model/analysis'

export const useUploadVideoMutation = () => {
  return useMutation({
    mutationKey: ['analyze'],
    mutationFn: async (file: File) => {
      const { data } = await api.post(
        `/upload_video`,
        { file },
        {
          headers: { 'Content-Type': file.type },
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
          responseType: 'json',
        },
      )
      return data
    },
  })
}

export const getAnalysisQuery = (queryId: string) => {
  return useQuery({
    queryKey: ['analyze', queryId],
    queryFn: async () => {
      const { data } = await api.get<IAnalysisResponse>(`/video/${queryId}`)
      return data
    },
  })
}
