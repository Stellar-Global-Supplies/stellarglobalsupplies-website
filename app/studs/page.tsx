import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "studs",
  name: "Studs",
  category: "Industrial Fasteners",
  img: "/img/Studs.jpg",
  tagline: "Threaded Stud Supplier in Pune",
  headline: "Studs — Threaded Stud Supplier in Pune",
  desc: "Fully threaded and double-end threaded studs for high-load structural and mechanical assemblies. Available in MS, SS 304, and SS 316 grades.",
  longDesc: `Threaded studs in DIN 975 (fully threaded) and DIN 938/939 (double-end) are used in high-load structural and mechanical joints — flange connections, pressure vessels, and engine mountings. Available in grade 4.8, 8.8, SS 304, and SS 316 with metric and UNC/UNF thread forms in lengths up to 3 m.`,
  specs: [
    [
        "Thread",
        "M6 to M64, UNC/UNF available"
    ],
    [
        "Type",
        "Fully Threaded / Double-End"
    ],
    [
        "Material",
        "Grade 4.8, 8.8, SS 304, SS 316"
    ],
    [
        "Standard",
        "DIN 975, DIN 938, DIN 939"
    ],
    [
        "Length",
        "Up to 3 m / custom"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Flange joints",
    "Pressure vessels",
    "Engine mounts",
    "Bridge bearings",
    "Industrial machinery"
],
  keywords: "threaded stud supplier pune, din 975 stud dealer india, stud bolt supplier pune, double end stud india, fully threaded rod pune",
  relatedProducts: [
    {
        "name": "Hex Bolts",
        "slug": "hex-bolts",
        "img": "/img/Hex-Bolts.jpg"
    },
    {
        "name": "Allen Bolts",
        "slug": "allen-bolts",
        "img": "/img/Allen-Bolts.jpg"
    },
    {
        "name": "Nylock Nuts",
        "slug": "nylock-nuts",
        "img": "/img/Nylock-Nuts.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
