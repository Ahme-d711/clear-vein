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

export default function MainFooter() {
  const payments = [
    { name: "Visa", src: "/footer/Visa.svg" },
    { name: "Mastercard", src: "/footer/Mastercard.svg" },
    { name: "PayPal", src: "/footer/Paypal.svg" },
    { name: "ApplePay", src: "/footer/ Pay.svg" },
    { name: "GooglePay", src: "/footer/G Pay.svg" },
  ];

  const sections = [
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Features", href: "#" },
        { label: "Works", href: "#" },
        { label: "Career", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Customer Support", href: "#" },
        { label: "Delivery Details", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "FAQ",
      links: [
        { label: "Account", href: "#" },
        { label: "Manage Deliveries", href: "#" },
        { label: "Orders", href: "#" },
        { label: "Payments", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Free eBooks", href: "#" },
        { label: "Development Tutorial", href: "#" },
        { label: "How to - Blog", href: "#" },
        { label: "Youtube Playlist", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#f0f0f0] border-t border-gray-200 pt-16 pb-8">
      <div className="container max-w-[1440px] mx-auto px-4">
        {/* Top Section: Branding and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="text-3xl font-black text-primary tracking-tight uppercase">
              Clear Vein.Com
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Github].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-slate-900 bg-white hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
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
                        className="text-gray-500 hover:text-slate-900 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright and Payments */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs">
            Clear Vein.COM &copy; 2000-2023, All Rights Reserved
          </p>
          
          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {payments.map((payment) => (
              <div 
                key={payment.name}
                className="w-10 h-6 relative flex items-center justify-center rounded-sm border border-gray-200 bg-white p-1 transition-all cursor-default hover:shadow-sm"
              >
                <Image
                  src={payment.src}
                  alt={payment.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
