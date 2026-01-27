"use client";

import { Calendar, Tag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  summary: string;
}

interface NewsUpdatesProps {
  items: NewsItem[];
}

export function NewsUpdates({ items }: NewsUpdatesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 20 }
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
                  : { y: -1, transition: { duration: 0.3 } }
              }
              className="group"
            >
              <div className="relative h-full rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:shadow-lg p-6 transition-all duration-300 hover:-translate-y-1">
                {/* Top brand accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#E11D48] rounded-t-2xl" />
                
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3 h-3 text-[#2D5BFF]" />
                      <span className="text-xs font-semibold text-[#2D5BFF]">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg mb-3 text-[#0B1220] line-clamp-2">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
