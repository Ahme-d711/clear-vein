import Image from 'next/image';
import { BadgeCheck, Shield } from 'lucide-react';

export interface SubscribeNewsletterHeroProps {
  badge?: string;
  title?: string;
  description?: string;
  doctorCredit?: string;
  securityNote?: string;
  /** Public path for the subtle background (same asset as home hero when available). */
  backgroundImageSrc?: string;
}

const DEFAULTS = {
  badge: 'NEWSLETTER & UPDATES',
  title: 'Clinical Updates &\nPatient Education',
  description:
    'The primary portal for patients and healthcare professionals to stay informed about the latest evidence-based venous treatments, clinical guidelines, and clinic news.',
  doctorCredit: 'Dr. Ahmed Hassanin, PhD, FEBVS',
  securityNote: 'GDPR Compliant & Secure',
  backgroundImageSrc: '/hero.svg',
} as const;

export default function SubscribeNewsletterHero({
  badge = DEFAULTS.badge,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  doctorCredit = DEFAULTS.doctorCredit,
  securityNote = DEFAULTS.securityNote,
  backgroundImageSrc = DEFAULTS.backgroundImageSrc,
}: SubscribeNewsletterHeroProps) {
  return (
    <section
      className="relative isolate w-full overflow-hidden pt-24 pb-16 md:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="subscribe-hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageSrc}
          alt=""
          fill
          className="object-cover blur-sm scale-105 opacity-40"
          priority
        />
        <div
          className="absolute inset-0 bg-[#0a2540]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-[#0a2540]/80 via-[#0a2540]/95 to-[#0a2540]"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <div className="inline-block">
            <span className="inline-flex items-center rounded-full bg-[#e2e8f0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a2540] sm:text-xs">
              {badge}
            </span>
          </div>

          <h1
            id="subscribe-hero-heading"
            className="whitespace-pre-line text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {title}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-[#94a3b8] md:text-lg lg:max-w-2xl">
            {description}
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <BadgeCheck
                className="size-5 shrink-0 text-white/90"
                strokeWidth={1.75}
                aria-hidden
              />
              <span>{doctorCredit}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Shield
                className="size-5 shrink-0 text-white/90"
                strokeWidth={1.75}
                aria-hidden
              />
              <span>{securityNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
