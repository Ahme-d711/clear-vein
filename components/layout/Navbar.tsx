"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#intro" },
    { label: "Services", href: "#services" },
    { label: "Our Background", href: "#about", className: "whitespace-nowrap" },
    { label: "Mission", href: "#mission" },
    { label: "Stats", href: "#stats" },
    { label: "Contact Us", href: "#contact", className: "whitespace-nowrap" },
  ];

  return (
    <Fade direction="down" triggerOnce duration={1000}>
      <nav className={`sticky top-0 z-50 w-full border-b bg-background backdrop-blur-md transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
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
      </nav>
    </Fade>
  );
}
