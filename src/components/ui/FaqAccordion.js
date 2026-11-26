"use client";

import { useState } from "react";
import { ChevronDown } from "../icons";

export default function FaqAccordion({ items, title }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="w-full">
      {title && (
        <div className="max-w-2xl mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">{title}</h2>
        </div>
      )}

      <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-4 transition-colors">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-normal text-slate-900 group-hover:text-[#6803F5] transition-colors pr-4">
                  {item.question}
                </span>
                <span
                  className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 bg-purple-50 text-[#6803F5]" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="mt-2.5 pr-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
