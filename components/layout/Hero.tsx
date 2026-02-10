"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        // We can add more slides here if needed later
    ];

    return (
        <section className="relative w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="hero-swiper h-[640px] w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full flex items-center justify-center text-center text-white">
                            {/* Background Image */}
                            <div className="absolute inset-0 -z-10">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                {/* Dark Overlay for readability */}
                                <div className="absolute inset-0 bg-black/30" />
                            </div>

                            {/* Content Overlay */}
                            <div className="container mx-auto px-4 max-w-4xl">
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto">
                                    {slide.subtitle}
                                </p>
                                <Button 
                                    className="bg-white text-primary hover:bg-white/90 h-14 px-10 text-xl font-medium rounded-lg shadow-lg transition-all"
                                >
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .hero-swiper .swiper-button-next,
                .hero-swiper .swiper-button-prev {
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    backdrop-filter: blur(4px);
                }
                .hero-swiper .swiper-button-next:after,
                .hero-swiper .swiper-button-prev:after {
                    font-size: 20px;
                    font-weight: bold;
                }
                .hero-swiper .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                    width: 40px;
                    height: 4px;
                    border-radius: 2px;
                }
                .hero-swiper .swiper-pagination-bullet-active {
                    background: white;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}
