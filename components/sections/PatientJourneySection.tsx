interface JourneyStep {
  title: string;
  description: string;
}

interface PatientJourneySectionProps {
  title?: string;
  description?: string;
  steps?: JourneyStep[];
}

const DEFAULT_STEPS: JourneyStep[] = [
  {
    title: "Consultation & Ultrasound",
    description:
      "Comprehensive diagnosis and the development of\nyour bespoke treatment plan.",
  },
  {
    title: "Minimally Invasive Procedure",
    description:
      "State-of-the-art treatment performed under local\nanaesthetic as a day-case.",
  },
  {
    title: "Follow-Up & Recovery",
    description:
      "Expert post-operative care ensuring optimal\nhealing and long-term results.",
  },
];

export default function PatientJourneySection({
  title = "Your Patient Journey",
  description = "A structured, specialist approach to your venous health from start to finish.",
  steps = DEFAULT_STEPS,
}: PatientJourneySectionProps) {
  return (
    <section className="bg-[#D5E3FD] py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold leading-10 text-[#006A9B]">{title}</h2>
          <p className="mt-4 text-lg leading-7 text-[#43474E]">{description}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <article key={`${step.title}-${index}`} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#006A9B]">
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold leading-7 text-[#006A9B]">
                {step.title}
              </h3>
              <p className="mt-4 whitespace-pre-line text-base leading-6.5 text-[#43474E]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
