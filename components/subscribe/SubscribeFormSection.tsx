"use client";

import { useState } from "react";
import {
  ArrowRight,
  ScrollText,
  HeartPulse,
  Presentation,
  Building2,
} from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

type SubscriberRole = "patient" | "gp" | "hcp";

const ROLE_OPTIONS: { value: SubscriberRole; label: string }[] = [
  { value: "patient", label: "Patient" },
  { value: "gp", label: "GP" },
  { value: "hcp", label: "HCP" },
];

const EXPECT_ITEMS: {
  icon: typeof ScrollText;
  title: string;
  description: string;
}[] = [
  {
    icon: ScrollText,
    title: "Latest ESVS Guideline Summaries",
    description:
      "Concise, actionable breakdowns of European Society for Vascular Surgery updates.",
  },
  {
    icon: HeartPulse,
    title: "Patient Care Advice",
    description:
      "Evidence-based self-care and recovery guidance for post-venous treatment.",
  },
  {
    icon: Presentation,
    title: "GP Education Events",
    description:
      "Invitations to exclusive webinars and clinical CPD workshops for practitioners.",
  },
  {
    icon: Building2,
    title: "Clinic News & Announcements",
    description:
      "Operational updates and new clinical capabilities at Clear Vein Clinic.",
  },
];

const inputClass =
  "h-14 w-full rounded-sm border-0 bg-[#EFF4FF] px-4 text-base text-[#0d1c2f] placeholder:text-[#6B7280] outline-none transition-shadow focus:ring-2 focus:ring-[#002045]/25";

const textareaClass =
  "min-h-[120px] w-full resize-y rounded-sm border-0 bg-[#EFF4FF] px-4 py-3 text-base text-[#0d1c2f] placeholder:text-[#6B7280] outline-none transition-shadow focus:ring-2 focus:ring-[#002045]/25";

const labelClass = "text-sm font-bold text-[#505f76]";

export default function SubscribeFormSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState<SubscriberRole | "">("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !role) {
      toast.error("Please complete all fields.");
      return;
    }
    toast.success("Thank you — your subscription request was received.");
    setFullName("");
    setEmail("");
    setDescription("");
    setRole("");
  };

  return (
    <section
      className="bg-[#F8F9FF] py-12 md:py-16 lg:py-20"
      aria-labelledby="subscribe-form-heading"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 rounded-[4px] bg-white p-6 shadow-sm md:p-8 lg:p-10">
            <h2
              id="subscribe-form-heading"
              className="text-2xl font-bold tracking-tight text-[#002045] md:text-[24px] md:leading-8"
              style={{ letterSpacing: "-0.025em" }}
            >
              Stay Informed
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="subscribe-full-name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="subscribe-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g., Dr. Jane Smith"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subscribe-email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="subscribe-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane.smith@medical.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subscribe-description" className={labelClass}>
                  Description
                </label>
                <textarea
                  id="subscribe-description"
                  name="description"
                  rows={4}
                  placeholder="Optional — tell us what updates interest you most."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={textareaClass}
                />
              </div>

              <fieldset className="space-y-3">
                <legend className={cn(labelClass, "mb-1")}>I am a...</legend>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
                  {ROLE_OPTIONS.map(({ value, label }) => (
                    <label
                      key={value}
                      className={cn(
                        "flex flex-1 cursor-pointer items-center gap-3 rounded-sm bg-[#EFF4FF] px-4 py-3.5",
                        role === value && "ring-2 ring-[#002045]/30"
                      )}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={value}
                        checked={role === value}
                        onChange={() => setRole(value)}
                        className="size-4 shrink-0 accent-[#002045]"
                      />
                      <span className="text-sm font-medium text-[#0d1c2f]">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-sm bg-[#002045] px-8 text-base font-bold text-white transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#002045] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Subscribe to Updates
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </button>
              </div>

              <p className="border-t border-[#c4c6cf]/30 pt-6 text-xs leading-relaxed text-[#505f76]">
                We respect your privacy. All data is processed according to GDPR
                clinical standards. You can unsubscribe from these updates at any
                time via the link in our emails.
              </p>
            </form>
          </div>

          <aside className="w-full shrink-0 lg:max-w-[469px]">
            <h3
              className="text-sm font-bold text-[#002045]"
              style={{ letterSpacing: "0.1em" }}
            >
              What to Expect
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {EXPECT_ITEMS.map(({ icon: Icon, title, description }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 border-l-[6px] border-l-[#001D3D] bg-white p-6"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center text-[#001D3D]">
                    <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-lg font-bold leading-snug text-[#001D3D]">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
