import Image from "next/image";
import InfoSection from "./InfoSection";

export default function OurBackground() {
  const media = (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 transition-all duration-500 hover:scale-[1.02]">
      <Image
        src="/background.jpg"
        alt="Dr. Ahmed Hassanin Background"
        width={800}
        height={1000}
        className="w-full h-auto object-cover"
      />
    </div>
  );

  const description = (
    <>
      <p>
        <span className="text-primary font-semibold">Dr. Ahmed Hassanin</span> holds a 
        PhD in Vascular Surgery and is certified by the European Board of Vascular Surgery (EBVS). 
        He completed specialist vascular surgery training in Ireland and is fully registered 
        with the General Medical Council (UK).
      </p>
      <p>
        Alongside clinical practice, Dr. Hassanin has delivered over 30 international 
        presentations and peer-reviewed publications, contributed to leading surgical 
        textbooks, and served as a lecturer in vascular surgery at the Royal College of 
        Surgeons in Ireland (RCSI).
      </p>
      <p>
        His strong academic background ensures that patients receive care grounded in the 
        latest medical research and international best practices.
      </p>
    </>
  );

  return (
    <div id="about">
      <InfoSection
        title="Our Background"
        description={description}
        media={media}
        imagePosition="right"
      />
    </div>
  );
}
