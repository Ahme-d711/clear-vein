"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { AdminCard, FormField } from '@/components/admin/AdminCard';
import { SaveAction } from '@/components/admin/SaveAction';

interface ContentData {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroDescription: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  aboutText: string;
  services: string[];
  doctorProfile: string;
  ctaText: string;
}

const inputStyles = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-gray-800 bg-white";

export default function GeneralContentPage() {
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
      <div>
        <h1 className="text-3xl font-extrabold text-primary mb-2">General Content</h1>
        <p className="text-[#64748B] text-lg font-light">Customize the main headlines and call-to-actions.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <AdminCard title="Landing Page Hero Section">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Hero Badge Text">
              <input value={data.heroBadge} onChange={e => update('heroBadge', e.target.value)} className={inputStyles} required />
            </FormField>
            <FormField label="Hero Sub-Headline">
              <input value={data.heroSubtitle} onChange={e => update('heroSubtitle', e.target.value)} className={inputStyles} required />
            </FormField>
          </div>

          <FormField label="Hero Main Title">
            <textarea value={data.heroTitle} onChange={e => update('heroTitle', e.target.value)} rows={3} className={inputStyles} required />
          </FormField>

          <FormField label="Hero Description Paragraph">
            <textarea value={data.heroDescription} onChange={e => update('heroDescription', e.target.value)} rows={3} className={inputStyles} required />
          </FormField>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Primary CTA Label">
              <input value={data.heroCtaPrimary} onChange={e => update('heroCtaPrimary', e.target.value)} className={inputStyles} required />
            </FormField>
            <FormField label="Secondary CTA Label">
              <input value={data.heroCtaSecondary} onChange={e => update('heroCtaSecondary', e.target.value)} className={inputStyles} required />
            </FormField>
          </div>

        </AdminCard>


        <AdminCard title="Global Footer Call-To-Action" iconColor="bg-amber-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Footer CTA Headline">
              <input value={data.ctaText} onChange={e => update('ctaText', e.target.value)} className={inputStyles} required />
            </FormField>
            <FormField label="Footer CTA Description">
              <input value={data.aboutText} onChange={e => update('aboutText', e.target.value)} className={inputStyles} required />
            </FormField>
          </div>
        </AdminCard>



        <SaveAction saving={saving} success={success} />
      </form>
    </div>
  );
}
