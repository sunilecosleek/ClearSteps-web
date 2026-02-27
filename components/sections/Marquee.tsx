"use client";

import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-ink py-4 overflow-hidden relative">
      <div
        className="flex gap-[52px] w-max"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 font-syne text-[0.82rem] font-semibold text-white/55 whitespace-nowrap"
          >
            <span className="text-primary text-[0.9rem]">◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
