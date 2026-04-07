"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { AdminCard, FormField } from '@/components/admin/AdminCard';
import { SaveAction } from '@/components/admin/SaveAction';

interface ContentData {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  services: string[];
  doctorProfile: string;
  ctaText: string;
}

const inputStyles = "w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-gray-800 bg-white leading-relaxed";

export default function ProfileContentPage() {
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

  const update = (val: string) => setData(prev => ({ ...prev!, doctorProfile: val }));

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
        <h1 className="text-3xl font-extrabold text-primary mb-2">Physician Profile</h1>
        <p className="text-[#64748B] text-lg font-light">Manage the lead clinician's professional biography and credentials.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <AdminCard title="Doctor Professional Bio" iconColor="bg-indigo-500">
          <FormField label="Full Biography" hint="Your profile will be automatically formatted for readability on the site. Use double line breaks for paragraphs.">
            <textarea value={data.doctorProfile} onChange={e => update(e.target.value)} rows={12} className={inputStyles} required />
          </FormField>
        </AdminCard>

        <SaveAction saving={saving} success={success} />
      </form>
    </div>
  );
}
