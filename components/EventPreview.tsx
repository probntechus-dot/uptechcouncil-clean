"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const events = [
  {
    title: "Pakistan Business Summit @ Davos 2025",
    date: "20–24 January 2025",
    location: "Davos, Switzerland",
    summary: "High-level sideline summit during WEF week focusing on bilateral trade and investment.",
    image: "/image/events/pakistan-business-summit-davos-2025.jpg",
  },
  {
    title: "UK–Pakistan Business Summit 2025",
    date: "21 November 2025",
    location: "The Cumberland Hotel, London, United Kingdom",
    summary: "Flagship bilateral business summit fostering cross-sector collaborations and policy discussions.",
    image: "/image/events/uk-pakistan-business-summit-2025.jpg",
  },
  {
    title: "DHA Peshawar UK Road Show 2025",
    date: "4–10 May 2025",
    location: "London, Birmingham, Manchester, Slough",
    summary: "Diaspora investment roadshow connecting UK-based investors with development opportunities.",
    image: "/image/events/DHA-Peshawar-UK-Road-Show-2025.jpg",
  },
];

export function EventPreview() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event, index) => {
        const imageFailed = imageErrors[index];
        
        return (
          <Link
            key={index}
            href="/events"
            className="group block"
          >
            <div className="relative h-full rounded-2xl border border-[rgba(11,18,32,0.08)] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              {/* Event Image - Top Section */}
              <div className="aspect-video bg-gradient-to-br from-[#1E40AF]/10 to-[#00B140]/10 relative overflow-hidden">
                {!imageFailed && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={() => {
                      setImageErrors(prev => ({ ...prev, [index]: true }));
                    }}
                  />
                )}
                
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* PAST EVENT Badge */}
                <div className="absolute left-4 top-4 z-10 rounded-full border border-red-400/50 bg-red-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md group-hover:bg-red-600 group-hover:border-red-300/60">
                  <span>EVENT</span>
                </div>
                
                {/* Fallback if image fails */}
                {imageFailed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1E40AF]/15 to-[#00B140]/15">
                    <div className="text-center">
                      <Calendar className="w-10 h-10 text-[#1E40AF]/40 mx-auto mb-2" />
                      <span className="text-xs font-medium text-[rgba(11,18,32,0.5)]">Event Image</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Event Content - Bottom Section */}
              <div className="p-6">
                {/* Date Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E40AF]/10 border border-[#1E40AF]/20 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-[#1E40AF]" />
                  <span className="text-xs font-semibold text-[#1E40AF]">{event.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="font-heading font-semibold text-xl mb-2 text-[#0B1220] group-hover:text-[#1E40AF] transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>
                
                {/* Summary */}
                <p className="text-sm text-[rgba(11,18,32,0.68)] mb-4 leading-relaxed line-clamp-2">
                  {event.summary}
                </p>
                
                {/* Location Row */}
                <div className="flex items-start gap-2 text-sm text-[rgba(11,18,32,0.68)] mb-4">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#1E40AF]" />
                  <span className="line-clamp-2">{event.location}</span>
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1E40AF] group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}