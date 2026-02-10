import { cn } from "@/lib/utils";
import React from "react";

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
    <section className={cn("py-20", bgColor, className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Media Content */}
          <div className={cn(
            "relative group order-2",
            imagePosition === "left" ? "lg:order-1" : "lg:order-2"
          )}>
            {media}
          </div>

          {/* Text Content */}
          <div className={cn(
            "space-y-8 order-1",
            imagePosition === "left" ? "lg:order-2" : "lg:order-1"
          )}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
              {title}
            </h2>
            
            <div className="space-y-6 text-foreground leading-relaxed text-lg">
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
