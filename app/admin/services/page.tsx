"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { ServicesManager } from '@/components/admin/ServicesManager';
import { SaveAction } from '@/components/admin/SaveAction';

interface ContentData {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  services: string[];
  doctorProfile: string;
  ctaText: string;
}

export default function ServicesContentPage() {
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

  const update = (services: string[]) => setData(prev => ({ ...prev!, services }));

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
        <h1 className="text-3xl font-extrabold text-primary mb-2">Services & Treatments</h1>
        <p className="text-[#64748B] text-lg font-light">Manage the list of vascular services offered at the Dublin clinic.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <ServicesManager 
          services={data.services} 
          onAdd={() => update([...data.services, ''])}
          onRemove={idx => update(data.services.filter((_, i) => i !== idx))}
          onChange={(idx, val) => {
            const s = [...data.services]; s[idx] = val; update(s);
          }}
        />

        <SaveAction saving={saving} success={success} />
      </form>
    </div>
  );
}
