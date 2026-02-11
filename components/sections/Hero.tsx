"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";

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
                    el: ".hero-pagination",
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
                                <Fade direction="up" triggerOnce duration={1000}>
                                    <h1 className="text-4xl md:text-5xl font-bold tracking-wider leading-[.8]">
                                        {slide.title}
                                    </h1>
                                </Fade>
                                <Fade direction="up" triggerOnce delay={200} duration={1000}>
                                    <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                                        {slide.subtitle}
                                    </p>
                                </Fade>
                                <Slide direction="up" triggerOnce delay={400} duration={800}>
                                    <div className="pt-4">
                                        <Button 
                                            className="h-14 px-12 rounded-2xl bg-white text-primary hover:bg-white/90 text-lg font-bold shadow-xl border-none cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                                        >
                                            Book Now
                                        </Button>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Pagination Container - Centered using left-0 right-0 */}
                <div className="hero-pagination absolute bottom-10 left-0 right-0 z-20 flex gap-2 justify-center" />
            </Swiper>

            {/* Navigation Controls */}
            <button className="hero-prev absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm cursor-pointer">
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="hero-next absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm cursor-pointer">
                <ChevronRight className="h-6 w-6" />
            </button>

            <style jsx global>{`
                .hero-pagination .swiper-pagination-bullet {
                    width: 12px !important;
                    height: 8px !important;
                    background-color: white !important;
                    opacity: 0.5 !important;
                    border-radius: 9999px !important;
                    transition: all 0.3s ease !important;
                    cursor: pointer !important;
                    margin: 0 4px !important;
                }
                .hero-pagination .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    width: 48px !important;
                }
            `}</style>
        </section>
    );
}
