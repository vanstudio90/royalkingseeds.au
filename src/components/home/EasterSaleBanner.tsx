'use client';

import { useState } from 'react';

export function EasterCouponCode() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText('EASTERSEEDS');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyCode}
      className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-dashed border-[#D7B65D]/60 hover:border-[#D7B65D] rounded-lg px-3 py-1.5 transition-all duration-300 cursor-pointer easter-code-glow"
    >
      <span className="text-sm sm:text-base font-bold tracking-[2px] text-[#D7B65D]" style={{ fontFamily: 'var(--font-patua)' }}>
        EASTERSEEDS
      </span>
      <span className="flex items-center gap-0.5 text-[10px] text-white/60 group-hover:text-[#D7B65D] transition-colors">
        {copied ? (
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        )}
      </span>
    </button>
  );
}
