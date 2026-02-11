import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { Fade } from "react-awesome-reveal";

export default function Navbar() {
  return (
    <Fade direction="down" triggerOnce duration={1000}>
      <nav className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur-md ">
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
          <div className="hidden md:flex items-center gap-6 text-lg font-medium">
              <Link href="#" className="text-primary hover:text-primary/80 transition-colors leading-[1.1] tracking-normal">
                  About Us
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80 transition-colors leading-[1.1] tracking-normal">
                  Contact Us
              </Link>
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
