import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Briefcase, Building2, FileText, Sparkles } from 'lucide-react'

interface JobFormProps {
  onSuccess?: (jobId: string) => void
}

export function JobForm({ onSuccess }: JobFormProps) {
  const [title, setTitle] = useState('')
  const [department, setDepartment] = useState('')
  const [requirementsText, setRequirementsText] = useState('')

  const [isPending, setIsPending] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !requirementsText.trim()) return

    setIsPending(true)
    setIsError(false)
    
    // Simulate API call
    setTimeout(() => {
      setIsPending(false)
      setTitle('')
      setDepartment('')
      setRequirementsText('')
      onSuccess?.('mock-job-id')
    }, 1000)
  }

  return (
    <Card className="border-transparent shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle>Create Job Description</CardTitle>
            <CardDescription>Define the role and requirements to start screening resumes</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="jd-title">
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                Job Title <span className="text-destructive">*</span>
              </span>
            </Label>
            <Input
              id="jd-title"
              placeholder="e.g., Senior Full-Stack Developer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Department */}
          <div className="space-y-2">
            <Label htmlFor="jd-dept">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                Department
              </span>
            </Label>
            <Input
              id="jd-dept"
              placeholder="e.g., Engineering, Product, Design"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <Label htmlFor="jd-requirements">
              <span className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                Job Requirements <span className="text-destructive">*</span>
              </span>
            </Label>
            <Textarea
              id="jd-requirements"
              placeholder="Describe skills, experience, qualifications, and responsibilities in detail. The more specific you are, the better the AI matching will be..."
              value={requirementsText}
              onChange={(e) => setRequirementsText(e.target.value)}
              className="min-h-[200px]"
              required
            />
            <p className="text-xs text-muted-foreground">
              {requirementsText.length} characters — aim for at least 200 characters for best AI matching
            </p>
          </div>

          {isError && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
              Failed to create job description. Please try again.
            </div>
          )}

          <Button
            type="submit"
            disabled={isPending || !title.trim() || requirementsText.trim().length < 50}
            className="w-full"
            size="lg"
          >
            <Sparkles className="h-4 w-4" />
            {isPending ? 'Creating & Generating AI Embedding...' : 'Create Job Description'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
