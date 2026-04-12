"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { AdminCard, FormField } from '@/components/admin/AdminCard';
import { SaveAction } from '@/components/admin/SaveAction';
import { ServicesManager } from '@/components/admin/ServicesManager';
import { ListManager } from '@/components/admin/ListManager';

interface ContentData {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroDescription: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  services: string[];
  servicesTitle: string;
  servicesDescription1: string;
  servicesDescription2: string;
  doctorProfile: string;
  conditionsTitle: string;
  conditionsDescription: string;
  conditionsList: { title: string; description: string }[];
  treatmentsTitle: string;
  treatmentsDescription: string;
  treatmentsList: { title: string; description: string; label: string }[];
  advantagesTitle: string;
  advantagesList: { title: string; description: string }[];
  navLogoText: string;
  navLinks: { label: string; href: string }[];
  footerDescription: string;
  footerCopyright: string;
  footerLinks: { label: string; href: string }[];
  aboutText: string;
  ctaText: string;
}

const inputStyles = "w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-gray-800 bg-white leading-relaxed";

export default function UnifiedAdminPage() {
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
          <h1 className="text-3xl font-extrabold text-primary mb-2">Home Page Management</h1>
          <p className="text-[#64748B] text-lg font-light">Manage all sections of your landing page from one central dashboard.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-16">
        <div className="space-y-4">
          <div className="flex items-center gap-4 px-2">
            <span className="h-px flex-1 bg-gray-100" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Main Landing Sections</span>
            <span className="h-px flex-1 bg-gray-100" />
          </div>
        </div>


        {/* HERO SECTION */}
        <section id="hero">
          <AdminCard title="1. Hero Section" iconColor="bg-blue-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Badge Text">
                <input value={data.heroBadge} onChange={e => update('heroBadge', e.target.value)} className={inputStyles} required />
              </FormField>
              <FormField label="Sub-Headline">
                <input value={data.heroSubtitle} onChange={e => update('heroSubtitle', e.target.value)} className={inputStyles} required />
              </FormField>
            </div>
            <FormField label="Main Title">
              <textarea value={data.heroTitle} onChange={e => update('heroTitle', e.target.value)} rows={2} className={inputStyles} required />
            </FormField>
            <FormField label="Description">
              <textarea value={data.heroDescription} onChange={e => update('heroDescription', e.target.value)} rows={3} className={inputStyles} required />
            </FormField>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Primary CTA">
                <input value={data.heroCtaPrimary} onChange={e => update('heroCtaPrimary', e.target.value)} className={inputStyles} required />
              </FormField>
              <FormField label="Secondary CTA">
                <input value={data.heroCtaSecondary} onChange={e => update('heroCtaSecondary', e.target.value)} className={inputStyles} required />
              </FormField>
            </div>
          </AdminCard>
        </section>

        {/* SERVICES OVERVIEW */}
        <section id="services">
          <AdminCard title="2. Services Overview" iconColor="bg-cyan-500">
            <FormField label="Overview Headline">
              <textarea value={data.servicesTitle} onChange={e => update('servicesTitle', e.target.value)} rows={2} className={inputStyles} required />
            </FormField>
            <div className="grid grid-cols-1 gap-6">
              <FormField label="Primary Description Card">
                <textarea value={data.servicesDescription1} onChange={e => update('servicesDescription1', e.target.value)} rows={3} className={inputStyles} required />
              </FormField>
              <FormField label="Secondary Detail Paragraph">
                <textarea value={data.servicesDescription2} onChange={e => update('servicesDescription2', e.target.value)} rows={3} className={inputStyles} required />
              </FormField>
            </div>
            <ServicesManager 
              services={data.services} 
              onAdd={() => update('services', [...data.services, ''])}
              onRemove={(idx: number) => update('services', data.services.filter((_, i) => i !== idx))}
              onChange={(idx: number, val: string) => {
                const s = [...data.services]; s[idx] = val; update('services', s);
              }}
            />
          </AdminCard>
        </section>

        {/* DOCTOR PROFILE */}
        <section id="profile">
          <AdminCard title="3. Physician Profile" iconColor="bg-indigo-500">
            <FormField label="Professional Bio" hint="Use double line breaks for paragraphs.">
              <textarea value={data.doctorProfile} onChange={e => update('doctorProfile', e.target.value)} rows={10} className={inputStyles} required />
            </FormField>
          </AdminCard>
        </section>

        {/* CONDITIONS WE TREAT */}
        <section id="conditions">
          <AdminCard title="4. Conditions We Treat" iconColor="bg-emerald-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Headline">
                <input value={data.conditionsTitle} onChange={e => update('conditionsTitle', e.target.value)} className={inputStyles} required />
              </FormField>
              <FormField label="Description">
                <input value={data.conditionsDescription} onChange={e => update('conditionsDescription', e.target.value)} className={inputStyles} required />
              </FormField>
            </div>
            <ListManager 
              title="Individual Conditions"
              items={data.conditionsList || []}
              fields={[
                { key: 'title', label: 'Condition Name' },
                { key: 'description', label: 'Summary', type: 'textarea' }
              ]}
              onAdd={() => update('conditionsList', [...(data.conditionsList || []), { title: '', description: '' }])}
              onRemove={(idx: number) => update('conditionsList', data.conditionsList.filter((_, i) => i !== idx))}
              onChange={(idx: number, key: string, val: string) => {
                const list = [...data.conditionsList]; (list[idx] as any)[key] = val; update('conditionsList', list);
              }}
            />

          </AdminCard>
        </section>

        {/* ADVANCED TREATMENTS */}
        <section id="treatments">
          <AdminCard title="5. Advanced Treatments" iconColor="bg-purple-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Headline">
                <input value={data.treatmentsTitle} onChange={e => update('treatmentsTitle', e.target.value)} className={inputStyles} required />
              </FormField>
              <FormField label="Description">
                <input value={data.treatmentsDescription} onChange={e => update('treatmentsDescription', e.target.value)} className={inputStyles} required />
              </FormField>
            </div>
            <ListManager 
              title="Technology & Procedures"
              items={data.treatmentsList || []}
              fields={[
                { key: 'title', label: 'Abbreviation (e.g. RFA)' },
                { key: 'label', label: 'Tag (e.g. GOLD STANDARD)' },
                { key: 'description', label: 'How it works', type: 'textarea' }
              ]}
              onAdd={() => update('treatmentsList', [...(data.treatmentsList || []), { title: '', description: '', label: '' }])}
              onRemove={(idx: number) => update('treatmentsList', data.treatmentsList.filter((_, i) => i !== idx))}
              onChange={(idx: number, key: string, val: string) => {
                const list = [...data.treatmentsList]; (list[idx] as any)[key] = val; update('treatmentsList', list);
              }}
            />

          </AdminCard>
        </section>

        {/* CLINIC ADVANTAGES */}
        <section id="advantages">
          <AdminCard title="6. Clinic Advantages" iconColor="bg-blue-600">
            <FormField label="Section Headline">
              <input value={data.advantagesTitle} onChange={e => update('advantagesTitle', e.target.value)} className={inputStyles} required />
            </FormField>
            <ListManager 
              title="Unique Selling Points"
              items={data.advantagesList || []}
              fields={[
                { key: 'title', label: 'Advantage Title' },
                { key: 'description', label: 'Details', type: 'textarea' }
              ]}
              onAdd={() => update('advantagesList', [...(data.advantagesList || []), { title: '', description: '' }])}
              onRemove={(idx: number) => update('advantagesList', data.advantagesList.filter((_, i) => i !== idx))}
              onChange={(idx: number, key: string, val: string) => {
                const list = [...data.advantagesList]; (list[idx] as any)[key] = val; update('advantagesList', list);
              }}
            />

          </AdminCard>
        </section>

        {/* GLOBAL CTA */}
        <section id="cta">
          <AdminCard title="7. Global Footer CTA" iconColor="bg-amber-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="CTA Headline">
                <input value={data.ctaText} onChange={e => update('ctaText', e.target.value)} className={inputStyles} required />
              </FormField>
              <FormField label="Detailed Instruction">
                <input value={data.aboutText} onChange={e => update('aboutText', e.target.value)} className={inputStyles} required />
              </FormField>
            </div>
          </AdminCard>
        </section>



        <SaveAction saving={saving} success={success} />
      </form>
    </div>
  );
}
