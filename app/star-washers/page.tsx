import type { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "star-washers",
  name: "Star Washers",
  category: "Industrial Fasteners",
  img: "/img/Star-Washers.jpg",
  tagline: "Star Washer Supplier in Pune",
  headline: "Star Washers — Internal Tooth Lock Washer Supplier in Pune",
  desc: "Internal-tooth star washers that bite into mating surfaces for reliable anti-loosening lock and consistent electrical bonding under vibration.",
  longDesc: "Star washers, also known as internal-tooth lock washers, feature sharp radial teeth punched around the inner or outer diameter that dig into the bolt head and mating surface when tightened. This mechanical bite resists rotational loosening under vibration while also cutting through paint, oxide, or plating to create a low-resistance electrical bonding path — making star washers a preferred choice wherever grounding or electrical continuity matters alongside mechanical locking. Unlike spring washers that rely on axial spring force alone, the tooth geometry of a star washer provides both a locking action and a scraping/bonding action in a single component. They are widely used in electrical panel assembly, grounding and earthing connections, automotive and appliance assembly, and general machinery where a compact, self-locking washer is needed. Stellar Global Supplies stocks star washers in a full range of sizes ex-Pune with pan-India delivery.",
  specs: [
    ["Type", "Internal-tooth lock washer"],
    ["Size Range", "M3 to M12"],
    ["Material", "Spring Steel"],
    ["Surface", "Phosphate / Black Oxide Coated"],
    ["Function", "Anti-loosening lock + electrical bonding"],
    ["Standard", "DIN 6797"],
    ["Delivery", "Pan-India from Pune"],
  ],
  applications: [
    "Electrical panel & grounding assembly",
    "Earthing & bonding connections",
    "Automotive & appliance assembly",
    "General machinery & equipment fastening",
    "Enclosure & cabinet assembly",
  ],
  keywords: "star washer supplier pune, internal tooth lock washer dealer india, din 6797 washer pune, grounding washer supplier, earthing washer dealer india, star washer m3 m12 pune, anti-loosening washer supplier",
  relatedProducts: [
    { name: "Nylock Nuts", slug: "nylock-nuts", img: "/img/Nylock-Nuts.jpg" },
    { name: "MB Lock Washer", slug: "mb-lock-washer", img: "/img/MB-Lock-Washer.jpg" },
    { name: "Nordlock Washers", slug: "nordlock-washers", img: "/img/Nordlock-Washer.jpg" },
    { name: "T-Nuts", slug: "t-nuts", img: "/img/T-Nuts.jpg" },
  ],
  faqs: [
    {
      q: "What's the difference between star washers and spring washers?",
      a: "Spring washers rely purely on axial spring tension to resist loosening. Star washers add sharp internal or external teeth that physically bite into the mating surfaces, providing a stronger mechanical lock and, importantly, cutting through paint or oxide layers to create a reliable electrical bonding path — which spring washers don't provide.",
    },
    {
      q: "Are star washers suitable for electrical grounding applications?",
      a: "Yes, this is one of their primary uses. The teeth scrape through non-conductive coatings on the mating surface to establish direct metal-to-metal contact, making star washers a standard choice for earthing and grounding connections in electrical panels and enclosures.",
    },
    {
      q: "Internal tooth or external tooth — which should I use?",
      a: "Internal-tooth washers sit fully within the bolt head diameter and are preferred where a clean, compact appearance is needed. External-tooth washers have teeth projecting beyond the outer edge, giving a larger contact area and stronger bite — useful on larger fasteners or where maximum grip is required.",
    },
    {
      q: "What sizes do you stock in Pune?",
      a: "We stock star washers from M3 to M12 for immediate dispatch from our Pune facility. Other sizes and finishes available on order — WhatsApp us your requirement.",
    },
  ],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
