"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let lastY = window.scrollY;
    
    const handleScroll = () => {
      const currentY = window.scrollY;
      
      // Always show at the top
      if (currentY < 10) {
        setIsVisible(true);
        lastY = currentY;
        return;
      }

      // Determine direction
      const scrollingDown = currentY > lastY;
      const scrollDiff = Math.abs(currentY - lastY);

      // Only act if scroll difference is significant or near top
      if (scrollDiff > 10) {
        if (scrollingDown && currentY > 100) {
          setIsVisible(false);
        } else if (!scrollingDown) {
          setIsVisible(true);
        }
        lastY = currentY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "#intro" },
    { label: "Mission", href: "#mission" },
    { label: "Statistics", href: "#stats" },
    { label: "Contact Us", href: "#contact", className: "whitespace-nowrap" },
  ];

  return (
    <header 
      style={{ 
        transform: isMounted ? (isVisible ? "translateY(0)" : "translateY(-100%)") : "translateY(-100%)",
        opacity: isMounted ? 1 : 0,
      }}
      className="fixed top-0 left-0 right-0 z-100 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-500 ease-in-out"
    >
      <div className="container mx-auto max-w-[1440px] flex h-24 items-center justify-between px-4 md:px-6"> 
        <div className="flex items-center gap-8">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
            <Image 
                src="/logo.svg" 
                alt="Clear Vein Logo" 
                width={70} 
                height={30}
                className="w-auto"
            />
            <span className="text-[32px] font-bold text-primary uppercase leading-[1.1] tracking-normal">
                CLEAR VEIN
            </span>
        </Link>
        
        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`relative text-primary transition-colors group ${link.className || ""}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
        </div>
        </div>

        {/* Right: CTA Button */}
        <Button 
            variant="outline" 
            className="border-primary h-12 px-8 rounded-2xl text-primary hover:text-white hover:border-none text-base font-medium leading-6 tracking-[0.5px] gap-2 cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 hover:shadow-lg bg-linear-to-r from-white via-white to-primary bg-size-[200%_100%] bg-left hover:bg-right"
        >
            Booking Now
            <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
