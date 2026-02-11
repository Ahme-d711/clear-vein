"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Who We Are",
    content: "We are a specialized vascular care center dedicated to the diagnosis and treatment of venous and vascular conditions using modern, evidence-based medical techniques. Our focus is to deliver safe, effective treatments with minimal recovery time and maximum patient comfort.",
  },
  {
    id: 2,
    title: "Our Mission",
    content: "Our mission is to provide high-quality vascular care that combines medical excellence, advanced technology, and compassionate treatment—helping our patients regain health, confidence, and quality of life.",
  },
  {
    id: 3,
    title: "Our Expertise",
    content: "Led by an experienced vascular surgery specialist, our team offers comprehensive assessment and personalized treatment plans for each patient. With extensive clinical and academic experience, we follow international standards to ensure the best possible outcomes.",
  },
  {
    id: 4,
    title: "Why Choose Us",
    type: "list",
    items: [
      "Advanced and minimally invasive procedures",
      "Patient-centered care approach",
      "Modern medical facilities",
      "Proven clinical expertise",
      "Trusted by thousands of patients",
    ],
  },
  {
    id: 5,
    title: "Our Values",
    content: "We believe in precision, transparency, and empathy. Every patient is treated with respect, clear communication, and a commitment to long-term results.",
  },
];

export default function AboutSection() {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <section className="relative bg-[#F3F7F9] overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-4 relative z-10">
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            onSwiper={setSwiperRef}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className} w-3 h-3 rounded-full bg-gray-300 mx-1 cursor-pointer transition-all duration-300"></span>`;
              },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 min-h-[500px]">
                  {/* Left Navigation Arrow & Text Column */}
                  <div className="flex items-center gap-4 lg:gap-12 w-full lg:w-1/2">
                    {/* Navigation Arrow on the Left */}
                    <button 
                      onClick={() => swiperRef?.slidePrev()}
                      className="text-primary hover:scale-110 transition-transform cursor-pointer mt-2 shrink-0"
                    >
                      <ChevronLeft size={48} strokeWidth={2.5} />
                    </button>

                    {/* Text Content */}
                    <div className="space-y-6 pb-12">
                      <h2 className="text-4xl lg:text-5xl font-extrabold text-[#005982] tracking-tight">
                        {slide.title}
                      </h2>
                      
                      {slide.type === "list" ? (
                        <ul className="space-y-4">
                          {slide.items?.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-lg text-gray-700 leading-relaxed font-medium">
                              <span className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                          {slide.content}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* About Image Component (Integrated from about.svg) */}
                  <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="relative w-full aspect-square max-w-[600px] lg:h-[600px]">
                      <Image
                        src="/about.svg"
                        alt="About visual representation"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Stable Pagination Container - Positioned to align with the start of the text */}
            {/* Offset: padding (16px) + chevron (48px) + gap (lg:48px / md:16px) */}
            <div className="custom-pagination absolute bottom-4 lg:bottom-12 left-[80px] lg:left-[112px] z-20 flex items-center h-4"></div>
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          display: inline-block;
          border-radius: 9999px;
          transition: all 0.3s ease;
          background-color: #D1D5DB !important;
          opacity: 1 !important;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 2rem !important;
          background-color: #005982 !important;
        }
      `}</style>
    </section>
  );
}
