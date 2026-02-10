import Image from "next/image";
import InfoSection from "./InfoSection";

export default function OurApproach() {
  const media = (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 transition-all duration-500 hover:scale-[1.02]">
      <Image
        src="/approach.png"
        alt="Our Approach"
        width={800}
        height={600}
        className="w-full h-auto object-cover"
      />
    </div>
  );

  const description = (
    <>
      <p>
        Under the leadership of <span className="text-primary font-semibold">Dr. Ahmed Hassanin</span>, 
        we combine international clinical expertise with modern medical standards to deliver 
        high-quality vascular care.
      </p>
      <p>
        Procedures are planned carefully to minimize risk, reduce recovery time, and help 
        patients return to daily life as quickly as possible.
      </p>
      <p>
        With extensive experience in both clinical practice and academic medicine, Dr. Hassanin 
        ensures that every patient benefits from up-to-date treatment protocols and 
        meticulous surgical decision-making.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Our Approach"
      description={description}
      media={media}
      imagePosition="left"
      bgColor="bg-gray-50/50"
    />
  );
}
