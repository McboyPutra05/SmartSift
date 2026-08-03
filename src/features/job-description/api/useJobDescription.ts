import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/axios'
import type { CreateJobDescriptionPayload, JobDescription } from '@/features/screener/types/screener'

// ─── Fetch all job descriptions ───────────────────────────────────────────────

export function useGetJobs() {
  return useQuery<JobDescription[]>({
    queryKey: ['job-descriptions'],
    queryFn: async () => {
      const { data } = await api.get<{ data: JobDescription[] }>('/job-descriptions')
      return data.data
    },
  })
}

// ─── Fetch single job description ─────────────────────────────────────────────

export function useGetJob(id: string | null) {
  return useQuery<JobDescription>({
    queryKey: ['job-descriptions', id],
    queryFn: async () => {
      const { data } = await api.get<{ data: JobDescription }>(`/job-descriptions/${id}`)
      return data.data
    },
    enabled: !!id,
  })
}

// ─── Create job description ───────────────────────────────────────────────────

export function useCreateJob() {
  const queryClient = useQueryClient()

  return useMutation<JobDescription, Error, CreateJobDescriptionPayload>({
    mutationFn: async (payload) => {
      const { data } = await api.post<{ data: JobDescription }>('/job-descriptions', payload)
      return data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['job-descriptions'] })
    },
  })
}
