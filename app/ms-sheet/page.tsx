import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ms-sheet",
  name: "MS Sheet",
  category: "Mild Steel",
  img: "/img/MS-Sheet.jpg",
  tagline: "MS Sheet Supplier in Pune",
  headline: "MS Sheets — Mild Steel Sheet Supplier in Pune",
  desc: "Hot-rolled and cold-rolled mild steel sheets for industrial fabrication, automotive, and construction. Available in custom sizes with shearing service.",
  longDesc: `Hot-rolled and cold-rolled mild steel sheets are the backbone of industrial fabrication. HR sheets are ideal for structural applications and heavy fabrication, while CR sheets offer a cleaner surface finish for automotive, appliance, and precision enclosure applications. We offer shearing and cut-to-size services from our Pune warehouse.`,
  specs: [
    [
        "Grade",
        "IS 2062, HR / CR"
    ],
    [
        "Thickness",
        "0.8 mm to 25 mm"
    ],
    [
        "Sheet Size",
        "1250\u00d72500 mm / Custom"
    ],
    [
        "Type",
        "HR (Hot Rolled), CR (Cold Rolled)"
    ],
    [
        "Surface",
        "Mill Scale / Pickled & Oiled"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Body panels",
    "Industrial enclosures",
    "Tank fabrication",
    "Automotive parts",
    "Building cladding"
],
  keywords: "ms sheet supplier pune, mild steel sheet pune, hr sheet dealer india, cr sheet supplier pune, ms plate supplier",
  relatedProducts: [
    {
        "name": "MS Chequered Plate",
        "slug": "ms-chequered-plate",
        "img": "/img/Chequered-plate.jpg"
    },
    {
        "name": "MS Galvanised Sheets",
        "slug": "ms-galvanised-sheets",
        "img": "/img/Galvanised-Sheets.jpg"
    },
    {
        "name": "MS Flats",
        "slug": "ms-flats",
        "img": "/img/MS-Flats.jpg"
    }
],
  faqs: [
    {
        "q": "What is the difference between HR and CR steel sheet?",
        "a": "HR (Hot Rolled) sheets are produced at high temperature and have a mill scale surface \u2014 suited for structural and general fabrication. CR (Cold Rolled) sheets are processed further at room temperature for a smoother, more precise surface, used in automotive, appliance, and precision work."
    },
    {
        "q": "Do you offer shearing / cut-to-size for MS sheets?",
        "a": "Yes, we offer shearing and cut-to-size from our Pune facility. Share your dimensions on WhatsApp and we will provide a quote."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
