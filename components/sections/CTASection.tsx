"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  ShieldCheck, 
  Zap, 
  PlusCircle,
  Microscope,
  Bone
} from "lucide-react"
import { Zoom, Fade } from "react-awesome-reveal";

const FloatingElement = ({ 
  children, 
  className,
  style,
  delay = 0, 
  duration = 5 
}: { 
  children: React.ReactNode, 
  className: string,
  style?: React.CSSProperties,
  delay?: number,
  duration?: number 
}) => (
  <div
    className={className}
    style={{
      ...style,
      animation: `float ${duration}s ease-in-out ${delay}s infinite`
    }}
  >
    {children}
  </div>
)

export default function CTASection() {
  const avatars = [
    { src: "/avatars/doctor-1.png", top: "15%", left: "10%", size: "w-16 h-16", delay: 0 },
    { src: "/avatars/doctor-2.png", top: "20%", right: "8%", size: "w-24 h-24", delay: 1 },
    { src: "/avatars/doctor-3.png", bottom: "15%", left: "15%", size: "w-20 h-20", delay: 2 },
    { src: "/avatars/doctor-4.png", bottom: "25%", right: "12%", size: "w-16 h-16", delay: 1.5 },
  ]

  const icons = [
    { icon: <Heart className="w-6 h-6 text-blue-200/40" />, top: "40%", left: "5%", delay: 0.5 },
    { icon: <Stethoscope className="w-8 h-8 text-blue-200/30" />, top: "10%", right: "25%", delay: 1.2 },
    { icon: <Activity className="w-10 h-10 text-blue-200/20" />, bottom: "40%", right: "5%", delay: 0.8 },
    { icon: <ShieldCheck className="w-7 h-7 text-blue-200/40" />, bottom: "10%", left: "30%", delay: 2.1 },
    { icon: <Zap className="w-6 h-6 text-yellow-400/30" />, top: "25%", left: "25%", delay: 1.5 },
    { icon: <PlusCircle className="w-8 h-8 text-white/20" />, bottom: "20%", right: "25%", delay: 0.3 },
    { icon: <Microscope className="w-10 h-10 text-white/10" />, top: "60%", left: "15%", delay: 1.8 },
    { icon: <Bone className="w-7 h-7 text-white/20" />, top: "15%", left: "40%", delay: 2.5 },
  ]

  return (
    <section className="relative py-32 bg-[#007095] overflow-hidden">
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>

      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Avatars */}
      {avatars.map((avatar, idx) => (
        <FloatingElement
          key={`avatar-${idx}`}
          className="absolute hidden md:block z-10"
          style={{ ...avatar } as any}
          delay={avatar.delay}
        >
          <Avatar className={`${avatar.size} border-2 border-white/50 shadow-xl`}>
            <AvatarImage src={avatar.src} className="object-cover" />
            <AvatarFallback className="bg-primary text-white">MD</AvatarFallback>
          </Avatar>
        </FloatingElement>
      ))}

      {/* Floating Icons */}
      {icons.map((item, idx) => (
        <FloatingElement
          key={`icon-${idx}`}
          className="absolute hidden lg:block pointer-events-none"
          style={{ ...item } as any}
          delay={item.delay}
          duration={6}
        >
          {item.icon}
        </FloatingElement>
      ))}

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Zoom triggerOnce duration={800}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Caring for Your Veins, <br />
                <span className="text-blue-100">Caring for You</span>
              </h2>
              <p className="text-xl text-blue-50/80 leading-relaxed max-w-2xl mx-auto">
                Comprehensive vascular assessment and treatment delivered according 
                to international medical standards and best clinical practices.
              </p>
            </div>
          </Zoom>

          <Fade direction="up" triggerOnce delay={400}>
            <div className="pt-4">
              <Button 
              size="lg" 
              className="px-12 py-8 text-xl rounded-2xl bg-white text-[#007095] hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-lg hover:scale-105 active:scale-95 font-bold"
            >
  
                Talk to a Specialist
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
