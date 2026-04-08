"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { AdminCard, FormField } from '@/components/admin/AdminCard';
import { ListManager } from '@/components/admin/ListManager';
import { SaveAction } from '@/components/admin/SaveAction';

const inputStyles = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-gray-800 bg-white";

export default function AdvantagesAdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/content').then(res => res.json()).then(json => {
      setData(json);
      setLoading(false);
    });
  }, []);

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
        <h1 className="text-3xl font-extrabold text-primary mb-2">Clinic Advantages</h1>
        <p className="text-[#64748B] text-lg font-light">Manage the unique clinical advantages and value propositions of your clinic.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <AdminCard title="General Settings" iconColor="bg-cyan-500">
          <FormField label="Section Headline">
            <input 
              value={data.advantagesTitle} 
              onChange={e => setData({ ...data, advantagesTitle: e.target.value })} 
              className={inputStyles} 
              required 
            />
          </FormField>
        </AdminCard>

        <ListManager 
          title="Clinical Advantages List"
          iconColor="bg-blue-600"
          items={data.advantagesList || []}
          fields={[
            { key: 'title', label: 'Advantage Title' },
            { key: 'description', label: 'Supportive Reason/Evidence', type: 'textarea' }
          ]}
          onAdd={() => setData({ ...data, advantagesList: [...(data.advantagesList || []), { title: '', description: '' }] })}
          onRemove={idx => setData({ ...data, advantagesList: data.advantagesList.filter((_: any, i: number) => i !== idx) })}
          onChange={(idx, key, val) => {
            const list = [...data.advantagesList];
            list[idx][key] = val;
            setData({ ...data, advantagesList: list });
          }}
        />

        <SaveAction saving={saving} success={success} />
      </form>
    </div>
  );
}
