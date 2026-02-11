"use client";

import Image from "next/image";

const stats = [
  {
    id: 1,
    value: "3567K+",
    label: "Patients Treated Successfully",
    image: "/doctor-client.png",
  },
  {
    id: 2,
    value: "3567K+",
    label: "Successful Vascular Procedures",
    image: "/doctor-client.png",
  },
  {
    id: 3,
    value: "3567K+",
    label: "Patients Who Trusted Our Care",
    image: "/doctor-client.png",
  },
];

export default function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col lg:flex-row">
      {stats.map((stat) => (
        <div 
          key={stat.id} 
          className="relative flex-1 h-[400px] lg:h-[500px] overflow-hidden group cursor-pointer"
        >
          {/* Background Image Container with Zoom effect */}
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <Image
              src={stat.image}
              alt={stat.label}
              fill
              className="object-cover"
              priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 lg:p-12 z-10 text-white">
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              {stat.value}
            </h3>
            <p className="text-lg lg:text-xl font-medium opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
