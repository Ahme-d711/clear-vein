import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto max-w-[1440px] flex h-20 items-center justify-between px-4 md:px-6"> 
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
            className="border-primary bg-white h-10 text-primary hover:bg-primary hover:text-primary-foreground text-base font-medium leading-6 tracking-[0.5px] gap-2 cursor-pointer"
        >
            Booking Now
            <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
}
