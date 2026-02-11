"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Github,
} from "lucide-react";

import { Fade, Zoom } from "react-awesome-reveal";

export default function MainFooter() {
  const sections = [
    {
      title: "Services",
      links: [
        { label: "Varicose Veins", href: "#" },
        { label: "Spider Veins", href: "#" },
        { label: "Vascular Surgery", href: "#" },
        { label: "Leg Ulcers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Book Appointment", href: "#" },
        { label: "Patient Reviews", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Reach", href: "#" },
        { label: "Expertise", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "+20 123 456 7890", href: "tel:+201234567890" },
        { label: "info@doctor-ahmed.com", href: "mailto:info@doctor-ahmed.com" },
        { label: "Dar Al Shifa Hospital", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#f0f0f0] border-t border-gray-200 pt-20 pb-10 overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-4">
        {/* Top Section: Branding and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Fade direction="left" triggerOnce>
              <Link href="/" className="text-3xl font-black text-primary tracking-tight flex items-center gap-2">
                Clear Vein
              </Link>
              <p className="text-gray-500 text-lg leading-relaxed max-w-sm mt-4">
                Advanced Vascular & Venous Care. Dedicated to providing precise diagnosis and minimal recovery treatments.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                {[Twitter, Facebook, Instagram, Github].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-slate-900 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </Fade>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Fade cascade damping={0.1} triggerOnce direction="up">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-gray-500 hover:text-primary transition-colors duration-200 text-base font-medium"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Fade>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <Fade triggerOnce delay={500}>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 px-2">
            <p className="text-gray-500 text-sm font-medium">
              Clear Vein &copy; {new Date().getFullYear()}, All Rights Reserved. Led by Dr. Ahmed Hassanin.
            </p>
            
            <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
}
