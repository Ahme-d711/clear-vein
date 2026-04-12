"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { AdminCard, FormField } from "@/components/admin/AdminCard";
import { SaveAction } from "@/components/admin/SaveAction";
import { ListManager } from "@/components/admin/ListManager";

const inputStyles =
  "w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-gray-800 bg-white leading-relaxed";

type ExpectItem = { title: string; description: string };
type ExpertStat = { value: string; label: string };

type SubscribeContent = {
  subscribeHeroBadge: string;
  subscribeHeroTitle: string;
  subscribeHeroDescription: string;
  subscribeDoctorCredit: string;
  subscribeSecurityNote: string;
  subscribeHeroBgSrc: string;
  subscribeFormHeading: string;
  subscribeFormSubmitLabel: string;
  subscribePrivacyText: string;
  subscribeExpectHeading: string;
  subscribeExpectList: ExpectItem[];
  subscribeExpertTitle: string;
  subscribeExpertQuote: string;
  subscribeExpertDoctorName: string;
  subscribeExpertBio: string;
  subscribeExpertImageSrc: string;
  subscribeExpertImageAlt: string;
  subscribeExpertStats: ExpertStat[];
};

type SubmissionRow = {
  _id: string;
  fullName: string;
  email: string;
  description: string;
  role: string;
  createdAt: string;
};

function pickSubscribePayload(c: SubscribeContent) {
  return {
    subscribeHeroBadge: c.subscribeHeroBadge,
    subscribeHeroTitle: c.subscribeHeroTitle,
    subscribeHeroDescription: c.subscribeHeroDescription,
    subscribeDoctorCredit: c.subscribeDoctorCredit,
    subscribeSecurityNote: c.subscribeSecurityNote,
    subscribeHeroBgSrc: c.subscribeHeroBgSrc,
    subscribeFormHeading: c.subscribeFormHeading,
    subscribeFormSubmitLabel: c.subscribeFormSubmitLabel,
    subscribePrivacyText: c.subscribePrivacyText,
    subscribeExpectHeading: c.subscribeExpectHeading,
    subscribeExpectList: c.subscribeExpectList,
    subscribeExpertTitle: c.subscribeExpertTitle,
    subscribeExpertQuote: c.subscribeExpertQuote,
    subscribeExpertDoctorName: c.subscribeExpertDoctorName,
    subscribeExpertBio: c.subscribeExpertBio,
    subscribeExpertImageSrc: c.subscribeExpertImageSrc,
    subscribeExpertImageAlt: c.subscribeExpertImageAlt,
    subscribeExpertStats: c.subscribeExpertStats,
  };
}

