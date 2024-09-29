export interface IAnalysisResponse {
  query_id: string
  data: IAnalysisResponseData
}

export interface IAnalysisResponseDataEmotions {
  angry: number
  disgust: number
  fear: number
  happy: number
  neutral: number
  sad: number
  surprise: number
}

export interface IAnalysisResponseDataAudio {
  silence_intervals: number[][]
  average_volume: {
    loudness: number
    flag: string
  }
  snr: {
    snr: any
    flag: string
  }
  speech_rate: {
    speech_rate: number
    flag: string
  }
}

export interface IAnalysisResponseDataAudioSentiment {
  label: string
  score: number
}

export interface IAnalysisResponseData {
  transcript: string
  flesch: number
  gunning: number
  language_errors: any
  emotions: IAnalysisResponseDataEmotions
  sentiment: IAnalysisResponseDataAudioSentiment[][]
  summarize: string
  audio: IAnalysisResponseDataAudio
}
