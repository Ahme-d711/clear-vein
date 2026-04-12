"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, UserCircle } from 'lucide-react';
import { AdminCard, FormField } from '@/components/admin/AdminCard';
import { SaveAction } from '@/components/admin/SaveAction';
import { ListManager } from '@/components/admin/ListManager';

interface ContentData {
  aboutBadge: string;
  aboutSuffix: string;
  aboutBio1: string;
  aboutBio2: string;
  aboutQualifications: string[];
  aboutAppointments: string[];
  aboutAcademicBackground: string;
  aboutAcademicTags: string[];
  aboutPublicationCount: string;
  aboutPublicationCountLabel: string;
  aboutCredentialsList: { title: string; description: string }[];
  aboutProfessionalTitle: string;
  aboutProfessionalSubtitle: string;
  aboutProfessionalParagraphs: string[];
  aboutClinicalFocus: string[];
  aboutResearchTeaching: string[];
  aboutStandardsTitle: string;
  aboutStandardsSubtitle: string;
  aboutPillars: { title: string; description: string; side: 'left' | 'right' }[];
}

const inputStyles = "w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-gray-800 bg-white leading-relaxed";

export default function AboutAdminPage() {
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
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[#002045] mb-2">About Page Management</h1>
          <p className="text-[#64748B] text-lg font-light">Manage the detailed professional profile and clinical authority of Dr. Hassanin.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-16">
        {/* Section Header: Doctor Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 px-2">
            <span className="h-px flex-1 bg-gray-100" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <UserCircle className="w-3 h-3" />
              Doctor Identity & Intro
            </span>
            <span className="h-px flex-1 bg-gray-100" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <AdminCard title="Identity Highlights" iconColor="bg-blue-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Professional Title/Badge">
                <input value={data.aboutBadge} onChange={e => update('aboutBadge', e.target.value)} className={inputStyles} required />
              </FormField>
              <FormField label="Degree Suffixes">
                <input value={data.aboutSuffix} onChange={e => update('aboutSuffix', e.target.value)} className={inputStyles} required />
              </FormField>
            </div>
            <FormField label="Current Practice Status">
               <textarea value={data.aboutBio1} onChange={e => update('aboutBio1', e.target.value)} rows={2} className={inputStyles} required />
            </FormField>
            <FormField label="Practice Mission Statement">
               <textarea value={data.aboutBio2} onChange={e => update('aboutBio2', e.target.value)} rows={2} className={inputStyles} required />
            </FormField>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div>
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Core Qualifications</h4>
                  <ListManager 
                    title="Qualifications List"
                    items={data.aboutQualifications.map(q => ({ val: q }))}
                    fields={[{ key: 'val', label: 'Degree Name' }]}
                    onAdd={() => update('aboutQualifications', [...data.aboutQualifications, ''])}
                    onRemove={(idx) => update('aboutQualifications', data.aboutQualifications.filter((_, i) => i !== idx))}
                    onChange={(idx, _, val) => {
                      const list = [...data.aboutQualifications]; list[idx] = val; update('aboutQualifications', list);
                    }}
                  />
               </div>
               <div>
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Official Appointments</h4>
                  <ListManager 
                    title="Appointments List"
                    items={data.aboutAppointments.map(a => ({ val: a }))}
                    fields={[{ key: 'val', label: 'Position Name' }]}
                    onAdd={() => update('aboutAppointments', [...data.aboutAppointments, ''])}
                    onRemove={(idx) => update('aboutAppointments', data.aboutAppointments.filter((_, i) => i !== idx))}
                    onChange={(idx, _, val) => {
                      const list = [...data.aboutAppointments]; list[idx] = val; update('aboutAppointments', list);
                    }}
                  />
               </div>
            </div>
          </AdminCard>

          <AdminCard title="Professional Profile & Academic Excellence" iconColor="bg-indigo-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Main Section Title">
                <input value={data.aboutProfessionalTitle} onChange={e => update('aboutProfessionalTitle', e.target.value)} className={inputStyles} required />
              </FormField>
              <FormField label="Sub-title">
                 <input value={data.aboutProfessionalSubtitle} onChange={e => update('aboutProfessionalSubtitle', e.target.value)} className={inputStyles} required />
              </FormField>
            </div>
            <ListManager 
              title="Profile Paragraphs"
              items={data.aboutProfessionalParagraphs.map(p => ({ val: p }))}
              fields={[{ key: 'val', label: 'Paragraph Text', type: 'textarea' }]}
              onAdd={() => update('aboutProfessionalParagraphs', [...data.aboutProfessionalParagraphs, ''])}
              onRemove={(idx) => update('aboutProfessionalParagraphs', data.aboutProfessionalParagraphs.filter((_, i) => i !== idx))}
              onChange={(idx, _, val) => {
                const list = [...data.aboutProfessionalParagraphs]; list[idx] = val; update('aboutProfessionalParagraphs', list);
              }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div>
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Clinical Focus Area</h4>
                  <ListManager 
                    title="Focus List"
                    items={data.aboutClinicalFocus.map(f => ({ val: f }))}
                    fields={[{ key: 'val', label: 'Focus Name' }]}
                    onAdd={() => update('aboutClinicalFocus', [...data.aboutClinicalFocus, ''])}
                    onRemove={(idx) => update('aboutClinicalFocus', data.aboutClinicalFocus.filter((_, i) => i !== idx))}
                    onChange={(idx, _, val) => {
                      const list = [...data.aboutClinicalFocus]; list[idx] = val; update('aboutClinicalFocus', list);
                    }}
                  />
               </div>
               <div>
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Research & Teaching</h4>
                  <ListManager 
                    title="Research List"
                    items={data.aboutResearchTeaching.map(r => ({ val: r }))}
                    fields={[{ key: 'val', label: 'Item Text' }]}
                    onAdd={() => update('aboutResearchTeaching', [...data.aboutResearchTeaching, ''])}
                    onRemove={(idx) => update('aboutResearchTeaching', data.aboutResearchTeaching.filter((_, i) => i !== idx))}
                    onChange={(idx, _, val) => {
                      const list = [...data.aboutResearchTeaching]; list[idx] = val; update('aboutResearchTeaching', list);
                    }}
                  />
               </div>
            </div>
          </AdminCard>

          <AdminCard title="Authority & Credentials" iconColor="bg-emerald-600">
             <FormField label="Academic Background Summary">
                <textarea value={data.aboutAcademicBackground} onChange={e => update('aboutAcademicBackground', e.target.value)} rows={4} className={inputStyles} required />
             </FormField>
             <ListManager 
                title="Academic Tags (Badges)"
                items={data.aboutAcademicTags.map(t => ({ val: t }))}
                fields={[{ key: 'val', label: 'Tag Name' }]}
                onAdd={() => update('aboutAcademicTags', [...data.aboutAcademicTags, ''])}
                onRemove={(idx) => update('aboutAcademicTags', data.aboutAcademicTags.filter((_, i) => i !== idx))}
                onChange={(idx, _, val) => {
                  const list = [...data.aboutAcademicTags]; list[idx] = val; update('aboutAcademicTags', list);
                }}
             />
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <FormField label="Publication Stat (e.g. 30+)">
                   <input value={data.aboutPublicationCount} onChange={e => update('aboutPublicationCount', e.target.value)} className={inputStyles} required />
                </FormField>
                <FormField label="Publication detail text">
                   <textarea value={data.aboutPublicationCountLabel} onChange={e => update('aboutPublicationCountLabel', e.target.value)} rows={2} className={inputStyles} required />
                </FormField>
             </div>
             <ListManager 
                title="Credential Highlight Cards"
                items={data.aboutCredentialsList}
                fields={[
                   { key: 'title', label: 'Title' },
                   { key: 'description', label: 'Description', type: 'textarea' }
                ]}
                onAdd={() => update('aboutCredentialsList', [...data.aboutCredentialsList, { title: '', description: '' }])}
                onRemove={(idx) => update('aboutCredentialsList', data.aboutCredentialsList.filter((_, i) => i !== idx))}
                onChange={(idx, key, val) => {
                   const list = [...data.aboutCredentialsList]; (list[idx] as any)[key] = val; update('aboutCredentialsList', list);
                }}
             />
          </AdminCard>

          <AdminCard title="The Standards of Care" iconColor="bg-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Section Headline">
                    <input value={data.aboutStandardsTitle} onChange={e => update('aboutStandardsTitle', e.target.value)} className={inputStyles} required />
                </FormField>
                <FormField label="Overview text">
                    <input value={data.aboutStandardsSubtitle} onChange={e => update('aboutStandardsSubtitle', e.target.value)} className={inputStyles} required />
                </FormField>
            </div>
            <ListManager 
                title="Surgical Pillars (Timeline)"
                items={data.aboutPillars}
                fields={[
                   { key: 'title', label: 'Pillar Title' },
                   { key: 'description', label: 'Description', type: 'textarea' },
                   { key: 'side', label: 'Display Side (left / right)' }
                ]}
                onAdd={() => update('aboutPillars', [...data.aboutPillars, { title: '', description: '', side: 'left' }])}
                onRemove={(idx) => update('aboutPillars', data.aboutPillars.filter((_, i) => i !== idx))}
                onChange={(idx, key, val) => {
                   const list = [...data.aboutPillars]; (list[idx] as any)[key] = val; update('aboutPillars', list);
                }}
             />
          </AdminCard>
        </div>

        <SaveAction saving={saving} success={success} />
      </form>
    </div>
  );
}
