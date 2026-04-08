"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, User, ListChecks, ArrowLeft, HeartPulse, ShieldCheck } from 'lucide-react';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Hero Section', href: '/admin#hero', icon: FileText },
    { label: 'Services Overview', href: '/admin#services', icon: ListChecks },
    { label: 'Doctor Profile', href: '/admin#profile', icon: User },
    { label: 'Conditions We Treat', href: '/admin#conditions', icon: HeartPulse },
    { label: 'Advanced Treatments', href: '/admin#treatments', icon: FileText },
    { label: 'Clinic Advantages', href: '/admin#advantages', icon: ShieldCheck },
    { label: 'Footer CTA', href: '/admin#cta', icon: ArrowLeft },
  ];


  return (
    <div className="flex min-h-screen bg-[#F8FAFF]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#002045] text-white flex flex-col fixed inset-y-0 shadow-2xl z-50">
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary p-2 rounded-lg">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Admin</span>
          </div>
          <p className="text-[#ADC7F7] text-[10px] uppercase tracking-[0.2em] font-bold">Clear Vein Clinic</p>
        </div>

        <nav className="flex-1 p-4 py-8 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-[#ADC7F7] hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-[#ADC7F7] group-hover:text-white")} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-3 text-[#ADC7F7] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 lg:p-12">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </main>
    </div>
  );
}
