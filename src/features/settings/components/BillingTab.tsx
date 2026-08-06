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
import { FileText, BrainCircuit, CreditCard, Download, ExternalLink, CheckCircle2 } from 'lucide-react'

const invoices = [
  { date: 'Oct 1, 2024', amount: '$499.00', invoice: 'INV-2024-10', status: 'Paid' },
  { date: 'Sep 1, 2024', amount: '$499.00', invoice: 'INV-2024-09', status: 'Paid' },
  { date: 'Aug 1, 2024', amount: '$499.00', invoice: 'INV-2024-08', status: 'Paid' },
]

export function BillingTab() {
  return (
    <div className="flex flex-col gap-6">
      
      <div>
        <h2 className="text-xl font-bold text-[#1e293b] mb-1">Billing & Subscription</h2>
        <p className="text-sm text-slate-500">Manage your SmartSift AI plan and payment details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Main Content (2/3 width) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Current Plan Card */}
          <Card className="rounded-2xl shadow-sm border border-slate-200/60 p-6">
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-indigo-100">CURRENT PLAN</span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Active
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-[#1e293b] mb-3">Enterprise AI</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                  Comprehensive recruitment suite with advanced AI parsing, predictive matching, and bulk processing capabilities.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center min-w-[200px] border border-slate-100">
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className="text-3xl font-bold text-[#1e293b]">$499</span>
                  <span className="text-sm font-medium text-slate-400">/month</span>
                </div>
                <div className="text-xs text-slate-400 mb-4 text-center">
                  Next billing date: Nov 1, 2024
                </div>
                <Button variant="outline" className="w-full font-semibold text-slate-700 rounded-lg h-9 text-sm">
                  Change Plan
                </Button>
              </div>
            </div>
          </Card>

          {/* Usage Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="p-5 rounded-2xl shadow-sm border border-slate-200/60">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 font-bold text-[#1e293b]">
                  <FileText className="w-4 h-4 text-slate-400" />
                  CVs Processed
                </div>
                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-md">75%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-xs font-medium text-slate-400">
                <span>7,500 used</span>
                <span>10,000 limit</span>
              </div>
            </Card>

            <Card className="p-5 rounded-2xl shadow-sm border border-slate-200/60">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 font-bold text-[#1e293b]">
                  <BrainCircuit className="w-4 h-4 text-emerald-500" />
                  AI Tokens
                </div>
                <span className="px-2 py-0.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-md">92%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-rose-500 rounded-full transition-all" style={{ width: '92%' }}></div>
              </div>
              <div className="flex justify-between text-xs font-medium text-slate-400">
                <span>920k used</span>
                <span>1M limit</span>
              </div>
            </Card>
          </div>

          {/* Billing History */}
          <Card className="rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
              <h3 className="text-base font-bold text-[#1e293b]">Billing History</h3>
              <button className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                <Download className="w-4 h-4" /> Export CSV
              </button>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-b border-slate-100">
                  <TableHead className="text-[11px] font-bold text-slate-400 uppercase tracking-wider h-10 pl-6">Date</TableHead>
                  <TableHead className="text-[11px] font-bold text-slate-400 uppercase tracking-wider h-10">Amount</TableHead>
                  <TableHead className="text-[11px] font-bold text-slate-400 uppercase tracking-wider h-10">Invoice</TableHead>
                  <TableHead className="text-[11px] font-bold text-slate-400 uppercase tracking-wider h-10">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv, i) => (
                  <TableRow key={i} className="border-b border-slate-50 last:border-0">
                    <TableCell className="py-4 pl-6 text-sm font-medium text-slate-700">{inv.date}</TableCell>
                    <TableCell className="text-sm font-semibold text-slate-800">{inv.amount}</TableCell>
                    <TableCell className="text-sm font-medium text-indigo-600 hover:underline cursor-pointer">{inv.invoice}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                        <CheckCircle2 className="w-3 h-3" /> {inv.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

        </div>

        {/* Side Panel (1/3 width) */}
        <div className="flex flex-col gap-6">
          
          {/* Payment Method */}
          <Card className="rounded-2xl shadow-sm border border-slate-200/60 p-6">
            <div className="flex items-center gap-2 mb-5">
              <CreditCard className="w-5 h-5 text-slate-500" />
              <h3 className="text-base font-bold text-[#1e293b]">Payment Method</h3>
            </div>
            
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-white rounded shadow-sm flex items-center justify-center text-[10px] font-extrabold text-blue-800 italic border border-slate-100">
                  VISA
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">•••• •••• •••• 4242</div>
                  <div className="text-xs text-slate-400">Expires 12/25</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">DEFAULT</span>
            </div>

            <button className="w-full py-2.5 text-sm font-semibold text-slate-600 border border-dashed border-slate-300 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-colors">
              + Add Payment Method
            </button>
          </Card>

          {/* Need Help */}
          <Card className="rounded-2xl shadow-sm border border-slate-100 bg-slate-50/50 p-6">
            <h3 className="text-sm font-bold text-slate-700 mb-4">Need Help?</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                <ExternalLink className="w-3.5 h-3.5" /> Understanding your invoice
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                <ExternalLink className="w-3.5 h-3.5" /> How to cancel subscription
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                <ExternalLink className="w-3.5 h-3.5" /> Contact Billing Support
              </a>
            </div>
          </Card>

          <p className="text-xs text-slate-400 text-center leading-relaxed px-4">
            SmartSift uses bank-grade encryption to secure your financial data.
          </p>

        </div>

      </div>
    </div>
  )
}
