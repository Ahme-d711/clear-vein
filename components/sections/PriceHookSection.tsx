import Link from "next/link";

interface PriceHookSectionProps {
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PriceHookSection({
  text = "Initial consultation and ultrasound: 300 Euros",
  ctaLabel = "View Full Fees",
  ctaHref = "#",
}: PriceHookSectionProps) {
  return (
    <section className="border border-white/10 bg-[#006A9B] py-7">
      <div className="container mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 lg:flex-row lg:items-center lg:px-12">
        <p className="text-xl font-bold leading-7 text-white md:text-2xl">
          {text}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex h-11 items-center justify-center rounded-md border border-white px-8 text-base font-bold text-white transition-colors hover:bg-white/10"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
