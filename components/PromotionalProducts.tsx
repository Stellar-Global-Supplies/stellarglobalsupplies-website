"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { nr } from "@/lib/nr";

const PROMOTIONAL_PRODUCTS = [
  {
    id: "nylock-nut",
    slug: "ms-nylock-nut",
    name: "MS Nylock Nut",
    img: "/img/01_nyloc_nut.png",
    tagline: "Vibration-proof fastening",
    sizes: ["M5×0.80", "M6×1.00", "M8×1.25", "M10×1.50"],
    grade: "Grade 982",
    highlight: "Nylon insert locking",
  },
  {
    id: "internal-circlips",
    slug: "internal-circlips-din472",
    name: "Internal Circlips DIN 472",
    img: "/img/02_internal_circlips_DIN472.png",
    tagline: "Precision bore retention",
    sizes: ["B8 to B100"],
    grade: "DIN 472",
    highlight: "Spring steel construction",
  },
  {
    id: "external-circlips",
    slug: "external-circlip-din471",
    name: "External Circlips DIN 471",
    img: "/img/03_external_circlips_DIN471.png",
    tagline: "Reliable shaft retention",
    sizes: ["A6 to A100"],
    grade: "DIN 471",
    highlight: "Premium fatigue resistance",
  },
  {
    id: "nordlock-washers",
    slug: "nordlock-washers",
    name: "Nordlock Washers",
    img: "/img/04_nordlock_washers.png",
    tagline: "Wedge-locking technology",
    sizes: ["M6 to M24"],
    grade: "Standard Grade",
    highlight: "Eliminates bolt loosening",
  },
  {
    id: "t-nuts",
    slug: "t-nuts",
    name: "T-Nuts",
    img: "/img/05_t_nuts.png",
    tagline: "Precise thread, durable build",
    sizes: ["M4 to M8"],
    grade: "Premium Quality",
    highlight: "Strong & reliable extrusion fastening",
  },
];

export default function PromotionalProducts() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="promotional-products"
      ref={ref}
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0fdf9 0%, #f8fafc 60%, #fff7f3 100%)" }}
      aria-labelledby="promo-heading"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,185,142,0.4), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,105,34,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{
              background: "rgba(0,185,142,0.10)",
              border: "1px solid rgba(0,185,142,0.25)",
              color: "var(--primary)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
            Featured Promotions
          </span>
          <h2
            id="promo-heading"
            className="text-3xl lg:text-4xl font-extrabold mb-3"
            style={{ color: "var(--dark)" }}
          >
            Special{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, #00d4a8 50%, var(--secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Promotional Products
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Handpicked premium industrial fasteners — quality verified, prices optimised for volume orders.
          </p>
        </div>

        {/* 4-column product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROMOTIONAL_PRODUCTS.map((product, i) => (
            <article
              key={product.id}
              className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Grade badge ribbon */}
              <div
                className="text-center py-1.5 text-xs font-bold text-white tracking-wide"
                style={{ background: "var(--primary)" }}
              >
                {product.grade}
              </div>

              {/* Image area */}
              <div className="relative bg-gray-50 flex items-center justify-center"
                style={{ height: "180px" }}>
                <Image
                  src={product.img}
                  alt={`${product.name} – industrial fastener`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-base font-bold mb-1 leading-tight"
                  style={{ color: "var(--dark)" }}
                >
                  {product.name}
                </h3>
                <p className="text-xs font-semibold mb-3" style={{ color: "var(--primary)" }}>
                  {product.tagline}
                </p>

                {/* Highlight feature */}
                <div className="flex items-center gap-1.5 mb-3">
                  <CheckCircle2 size={13} style={{ color: "var(--primary)" }} aria-hidden="true" />
                  <span className="text-xs text-gray-600">{product.highlight}</span>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                    Sizes
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium text-gray-600"
                        style={{ background: "#f1f5f9" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/${product.slug}`}
                  className="mt-auto w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 text-center block"
                  style={{ background: "var(--primary)" }}
                  aria-label={`View details for ${product.name}`}
                  onClick={() => nr("PromoCardClick", { product_name: product.name })}
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-10">
          <Link
            href="/promotional-products"
            onClick={() => nr("PromoSectionCTA")}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "var(--dark)" }}
            aria-label="See all promotional products with full details"
          >
            See Full Product Details
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <p className="text-xs text-gray-400 mt-3">
            Special bulk pricing available — contact us for a custom quote
          </p>
        </div>
      </div>
    </section>
  );
}
