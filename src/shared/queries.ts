import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from './api'
import { IAnalysisResponse } from '@/model/analysis'

export const useUploadVideoMutation = () => {
  return useMutation({
    mutationKey: ['analyze'],
    mutationFn: async (file: File) => {
      // Create FormData and append the raw file (no base64 conversion)
      const formData = new FormData()
      formData.append('file', file) // Append the raw file object

      const { data } = await api.post(`/upload_video`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Let the browser set the boundary automatically
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate',
        },
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
        responseType: 'json',
      })

      return data
    },
  })
}

export const getAnalysisQuery = (queryId?: string) => {
  return useQuery({
    queryKey: ['analyze', queryId],
    queryFn: async () => {
      const { data } = await api.get<IAnalysisResponse>(`/video/${queryId}`)
      return data
    },
    enabled: !!queryId,
  })
}
