import { cn } from "@/lib/utils";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface InfoSectionProps {
  title: string;
  description: React.ReactNode;
  media: React.ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
  bgColor?: string;
}

export default function InfoSection({
  title,
  description,
  media,
  imagePosition = "right",
  className,
  bgColor = "bg-white",
}: InfoSectionProps) {
  return (
    <section className={cn("py-20 overflow-hidden", bgColor, className)}>
      <div className="container max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Media Content */}
          <div className={cn(
            "relative group order-2",
            imagePosition === "left" ? "lg:order-1" : "lg:order-2"
          )}>
            <Fade direction={imagePosition === "left" ? "left" : "right"} triggerOnce duration={1000}>
              {media}
            </Fade>
          </div>

          {/* Text Content */}
          <div className={cn(
            "space-y-8 order-1",
            imagePosition === "left" ? "lg:order-2" : "lg:order-1"
          )}>
            <Fade direction={imagePosition === "left" ? "right" : "left"} triggerOnce duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                {title}
              </h2>
              
              <div className="space-y-6 text-foreground leading-relaxed text-lg">
                {description}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
