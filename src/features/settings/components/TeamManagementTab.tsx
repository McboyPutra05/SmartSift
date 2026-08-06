import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Users, UserCheck, Mail, SlidersHorizontal } from 'lucide-react'

const members = [
  {
    name: 'Sarah Jenkins',
    email: 's.jenkins@smartsift.ai',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    initials: 'SJ',
    role: 'Admin',
    roleColor: 'bg-indigo-50 text-indigo-700',
    status: 'Active',
    statusColor: 'bg-emerald-500',
    statusTextColor: 'text-emerald-700',
    lastActive: 'Just now',
  },
  {
    name: 'Marcus Rodriguez',
    email: 'm.rodriguez@smartsift.ai',
    avatar: null,
    initials: 'MR',
    role: 'Recruiter',
    roleColor: 'bg-slate-100 text-slate-600',
    status: 'Active',
    statusColor: 'bg-emerald-500',
    statusTextColor: 'text-emerald-700',
    lastActive: '2 hrs ago',
  },
  {
    name: 'Awaiting acceptance',
    nameItalic: true,
    email: 't.chen@smartsift.ai',
    avatar: null,
    initials: null,
    role: 'Recruiter',
    roleColor: 'bg-slate-100 text-slate-600',
    status: 'Pending',
    statusColor: null,
    statusTextColor: 'text-slate-500',
    lastActive: '-',
  },
  {
    name: 'Elena Rostova',
    email: 'e.rostova@smartsift.ai',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    initials: 'ER',
    role: 'Recruiter',
    roleColor: 'bg-slate-100 text-slate-600',
    status: 'Active',
    statusColor: 'bg-emerald-500',
    statusTextColor: 'text-emerald-700',
    lastActive: '1 day ago',
  },
]

export function TeamManagementTab() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-1">Team Management</h2>
          <p className="text-sm text-slate-500">Manage recruitment team access and roles.</p>
        </div>
        <Button className="bg-[#4338CA] hover:bg-[#3730A3] text-white font-semibold rounded-xl px-5 h-10 shadow-sm">
          <Mail className="w-4 h-4 mr-2" />
          Invite Member
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-5">
        
        <Card className="p-5 rounded-2xl shadow-sm border border-slate-200/60">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-3">
            <Users className="w-4 h-4 text-indigo-500" />
            Total Members
          </div>
          <div className="text-4xl font-bold text-slate-800 mb-1">24</div>
          <div className="text-xs font-medium text-slate-400 flex items-center gap-1">
            <span className="text-emerald-500">↗ +2</span> this month
          </div>
        </Card>

        <Card className="p-5 rounded-2xl shadow-sm border border-slate-200/60">
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 mb-3">
            <UserCheck className="w-4 h-4 text-emerald-500" />
            Active Recruiters
          </div>
          <div className="text-4xl font-bold text-slate-800 mb-1">18</div>
          <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Currently online: 12
          </div>
        </Card>

        <Card className="p-5 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-3">
            <Mail className="w-5 h-5 text-indigo-500" />
          </div>
          <div className="text-sm font-bold text-slate-700 mb-0.5">3 Pending Invites</div>
          <button className="text-xs font-medium text-indigo-600 hover:underline">Review status</button>
        </Card>

      </div>

      {/* Directory Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-800">Directory</h3>
          <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-slate-100">
              <TableHead className="text-[11px] font-bold text-slate-400 uppercase tracking-wider h-10 pl-6">Member Name</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 uppercase tracking-wider h-10">Role</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 uppercase tracking-wider h-10">Status</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 uppercase tracking-wider h-10">Last Active</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 uppercase tracking-wider h-10 text-right pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member, i) => (
              <TableRow key={i} className="border-b border-slate-50 last:border-0">
                <TableCell className="py-4 pl-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-slate-200">
                      {member.avatar ? (
                        <AvatarImage src={member.avatar} alt={member.name} />
                      ) : null}
                      <AvatarFallback className={`text-xs font-bold ${member.initials ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                        {member.initials || <UserCheck className="w-4 h-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className={`text-sm font-semibold ${member.nameItalic ? 'text-slate-500 italic' : 'text-slate-800'}`}>
                        {member.name}
                      </span>
                      <span className="text-xs text-slate-400">{member.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${member.roleColor}`}>
                    {member.role}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    {member.statusColor ? (
                      <span className={`w-1.5 h-1.5 rounded-full ${member.statusColor}`}></span>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400">
                        <path d="M7.5 0.875C3.84112 0.875 0.875 3.84112 0.875 7.5C0.875 11.1589 3.84112 14.125 7.5 14.125C11.1589 14.125 14.125 11.1589 14.125 7.5C14.125 3.84112 11.1589 0.875 7.5 0.875ZM1.825 7.5C1.825 4.36538 4.36538 1.825 7.5 1.825C10.6346 1.825 13.175 4.36538 13.175 7.5C13.175 10.6346 10.6346 13.175 7.5 13.175C4.36538 13.175 1.825 10.6346 1.825 7.5ZM8 3.5V7.129L10.025 8.791C10.238 8.965 10.269 9.279 10.095 9.492C9.92 9.704 9.606 9.735 9.394 9.561L7.081 7.664C6.943 7.551 6.862 7.379 6.862 7.204V3.5C6.862 3.224 7.086 3 7.362 3H7.5C7.776 3 8 3.224 8 3.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    )}
                    <span className={`text-sm font-medium ${member.statusTextColor}`}>{member.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-slate-500">{member.lastActive}</TableCell>
                <TableCell className="text-right pr-6"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  )
}
