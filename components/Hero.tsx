"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Package, Star, ChevronDown } from "lucide-react";
import { nr, initScrollDepth } from "@/lib/nr";

const CAROUSEL_IMAGES = [
  { src: "/img/SS-Circles.jpg",     alt: "Stainless Steel Circles" },
  { src: "/img/MS-Round-Pipes.jpg", alt: "MS Round Pipes" },
  { src: "/img/SS-Round-Pipe.jpg",  alt: "SS Round Pipes" },
  { src: "/img/Hex-Bolts.jpg",      alt: "Hex Bolts" },
];

const STATS = [
  { value: "500+",  label: "Products",      Icon: Package },
  { value: "100%",  label: "Quality Check", Icon: ShieldCheck },
  { value: "3",     label: "Categories",    Icon: Star },
  { value: "Fast",  label: "Delivery",      Icon: Truck },
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);
  const [isVisible,  setIsVisible]  = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImg((i) => (i + 1) % CAROUSEL_IMAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const cleanup = initScrollDepth();
    return cleanup;
  }, []);

  const scrollToProducts = () => {
    nr("HeroCTAClick", { cta: "browse-products", section: "hero" });
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    nr("HeroCTAClick", { cta: "get-free-quote", section: "hero" });
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    document.querySelector("#promotional-products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero – Stellar Global Supplies"
    >
      {/* ── FULL-BLEED BACKGROUND CAROUSEL ── */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map((img, idx) => (
          <div
            key={img.src}
            className={[
              "absolute inset-0 transition-opacity duration-1000",
              idx === currentImg ? "opacity-100" : "opacity-0",
            ].join(" ")}
            aria-hidden={idx !== currentImg}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={idx === 0}
            />
          </div>
        ))}
        {/* Multi-layer gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,46,80,0.88) 0%, rgba(14,46,80,0.65) 55%, rgba(14,46,80,0.30) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(14,46,80,0.70) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                background: "rgba(0,185,142,0.20)",
                border: "1px solid rgba(0,185,142,0.45)",
                color: "#4dffd4",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#00B98E" }}
                aria-hidden="true"
              />
              Established 2025 · Pune, India
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              India&apos;s Most{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00B98E, #4dffd4, #FF6922)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                Reliable
              </span>
              <br />
              Industrial Supply Partner
            </h1>

            {/* Sub-copy */}
            <p
              className={`text-lg lg:text-xl text-white/80 mb-8 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              One stop. Every material. Zero compromise. Premium{" "}
              <strong className="text-white font-semibold">
                Stainless Steel, Mild Steel & Fastening
              </strong>{" "}
              products — tailored to your spec, delivered on time.
            </p>

            {/* Value props */}
            <ul
              className={`flex flex-col gap-2 mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                "500+ industrial products under one roof",
                "Precision-sourced to your exact specifications",
                "Reliable quality · on-time, every time",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/75">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                    style={{ background: "rgba(0,185,142,0.3)", color: "#4dffd4" }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                style={{ background: "var(--primary)", boxShadow: "0 0 24px rgba(0,185,142,0.45)" }}
                aria-label="Browse all products"
              >
                Browse Products
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.30)",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                }}
                aria-label="Contact us for a quote"
              >
                Get a Free Quote
              </button>
            </div>

            {/* Stats strip */}
            <div
              className={`grid grid-cols-4 gap-3 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              aria-label="Key statistics"
            >
              {STATS.map(({ value, label, Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 rounded-xl py-3 px-2"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Icon size={15} style={{ color: "#00B98E" }} aria-hidden="true" />
                  <span className="text-base font-extrabold text-white leading-none">{value}</span>
                  <span className="text-[10px] text-white/60 text-center leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CAROUSEL DOTS ── */}
      <div className="relative z-10 flex justify-center gap-2 pb-6">
        {CAROUSEL_IMAGES.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => setCurrentImg(idx)}
            aria-label={`View image ${idx + 1}: ${img.alt}`}
            aria-selected={idx === currentImg}
            className={[
              "h-1.5 rounded-full transition-all duration-300",
              idx === currentImg ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70",
            ].join(" ")}
          />
        ))}
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <button
        onClick={scrollDown}
        aria-label="Scroll to featured promotions"
        className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors duration-200 hidden lg:flex"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" aria-hidden="true" />
      </button>

      {/* ── IMAGE LABEL OVERLAY ── */}
      <div
        className="absolute bottom-10 right-6 z-10 hidden lg:block"
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className="text-xs px-3 py-1 rounded-full font-medium text-white/80"
          style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
        >
          {CAROUSEL_IMAGES[currentImg].alt}
        </span>
      </div>
    </section>
  );
}