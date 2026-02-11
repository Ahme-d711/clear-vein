"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "About Us", href: "#intro" },
    { label: "Mission", href: "#mission" },
    { label: "Statistics", href: "#stats" },
    { label: "Contact Us", href: "#contact", className: "whitespace-nowrap" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        style={{ 
          transform: isMounted ? (isVisible ? "translateY(0)" : "translateY(-100%)") : "translateY(-100%)",
          opacity: isMounted ? 1 : 0,
        }}
        className="fixed top-0 left-0 right-0 z-100 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-500 ease-in-out"
      >
        <div className="container mx-auto max-w-[1440px] flex h-24 items-center justify-between px-4 md:px-6"> 
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
          
          {/* Center: Desktop Navigation Links */}
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

          {/* Right: CTA Button (Desktop) + Menu Icon (Mobile) */}
          <div className="flex items-center gap-4">
            <Button 
                variant="outline"
                onClick={() => openWhatsApp()}
                className="hidden lg:flex border-primary h-12 px-8 rounded-2xl text-primary hover:text-white hover:border-none text-base font-medium leading-6 tracking-[0.5px] gap-2 cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 hover:shadow-lg bg-linear-to-r from-white via-white to-primary bg-size-[200%_100%] bg-left hover:bg-right"
            >
                Booking Now
                <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-90 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-24 left-0 right-0 bg-white shadow-2xl z-95 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto max-w-[1440px] px-4 py-8 space-y-6">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Fade 
                key={link.label} 
                direction="down" 
                delay={index * 100} 
                duration={400}
                triggerOnce={false}
                cascade
              >
                <Link 
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-2xl font-medium text-primary hover:text-primary/80 transition-colors py-3 border-b border-gray-100 last:border-0"
                >
                  {link.label}
                </Link>
              </Fade>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <Fade direction="up" delay={navLinks.length * 100} duration={400} triggerOnce={false}>
            <Button 
                variant="outline"
                onClick={() => {
                  handleLinkClick();
                  openWhatsApp();
                }}
                className="w-full border-primary h-14 px-8 rounded-2xl text-primary hover:text-white hover:border-none text-lg font-medium gap-2 cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 hover:shadow-lg bg-linear-to-r from-white via-white to-primary bg-size-[200%_100%] bg-left hover:bg-right"
            >
                Booking Now
                <ArrowRight className="w-5 h-5" />
            </Button>
          </Fade>
        </div>
      </div>
    </>
  );
}
