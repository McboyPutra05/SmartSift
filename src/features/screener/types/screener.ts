// ─── Job Description ─────────────────────────────────────────────────────────

export interface JobDescription {
  id: string
  title: string
  department: string | null
  requirements_text?: string
  candidates_count: number
  created_at: string
  updated_at: string
}

export interface CreateJobDescriptionPayload {
  title: string
  department?: string
  requirements_text: string
}

// ─── Candidate ───────────────────────────────────────────────────────────────

export type CandidateStatus =
  | 'queued'
  | 'parsing'
  | 'embedding'
  | 'analyzing'
  | 'completed'
  | 'failed'

export interface ScreeningResultSummary {
  overall_score: number
  matched_skills: string[]
  missing_skills: string[]
}

export interface ScreeningResultDetail extends ScreeningResultSummary {
  gap_analysis: string
  suggested_interview_questions: string[]
}

export interface Candidate {
  id: string
  file_name: string
  full_name: string | null
  email: string | null
  phone: string | null
  status: CandidateStatus
  created_at: string
  screening_result: ScreeningResultSummary | null
}

export interface CandidateDetail extends Candidate {
  extracted_skills: string[]
  experience_years: number
  education: string
  summary: string
  job_description: { id: string; title: string } | null
  screening_result: ScreeningResultDetail | null
}

// ─── WebSocket ───────────────────────────────────────────────────────────────

export type WebSocketProgressStatus =
  | 'PARSING'
  | 'EMBEDDING'
  | 'ANALYZING'
  | 'COMPLETED'
  | 'FAILED'

export interface WebSocketProgressPayload {
  candidate_id: string
  file_name: string
  status: WebSocketProgressStatus
  progress_percentage: number
  message: string
}

// ─── Upload ──────────────────────────────────────────────────────────────────

export interface UploadedFile {
  id: string
  file_name: string
  status: CandidateStatus
}
