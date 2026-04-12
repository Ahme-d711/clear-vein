import Image from "next/image";

export interface SubscribeExpertOversightProps {
  title?: string;
  quote?: string;
  doctorName?: string;
  bio?: string;
  imageSrc?: string;
  imageAlt?: string;
  stats?: { value: string; label: string }[];
}

const DEFAULT_QUOTE =
  '"Our commitment is to bridge the gap between clinical research and patient care.\nEvery update provided here is scrutinized for clinical accuracy and evidence-based\nrelevance."';

const DEFAULT_BIO =
  "Dr. Hassanin is a distinguished Fellow of the European Board of Vascular Surgery with extensive research background in venous hemodynamics. He oversees the clinical integrity of all education and update portals at Clear Vein Clinic.";

const DEFAULT_STATS = [
  { value: "15+", label: "Years Exp." },
  { value: "50+", label: "Publications" },
] as const;

export default function SubscribeExpertOversight({
  title = "Expert Oversight",
  quote = DEFAULT_QUOTE,
  doctorName = "Dr. Ahmed Hassanin, PhD, FEBVS",
  bio = DEFAULT_BIO,
  imageSrc = "/doctor.svg",
  imageAlt = "Dr. Ahmed Hassanin",
  stats = [...DEFAULT_STATS],
}: SubscribeExpertOversightProps) {
  return (
    <section
      className="bg-[#EFF4FF] py-12 md:py-16 lg:py-20"
      aria-labelledby="subscribe-expert-heading"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="relative mx-auto h-[min(70vw,420px)] w-full max-w-[384px] shrink-0 overflow-hidden rounded-[4px] bg-[#1a365d] sm:h-[400px] lg:mx-0 lg:h-[480px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          </div>

          <div className="min-w-0 flex-1 lg:max-w-3xl">
            <h2
              id="subscribe-expert-heading"
              className="text-[28px] font-extrabold leading-9 tracking-tight text-[#002045] sm:text-[30px] sm:leading-9"
              style={{ letterSpacing: "-0.025em" }}
            >
              {title}
            </h2>

            <div
              className="mt-6 h-1 w-20 bg-[#002045]"
              aria-hidden
            />

            <blockquote className="mt-8 whitespace-pre-line text-xl font-light italic leading-[2.03rem] text-[#0d1c2f]">
              {quote}
            </blockquote>

            <h3 className="mt-10 text-xl font-bold leading-7 text-[#002045]">
              {doctorName}
            </h3>

            <p className="mt-4 max-w-xl text-base leading-6 text-[#505f76]">
              {bio}
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
              {stats.map(({ value, label }, index) => (
                <div key={`${label}-${index}`}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="flex flex-col gap-0.5">
                    <span className="text-2xl font-bold leading-8 text-[#002045]">
                      {value}
                    </span>
                    <span
                      className="text-xs font-bold uppercase leading-4 text-[#505f76]"
                      style={{ letterSpacing: "0.075em" }}
                    >
                      {label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
