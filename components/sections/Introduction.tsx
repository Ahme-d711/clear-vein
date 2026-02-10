"use client"

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import InfoSection from "./InfoSection";

export default function Introduction() {
  const [showVideo, setShowVideo] = useState(false);

  const videoMedia = (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-900 transition-all duration-500">
      <div className="aspect-video relative bg-black flex items-center justify-center">
        {!showVideo ? (
          <button 
            onClick={() => setShowVideo(true)}
            className="relative w-full h-full group/main cursor-pointer"
          >
            <Image
              src="/intro-video-poster.png"
              alt="Introduction Video Poster"
              fill
              className="object-cover opacity-80"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover/main:bg-white/40 group-hover/main:scale-110 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover/main:bg-primary group-hover/main:text-white transition-colors">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </div>
            </div>
          </button>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UBUnXo1exBU?autoplay=1&rel=0"
            title="Vascular Surgery Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        )}
      </div>
    </div>
  );

  const description = (
    <>
      <p>
        Welcome to the Vascular Surgery Unit led by{" "}
        <span className="text-primary font-semibold">
          Dr. Ahmed Hassanin
        </span>
        , Senior Vascular Surgery Specialist at Dar Al Shifa Hospital.
      </p>
      <p>
        We provide comprehensive assessment and advanced treatment for
        vascular and venous diseases, using the latest evidence-based
        techniques to ensure safe procedures, optimal outcomes, and faster
        recovery. All treatments are delivered with a patient-centred
        approach that prioritizes comfort, precision, and long-term
        results.
      </p>
      <p>
        Whether you are suffering from chronic vein problems, circulation
        issues, skin changes, or complications related to vascular disease,
        our team is here to offer expert care tailored to your condition.
      </p>
    </>
  );

  return (
    <>
      <InfoSection 
        title="Introduction"
        description={description}
        media={videoMedia}
        imagePosition="right"
      />
      {/* Reflection/Shadow under the laptop - repositioned or integrated if needed */}
      <div className="container mx-auto px-4 -mt-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:order-2">
            <div className="h-4 w-full bg-black/10 blur-xl rounded-full mx-auto max-w-[90%]" />
          </div>
        </div>
      </div>
    </>
  );
}
