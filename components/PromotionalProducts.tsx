"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { nr } from "@/lib/nr";

// ── PROMOTIONAL PRODUCTS DATA ──────────────────────────────────────────────────
const PROMOTIONAL_PRODUCTS = [
  {
    id: "nylock-nut",
    name: "MS NYLOCK NUT",
    img: "/img/01_nyloc_nut.png",
    tagline: "Vibration-proof fastening solution",
    description:
      "Premium MS NYLOCK NUTS with nylon insert for superior locking performance. Available in sizes M5 to M10, these nuts provide reliable vibration resistance for critical applications.",
    sizes: ["M5X0.80", "M6X1.00", "M8X1.25", "M10X1.00", "M10X1.50"],
    grade: "Grade 982",
  },
  {
    id: "internal-circlips",
    name: "Internal Circlips DIN 472",
    img: "/img/02_internal_circlips_DIN472.png",
    tagline: "Precision bore retention rings",
    description:
      "High-quality internal circlips manufactured to DIN 472 standards. Designed for secure retention in housings and bores, available in sizes B8 to B100.",
    sizes: ["B8 to B100"],
    grade: "DIN 472",
  },
  {
    id: "external-circlips",
    name: "External Circlips DIN 471",
    img: "/img/03_external_circlips_DIN471.png",
    tagline: "Reliable shaft retention solution",
    description:
      "Durable external circlips conforming to DIN 471 specifications. Ideal for shaft retention in mechanical assemblies, available in sizes A6 to A100.",
    sizes: ["A6 to A100"],
    grade: "DIN 471",
  },
  {
    id: "nordlock-washers",
    name: "Nordlock Washers",
    img: "/img/04_nordlock_washers.png",
    tagline: "Advanced locking washer technology",
    description:
      "Premium Nordlock washers featuring wedge-locking technology for superior bolt security. Available in sizes M6 to M24, perfect for high-vibration applications.",
    sizes: ["M6 to M24"],
    grade: "Standard Grade",
  },
];

// ── PRODUCT CARD ───────────────────────────────────────────────────────────────
function PromoCard({
  name,
  img,
  tagline,
  description,
  sizes,
  grade,
}: {
  name: string;
  img: string;
  tagline: string;
  description: string;
  sizes: string[];
  grade: string;
}) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 bg-gray-50">
        <Image
          src={img}
          alt={`${name} - promotional product`}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-contain p-4"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
          style={{ background: "var(--primary)" }}
        >
          {grade}
        </span>
        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--dark)" }}>
          {name}
        </h3>
        <p className="text-sm font-semibold mb-2" style={{ color: "var(--primary)" }}>
          {tagline}
        </p>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Sizes */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Available Sizes:
          </p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <span
                key={size}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            nr("PromoEnquire", { product_name: name });
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full btn-primary text-sm"
          aria-label={`Enquire about ${name}`}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}

// ── AUTO-SCROLL CAROUSEL ───────────────────────────────────────────────────────
export default function PromotionalProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const totalProducts = PROMOTIONAL_PRODUCTS.length;

  // Auto-scroll logic
  useEffect(() => {
    if (!isPaused) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalProducts);
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused, totalProducts]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProducts);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="promotional-products"
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)" }}
      aria-labelledby="promo-heading"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-20 blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,185,142,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-badge mb-4 inline-flex">Featured Promotions</span>
          <h2 id="promo-heading" className="section-heading mb-3">
            Special <span className="text-gradient">Promotional Products</span>
          </h2>
          <p className="section-sub mx-auto">
            Discover our handpicked selection of premium industrial fasteners and components — 
            quality guaranteed, prices optimized for you.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
        >
          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {PROMOTIONAL_PRODUCTS.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex justify-center">
                    <PromoCard {...product} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous promotional product"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next promotional product"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {PROMOTIONAL_PRODUCTS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 mb-4">
            Interested in these promotional products? Contact us for special pricing!
          </p>
          <button
            onClick={() => {
              nr("PromoSectionCTA");
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
            aria-label="View all promotional products"
          >
            View All Promotional Products
          </button>
        </div>
      </div>
    </section>
  );
}