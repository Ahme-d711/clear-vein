"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");

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

      const scrollingDown = currentY > lastY;
      const scrollDiff = Math.abs(currentY - lastY);

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

  // Intersection Observer for Active Section
  useEffect(() => {
    const navItems = [
      { label: "HOME", id: "hero" },
      { label: "ABOUT DR HASSANIN", id: "about" },
      { label: "VEIN CONDITIONS", id: "conditions" },
      { label: "TREATMENTS", id: "treatments" },
      { label: "FEES", id: "fees" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = navItems.find(i => i.id === entry.target.id);
          if (item) {
            setActiveSection(item.label);
          } else if (window.scrollY < 100) {
            setActiveSection("HOME");
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      if (item.id) {
        const element = document.getElementById(item.id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT DR HASSANIN", href: "/#about" },
    { label: "VEIN CONDITIONS", href: "/#conditions" },
    { label: "TREATMENTS", href: "/#treatments" },
    { label: "FEES", href: "/#fees" },
    { label: "CONTACT", href: "/contact" },
  ];

  const handleLinkClick = (label: string) => {
    setActiveSection(label);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        style={{ 
          transform: isMounted ? (isVisible ? "translateY(0)" : "translateY(-100%)") : "translateY(-100%)",
          opacity: isMounted ? 1 : 0,
        }}
        className="sticky top-0 left-0 right-0 z-50 w-full border-b bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out"
      >
        <div className="container mx-auto max-w-7xl flex h-18 items-center justify-between px-6 lg:px-12"> 
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setActiveSection("HOME")}>
              <div className="relative w-18 h-9 flex items-center justify-center">
                <Image 
                    src="/logo.svg" 
                    alt="Clear Vein Logo" 
                    fill
                    className="object-contain"
                />
              </div>
                <span className="text-xl lg:text-3xl font-bold text-primary uppercase tracking-wider">
                    CLEAR VEIN
                </span>
          </Link>
          
          {/* Center: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.label;
                return (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    onClick={() => handleLinkClick(link.label)}
                    className={`text-xs font-semibold tracking-widest transition-all duration-300 uppercase py-1 border-b-2 ${
                      isActive ? "text-primary border-primary" : "text-gray-500 border-transparent hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
          </nav>

          {/* Right: CTA Button (Desktop) + Menu Icon (Mobile) */}
          <div className="flex items-center gap-4">
            <Button 
                onClick={() => openWhatsApp()}
            >
                Book Appointment
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-[#002045] hover:bg-[#002045]/5 rounded-sm transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header> 

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#002045]/20 backdrop-blur-sm z-45 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-18 left-0 right-0 bg-white shadow-2xl z-48 lg:hidden border-b border-gray-100 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-10 space-y-8">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Fade 
                key={link.label} 
                direction="down" 
                delay={index * 50} 
                duration={400}
                triggerOnce={false}
              >
                <Link 
                  href={link.href}
                  onClick={() => handleLinkClick(link.label)}
                  className={`text-lg font-bold transition-all duration-300 py-4 border-b border-gray-50 flex items-center justify-between ${
                    activeSection === link.label ? "text-[#0084a9]" : "text-[#002045]"
                  }`}
                >
                  {link.label}
                  <span className="text-xl">→</span>
                </Link>
              </Fade>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <Fade direction="up" delay={300} duration={400} triggerOnce={false}>
            <Button 
                onClick={() => {
                  handleLinkClick(activeSection);
                  openWhatsApp();
                }}
                className="w-full h-14 rounded-none bg-[#005596] text-white text-base font-bold transition-all"
            >
                Book Appointment
            </Button>
          </Fade>
        </div>
      </div>
    </>
  );
}
