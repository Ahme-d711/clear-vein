"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function MainFooter() {
  const [footerData, setFooterData] = useState<{
    description: string,
    copyright: string,
    links: { label: string, href: string }[]
  } | null>(null);

  useEffect(() => {
    fetch('/api/content').then(res => res.json()).then(data => {
      setFooterData({
        description: data.footerDescription || "Specialist venous care delivered with surgical precision. Led by Consultant Vascular Surgeon Dr Ahmed Hassanin.",
        copyright: data.footerCopyright || `© ${new Date().getFullYear()} Clear Vein Clinic. Mr. Ahmed Hassanin is registered on the Specialist Division of the Irish Medical Council (Vascular Surgery)...`,
        links: data.footerLinks || [
          { label: "Privacy Policy", href: "#" },
          { label: "Cookie Policy", href: "#" },
          { label: "Terms & Conditions", href: "#" },
          { label: "Medical Disclaimer", href: "#" },
          { label: "GP Referrals", href: "#" },
          { label: "FAQs", href: "#" },
        ]
      });
    });
  }, []);

  return (
    <footer className="bg-[#F8F9FF] border-t border-gray-100 pt-20 pb-12 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-10">
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-8">
            <Fade direction="left" triggerOnce>
              <Link href="/" className="text-2xl font-extrabold text-primary tracking-tight">
                Clear Vein Clinic
              </Link>
              <p className="text-[#64748B] text-sm max-w-md font-light leading-relaxed">
                {footerData?.description}
              </p>
            </Fade>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-12">
            <Fade cascade damping={0.1} triggerOnce direction="up">
              <div className="space-y-8">
                <ul className="space-y-4">
                  {footerData?.links?.slice(0, 3).map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-[#64748B] hover:text-primary underline transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <ul className="space-y-4">
                  {footerData?.links?.slice(3).map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-[#64748B] hover:text-primary underline transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <Fade triggerOnce delay={500}>
              <p className="text-primary text-sm font-medium max-w-xl">
                {footerData?.copyright}
              </p>
        </Fade>
      </div>
    </footer>
  );
}