export default function AdminSubscribePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<SubscribeContent | null>(null);
  const [submissions, setSubmissions] = useState<SubmissionRow[]>([]);
  const [submissionsLoading, setSubmissionsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((json) => {
        setData({
          subscribeHeroBadge: json.subscribeHeroBadge ?? "",
          subscribeHeroTitle: json.subscribeHeroTitle ?? "",
          subscribeHeroDescription: json.subscribeHeroDescription ?? "",
          subscribeDoctorCredit: json.subscribeDoctorCredit ?? "",
          subscribeSecurityNote: json.subscribeSecurityNote ?? "",
          subscribeHeroBgSrc: json.subscribeHeroBgSrc ?? "/hero.svg",
          subscribeFormHeading: json.subscribeFormHeading ?? "",
          subscribeFormSubmitLabel: json.subscribeFormSubmitLabel ?? "",
          subscribePrivacyText: json.subscribePrivacyText ?? "",
          subscribeExpectHeading: json.subscribeExpectHeading ?? "",
          subscribeExpectList: Array.isArray(json.subscribeExpectList)
            ? json.subscribeExpectList
            : [],
          subscribeExpertTitle: json.subscribeExpertTitle ?? "",
          subscribeExpertQuote: json.subscribeExpertQuote ?? "",
          subscribeExpertDoctorName: json.subscribeExpertDoctorName ?? "",
          subscribeExpertBio: json.subscribeExpertBio ?? "",
          subscribeExpertImageSrc: json.subscribeExpertImageSrc ?? "/doctor.svg",
          subscribeExpertImageAlt: json.subscribeExpertImageAlt ?? "",
          subscribeExpertStats: Array.isArray(json.subscribeExpertStats)
            ? json.subscribeExpertStats
            : [
                { value: "15+", label: "Years Exp." },
                { value: "50+", label: "Publications" },
              ],
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch("/api/subscribe")
      .then((res) => res.json())
      .then((rows) => {
        if (Array.isArray(rows)) setSubmissions(rows);
        setSubmissionsLoading(false);
      })
      .catch(() => setSubmissionsLoading(false));
  }, []);

  const update = <K extends keyof SubscribeContent>(
    field: K,
    val: SubscribeContent[K]
  ) => setData((prev) => (prev ? { ...prev, [field]: val } : prev));

  const updateStat = (index: number, key: keyof ExpertStat, val: string) => {
    if (!data) return;
    const stats = [...data.subscribeExpertStats];
    while (stats.length <= index) {
      stats.push({ value: "", label: "" });
    }
    stats[index] = { ...stats[index], [key]: val };
    update("subscribeExpertStats", stats);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;
    setSaving(true);
    const res = await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pickSubscribePayload(data)),
    });
    if (res.ok) {
      setSuccess(true);
      router.refresh();
      setTimeout(() => setSuccess(false), 3000);
    }
    setSaving(false);
  };

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-extrabold text-primary">
          Subscribe Page
        </h1>
        <p className="text-lg font-light text-[#64748B]">
          Edit subscribe landing copy and review sign-up submissions.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        <AdminCard title="Hero (top)" iconColor="bg-slate-600">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Badge">
              <input
                value={data.subscribeHeroBadge}
                onChange={(e) => update("subscribeHeroBadge", e.target.value)}
                className={inputStyles}
                required
              />
            </FormField>
            <FormField label="Background image path">
              <input
                value={data.subscribeHeroBgSrc}
                onChange={(e) => update("subscribeHeroBgSrc", e.target.value)}
                className={inputStyles}
                required
              />
            </FormField>
          </div>
          <FormField label="Doctor credit line">
            <input
              value={data.subscribeDoctorCredit}
              onChange={(e) => update("subscribeDoctorCredit", e.target.value)}
              className={inputStyles}
              required
            />
          </FormField>
          <FormField label="Security note">
            <input
              value={data.subscribeSecurityNote}
              onChange={(e) => update("subscribeSecurityNote", e.target.value)}
              className={inputStyles}
              required
            />
          </FormField>
          <FormField label="Title (use line breaks as needed)">
            <textarea
              value={data.subscribeHeroTitle}
              onChange={(e) => update("subscribeHeroTitle", e.target.value)}
              rows={2}
              className={inputStyles}
              required
            />
          </FormField>
          <FormField label="Description">
            <textarea
              value={data.subscribeHeroDescription}
              onChange={(e) =>
                update("subscribeHeroDescription", e.target.value)
              }
              rows={3}
              className={inputStyles}
              required
            />
          </FormField>
        </AdminCard>

        <AdminCard title="Form & sidebar" iconColor="bg-blue-600">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Form heading">
              <input
                value={data.subscribeFormHeading}
                onChange={(e) => update("subscribeFormHeading", e.target.value)}
                className={inputStyles}
                required
              />
            </FormField>
            <FormField label="Submit button label">
              <input
                value={data.subscribeFormSubmitLabel}
                onChange={(e) =>
                  update("subscribeFormSubmitLabel", e.target.value)
                }
                className={inputStyles}
                required
              />
            </FormField>
          </div>
          <FormField label="Privacy paragraph">
            <textarea
              value={data.subscribePrivacyText}
              onChange={(e) => update("subscribePrivacyText", e.target.value)}
              rows={3}
              className={inputStyles}
              required
            />
          </FormField>
          <FormField label="“What to Expect” heading">
            <input
              value={data.subscribeExpectHeading}
              onChange={(e) => update("subscribeExpectHeading", e.target.value)}
              className={inputStyles}
              required
            />
          </FormField>
          <ListManager
            title="Expectation cards"
            items={data.subscribeExpectList}
            fields={[
              { key: "title", label: "Title" },
              { key: "description", label: "Description", type: "textarea" },
            ]}
            onAdd={() =>
              update("subscribeExpectList", [
                ...data.subscribeExpectList,
                { title: "", description: "" },
              ])
            }
            onRemove={(idx) =>
              update(
                "subscribeExpectList",
                data.subscribeExpectList.filter((_, i) => i !== idx)
              )
            }
            onChange={(idx, key, val) => {
              const list = [...data.subscribeExpectList];
              (list[idx] as Record<string, string>)[key] = val;
              update("subscribeExpectList", list);
            }}
          />
        </AdminCard>

        <AdminCard title="Expert oversight" iconColor="bg-indigo-600">
          <FormField label="Section title">
            <input
              value={data.subscribeExpertTitle}
              onChange={(e) => update("subscribeExpertTitle", e.target.value)}
              className={inputStyles}
              required
            />
          </FormField>
          <FormField label="Quote">
            <textarea
              value={data.subscribeExpertQuote}
              onChange={(e) => update("subscribeExpertQuote", e.target.value)}
              rows={4}
              className={inputStyles}
              required
            />
          </FormField>
          <FormField label="Name line">
            <input
              value={data.subscribeExpertDoctorName}
              onChange={(e) =>
                update("subscribeExpertDoctorName", e.target.value)
              }
              className={inputStyles}
              required
            />
          </FormField>
          <FormField label="Bio">
            <textarea
              value={data.subscribeExpertBio}
              onChange={(e) => update("subscribeExpertBio", e.target.value)}
              rows={4}
              className={inputStyles}
              required
            />
          </FormField>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Image path">
              <input
                value={data.subscribeExpertImageSrc}
                onChange={(e) =>
                  update("subscribeExpertImageSrc", e.target.value)
                }
                className={inputStyles}
                required
              />
            </FormField>
            <FormField label="Image alt text">
              <input
                value={data.subscribeExpertImageAlt}
                onChange={(e) =>
                  update("subscribeExpertImageAlt", e.target.value)
                }
                className={inputStyles}
                required
              />
            </FormField>
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Stats
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[0, 1].map((i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                <FormField label={`Stat ${i + 1} value`}>
                  <input
                    value={data.subscribeExpertStats[i]?.value ?? ""}
                    onChange={(e) => updateStat(i, "value", e.target.value)}
                    className={inputStyles}
                  />
                </FormField>
                <FormField label={`Stat ${i + 1} label`}>
                  <input
                    value={data.subscribeExpertStats[i]?.label ?? ""}
                    onChange={(e) => updateStat(i, "label", e.target.value)}
                    className={inputStyles}
                  />
                </FormField>
              </div>
            ))}
          </div>
        </AdminCard>

        <SaveAction saving={saving} success={success} />
      </form>

      <AdminCard title="Recent sign-ups" iconColor="bg-emerald-600">
        {submissionsLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : submissions.length === 0 ? (
          <p className="text-sm text-[#64748B]">No submissions yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-gray-100 bg-gray-50/80 text-xs font-bold uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {submissions.map((row) => (
                  <tr key={row._id} className="bg-white">
                    <td className="whitespace-nowrap px-4 py-3 text-gray-600">
                      {row.createdAt
                        ? new Date(row.createdAt).toLocaleString()
                        : "—"}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {row.fullName}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{row.email}</td>
                    <td className="px-4 py-3 uppercase text-gray-600">
                      {row.role}
                    </td>
                    <td className="max-w-xs truncate px-4 py-3 text-gray-600">
                      {row.description || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </AdminCard>
    </div>
  );
}
