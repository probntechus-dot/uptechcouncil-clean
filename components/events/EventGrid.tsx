"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface Event {
  title: string;
  date: string;
  location: string;
  summary: string;
  image: string;
}

interface EventGridProps {
  events: Event[];
}

export function EventGrid({ events }: EventGridProps) {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => {
        const imageFailed = imageErrors[index];
        const isUpcoming = false; // You can add logic to determine this

        return (
          <motion.div
            key={index}
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 30 }
            }
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              shouldReduceMotion
                ? {}
                : { y: -4, transition: { duration: 0.3 } }
            }
            className="group"
          >
            <div className="relative h-full rounded-2xl border border-[rgba(234,242,255,0.15)] bg-[rgba(255,255,255,0.06)] backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl hover:border-[rgba(234,242,255,0.25)] transition-all duration-500">
              {/* Event Image */}
              <div className="aspect-video bg-gradient-to-br from-[#1E40AF]/20 to-[#00B140]/15 relative overflow-hidden">
                {!imageFailed && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => {
                      setImageErrors((prev) => ({ ...prev, [index]: true }));
                    }}
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-transparent to-transparent" />

                {/* Premium badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-lg">
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                      Past Event
                    </span>
                  </div>
                </div>

                {/* Fallback */}
                {imageFailed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1E40AF]/20 to-[#00B140]/15">
                    <div className="text-center">
                      <Calendar className="w-10 h-10 text-[#1E40AF]/50 mx-auto mb-2" />
                      <span className="text-xs font-medium text-[rgba(234,242,255,0.6)]">
                        Event Image
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-6">
                {/* Date chip */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-4 ${
                    isUpcoming
                      ? "bg-[#00B140]/20 border-[#00B140]/30"
                      : "bg-[#1E40AF]/20 border-[#1E40AF]/30"
                  }`}
                >
                  <Calendar
                    className={`w-3.5 h-3.5 ${
                      isUpcoming ? "text-[#00B140]" : "text-[#1E40AF]"
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      isUpcoming ? "text-[#00B140]" : "text-[#1E40AF]"
                    }`}
                  >
                    {event.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl mb-3 text-[#EAF2FF] group-hover:text-[#1E40AF] transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[rgba(234,242,255,0.75)] mb-4 leading-relaxed line-clamp-2">
                  {event.summary}
                </p>

                {/* Location */}
                <div className="flex items-start gap-2 text-sm text-[rgba(234,242,255,0.7)] mb-4">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#1E40AF]" />
                  <span className="line-clamp-2">{event.location}</span>
                </div>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1E40AF] group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border-2 border-[#1E40AF]/30 shadow-[0_0_20px_rgba(30,64,175,0.2)]" />
              </div>

              {/* Subtle shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
