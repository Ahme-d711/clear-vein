"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

export default function Hero() {
    const slides = [
        {
            id: 1,
            image: "/hero-1.svg",
            title: "Compassionate Care for Healthier Veins",
            subtitle: "What happens beneath the surface matters — precise understanding leads to better vein care"
        },
        {
            id: 2,
            image: "/hero-1.svg",
            title: "Expert Care for Your Health",
            subtitle: "Advanced treatments and compassionate care from the leading vein specialists."
        },
    ];

    return (
        <section className="relative w-full overflow-hidden group">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                speed={1000}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: ".hero-next",
                    prevEl: ".hero-prev",
                }}
                pagination={{ 
                    clickable: true,
                    el: ".custom-pagination",
                    bulletClass: "swiper-pagination-bullet !bg-white !opacity-50 !w-3 !h-2 !rounded-full !mx-0 !transition-all !duration-300 !cursor-pointer",
                    bulletActiveClass: "swiper-pagination-bullet-active !opacity-100 !w-12",
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="hero-swiper w-full aspect-1440/640 h-auto min-h-[400px] max-h-[700px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full flex items-center justify-center text-center text-white">
                            {/* Background Image */}
                            <div className="absolute inset-0 -z-10 bg-background">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                {/* Dark Overlay for readability */}
                                <div className="absolute inset-0 bg-black/20" />
                            </div>

                            {/* Content Overlay */}
                            <div className="container mx-auto px-4 max-w-7xl space-y-6">
                                <h1 className="text-4xl md:text-5xl font-bold tracking-wider leading-[.8] animate-in fade-in slide-in-from-bottom-5 duration-700">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                                    {slide.subtitle}
                                </p>
                                <div className="pt-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                                    <Button 
                                        className="h-14 px-12 rounded-2xl bg-white text-primary hover:bg-white/90 text-lg font-bold shadow-xl border-none cursor-pointer"
                                    >
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Controls */}
            <button className="hero-prev absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm cursor-pointer">
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="hero-next absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm cursor-pointer">
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Pagination Container */}
            <div className="custom-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2" />
        </section>
    );
}
