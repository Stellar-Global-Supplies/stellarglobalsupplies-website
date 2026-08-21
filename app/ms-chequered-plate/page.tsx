import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ms-chequered-plate",
  name: "MS Chequered Plate",
  category: "Mild Steel",
  img: "/img/Chequered-plate.jpg",
  tagline: "MS Chequered Plate Supplier in Pune",
  headline: "MS Chequered Plates — Anti-Slip Plate Supplier in Pune",
  desc: "Mild steel chequered / tread plates with raised diamond or lentil pattern for anti-slip flooring, ramps, and stair treads. IS 3502 grade.",
  longDesc: `MS chequered plates (tread plates) feature a raised diamond or lentil pattern that provides superior grip underfoot, making them essential for industrial flooring, ramps, stair treads, and vehicle load platforms. Supplied to IS 3502, our tread plates are hot-rolled and available in custom sizes from Pune.`,
  specs: [
    [
        "Grade",
        "IS 3502, IS 2062"
    ],
    [
        "Thickness",
        "2.5 mm to 10 mm (base)"
    ],
    [
        "Pattern",
        "Diamond / Lentil (Teardrop)"
    ],
    [
        "Sheet Size",
        "1250\u00d72500 mm / Custom"
    ],
    [
        "Surface",
        "Hot Rolled, Mill Finish"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Industrial flooring",
    "Loading ramps",
    "Stair treads",
    "Vehicle floor plates",
    "Marine decking"
],
  keywords: "ms chequered plate supplier pune, tread plate dealer india, anti-slip plate pune, diamond plate supplier, ms floor plate",
  relatedProducts: [
    {
        "name": "MS Sheet",
        "slug": "ms-sheet",
        "img": "/img/MS-Sheet.jpg"
    },
    {
        "name": "MS Galvanised Sheets",
        "slug": "ms-galvanised-sheets",
        "img": "/img/Galvanised-Sheets.jpg"
    },
    {
        "name": "MS Angles",
        "slug": "ms-angles",
        "img": "/img/MS-Angles.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
