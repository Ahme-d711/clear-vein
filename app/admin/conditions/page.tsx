"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { AdminCard, FormField } from '@/components/admin/AdminCard';
import { ListManager } from '@/components/admin/ListManager';
import { SaveAction } from '@/components/admin/SaveAction';

const inputStyles = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-gray-800 bg-white";

export default function ConditionsAdminPage() {
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
        <h1 className="text-3xl font-extrabold text-primary mb-2">Conditions We Treat</h1>
        <p className="text-[#64748B] text-lg font-light">Manage the pathological conditions listed on your landing page.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <AdminCard title="Section Overview" iconColor="bg-blue-500">
          <FormField label="Section Title">
            <input 
              value={data.conditionsTitle} 
              onChange={e => setData({ ...data, conditionsTitle: e.target.value })} 
              className={inputStyles} 
              required 
            />
          </FormField>
          <FormField label="Section Description">
            <textarea 
              value={data.conditionsDescription} 
              onChange={e => setData({ ...data, conditionsDescription: e.target.value })} 
              className={inputStyles} 
              required 
              rows={2}
            />
          </FormField>
        </AdminCard>

        <ListManager 
          title="Clinical Conditions List"
          iconColor="bg-emerald-500"
          items={data.conditionsList || []}
          fields={[
            { key: 'title', label: 'Condition Name' },
            { key: 'description', label: 'Detailed Description', type: 'textarea' }
          ]}
          onAdd={() => setData({ ...data, conditionsList: [...(data.conditionsList || []), { title: '', description: '' }] })}
          onRemove={idx => setData({ ...data, conditionsList: data.conditionsList.filter((_: any, i: number) => i !== idx) })}
          onChange={(idx, key, val) => {
            const list = [...data.conditionsList];
            list[idx][key] = val;
            setData({ ...data, conditionsList: list });
          }}
        />

        <SaveAction saving={saving} success={success} />
      </form>
    </div>
  );
}
