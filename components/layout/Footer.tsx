"use client";

import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function MainFooter() {
  const sections = [
    {
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
      ],
    },
    {
      links: [
        { label: "Medical Disclaimer", href: "#" },
        { label: "GP Referrals", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-10">
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-8">
            <Fade direction="left" triggerOnce>
              <Link href="/" className="text-2xl font-extrabold text-primary tracking-tight">
                Clear Vein Clinic
              </Link>
              <p className="text-[#64748B] text-sm max-w-md font-light leading-relaxed">
                Specialist venous care delivered with surgical precision. Led by
                Consultant Vascular Surgeon Dr Ahmed Hassanin.
              </p>
            </Fade>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-12">
            <Fade cascade damping={0.1} triggerOnce direction="up">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-8">
                  <ul className="space-y-4">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-[#64748B] hover:text-primary transition-colors duration-200 text-sm"
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
              <p className="text-primary text-sm font-medium">
                © 2024 Clear Vein Clinic. Dr Ahmed Hassanin (PhD, EBVS, CSD). IMC Statement: Registered
                Specialist.                
              </p>
        </Fade>
      </div>
    </footer>
  );
}
