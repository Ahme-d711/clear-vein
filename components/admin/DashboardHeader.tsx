import Link from 'next/link';
import { LayoutDashboard, ArrowLeft } from 'lucide-react';

export function DashboardHeader() {
  return (
    <div className="bg-[#002045] text-white py-8 shadow-xl">
      <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <LayoutDashboard className="w-6 h-6 text-[#ADC7F7]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-[#ADC7F7] text-sm font-light">Manage your landing page content</p>
          </div>
        </div>
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm text-[#ADC7F7] hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Site
        </Link>
      </div>
    </div>
  );
}
