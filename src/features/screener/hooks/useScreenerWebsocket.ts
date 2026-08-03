import { useEffect, useCallback } from 'react'
import echo from '@/lib/echo'
import type { WebSocketProgressPayload } from '@/features/screener/types/screener'

interface UseScreenerWebsocketOptions {
  jobDescriptionId: string | null
  onProgress: (payload: WebSocketProgressPayload) => void
}

export function useScreenerWebsocket({
  jobDescriptionId,
  onProgress,
}: UseScreenerWebsocketOptions) {
  const stableOnProgress = useCallback(onProgress, [])

  useEffect(() => {
    if (!jobDescriptionId) return

    const channelName = `job-processing.${jobDescriptionId}`
    const channel = echo.channel(channelName)

    channel.listen('.resume.progress', (payload: WebSocketProgressPayload) => {
      stableOnProgress(payload)
    })

    return () => {
      echo.leaveChannel(channelName)
    }
  }, [jobDescriptionId, stableOnProgress])
}
