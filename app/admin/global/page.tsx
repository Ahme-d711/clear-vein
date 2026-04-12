"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Globe } from 'lucide-react';
import { AdminCard, FormField } from '@/components/admin/AdminCard';
import { SaveAction } from '@/components/admin/SaveAction';
import { ListManager } from '@/components/admin/ListManager';

interface ContentData {
  navLogoText: string;
  navLinks: { label: string; href: string }[];
  footerDescription: string;
  footerCopyright: string;
  footerLinks: { label: string; href: string }[];
}

const inputStyles = "w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-gray-800 bg-white leading-relaxed";

export default function GlobalAdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<ContentData | null>(null);

  useEffect(() => {
    fetch('/api/content').then(res => res.json()).then(json => {
      setData(json);
      setLoading(false);
    });
  }, []);

  const update = (field: keyof ContentData, val: any) => setData(prev => ({ ...prev!, [field]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;
    setSaving(true);
    const res = await fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSuccess(true);
      router.refresh();
      setTimeout(() => setSuccess(false), 3000);
    }
    setSaving(false);
  };

  if (loading || !data) return <div className="flex items-center justify-center p-20"><Loader2 className="w-10 h-10 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[#002045] mb-2">Global Site Settings</h1>
          <p className="text-[#64748B] text-lg font-light">Configure branding, navigation, and site-wide footer information.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-16">
        <div className="space-y-4">
          <div className="flex items-center gap-4 px-2">
            <span className="h-px flex-1 bg-gray-100" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Globe className="w-3 h-3" />
              Identity & Navigation
            </span>
            <span className="h-px flex-1 bg-gray-100" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* NAVBAR SETTINGS */}
          <AdminCard title="Navbar Branding" iconColor="bg-slate-700">
            <FormField label="Logo Text" hint="Display name in the top navigation bar.">
              <input value={data.navLogoText} onChange={e => update('navLogoText', e.target.value)} className={inputStyles} required />
            </FormField>
            <ListManager 
              title="Navigation Menu Links"
              items={data.navLinks || []}
              fields={[
                { key: 'label', label: 'Link Label' },
                { key: 'href', label: 'URL / Anchor (e.g. /#about)' }
              ]}
              onAdd={() => update('navLinks', [...(data.navLinks || []), { label: '', href: '' }])}
              onRemove={(idx: number) => update('navLinks', data.navLinks.filter((_, i) => i !== idx))}
              onChange={(idx: number, key: string, val: string) => {
                const list = [...data.navLinks]; (list[idx] as any)[key] = val; update('navLinks', list);
              }}
            />
          </AdminCard>

          {/* FOOTER SETTINGS */}
          <AdminCard title="Footer Information" iconColor="bg-slate-900">
            <FormField label="Practice Description">
              <textarea value={data.footerDescription} onChange={e => update('footerDescription', e.target.value)} rows={3} className={inputStyles} required />
            </FormField>
            <FormField label="Clinical Registration & Legal Text">
              <textarea value={data.footerCopyright} onChange={e => update('footerCopyright', e.target.value)} rows={3} className={inputStyles} required />
            </FormField>
            <ListManager 
              title="Footer Useful Links"
              items={data.footerLinks || []}
              fields={[
                { key: 'label', label: 'Link Label' },
                { key: 'href', label: 'URL' }
              ]}
              onAdd={() => update('footerLinks', [...(data.footerLinks || []), { label: '', href: '' }])}
              onRemove={(idx: number) => update('footerLinks', data.footerLinks.filter((_, i) => i !== idx))}
              onChange={(idx: number, key: string, val: string) => {
                const list = [...data.footerLinks]; (list[idx] as any)[key] = val; update('footerLinks', list);
              }}
            />
          </AdminCard>
        </div>

        <SaveAction saving={saving} success={success} />
      </form>
    </div>
  );
}
