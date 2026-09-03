"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Zap } from "lucide-react";

export default function PromoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Promotional announcement"
      className="relative w-full z-40 flex items-center justify-center gap-3 px-4 py-2.5 text-white text-sm font-medium"
      style={{
        background: "linear-gradient(90deg, #0E2E50 0%, #00B98E 50%, #0E2E50 100%)",
        backgroundSize: "200% auto",
        animation: "shimmer 5s linear infinite",
      }}
    >
      {/* Glow pulse */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-8 rounded-full blur-2xl opacity-30 pointer-events-none"
        style={{ background: "#00B98E" }}
      />

      <Zap size={14} className="flex-shrink-0 text-yellow-300" aria-hidden="true" />

      <p className="text-center leading-snug">
        <span className="font-bold text-yellow-300 mr-1">Featured Promotions:</span>
        MS NYLOCK NUTS · DIN Circlips · Nordlock Washers · T-Nuts — Special pricing available
      </p>

      <Link
        href="/promotional-products"
        className="flex-shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200 hover:scale-105"
        style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.30)" }}
        aria-label="View promotional products"
      >
        View Offers →
      </Link>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss promotion banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-150"
      >
        <X size={15} aria-hidden="true" />
      </button>
    </div>
  );
}
