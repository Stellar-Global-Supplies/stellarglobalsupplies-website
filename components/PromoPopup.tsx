"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

// Show popup after 2.5 s, only once per session
const POPUP_DELAY_MS = 2500;

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't re-show if already dismissed this session
    if (sessionStorage.getItem("promoPopupDismissed")) return;
    const t = setTimeout(() => setVisible(true), POPUP_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem("promoPopupDismissed", "1");
  }

  if (!visible) return null;

  return (
    /* ── BACKDROP ── */
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Promotional offer"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
      onClick={dismiss}           /* clicking backdrop closes popup */
    >
      {/* ── CARD ── */}
      <div
        className="relative max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()} /* prevent backdrop click from firing inside */
        style={{ animation: "popupIn 0.28s cubic-bezier(.34,1.56,.64,1) both" }}
      >
        {/* ── CLOSE BUTTON — always visible, top-right ── */}
        <button
          onClick={dismiss}
          aria-label="Close promotional popup"
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full font-bold text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ background: "rgba(0,0,0,0.55)", border: "2px solid rgba(255,255,255,0.55)" }}
        >
          <X size={18} aria-hidden="true" />
        </button>

        {/* ── PROMO IMAGE — clicking takes to promotional products page ── */}
        <Link
          href="/promotional-products"
          onClick={dismiss}
          aria-label="View MS Nylock Nut promotional offer"
          className="block"
        >
          <div className="relative w-full" style={{ aspectRatio: "16/6.5" }}>
            <Image
              src="/img/01_nyloc_nut.png"
              alt="MS Nylock Nut – Special Promotional Pricing at Stellar Global Supplies"
              fill
              sizes="(max-width: 640px) 100vw, 576px"
              className="object-cover"
              priority
            />
          </div>

          {/* ── SUBTLE CTA STRIP ── */}
          <div
            className="flex items-center justify-between px-5 py-3 text-white text-sm font-bold"
            style={{ background: "var(--primary)" }}
          >
            <span>🎉 Special pricing available now</span>
            <span className="text-xs opacity-80 underline underline-offset-2">View All Offers →</span>
          </div>
        </Link>
      </div>

      {/* ── Keyframe animation injected once ── */}
      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.88) translateY(24px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
}
