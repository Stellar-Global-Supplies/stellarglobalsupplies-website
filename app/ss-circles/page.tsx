import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ss-circles",
  name: "SS Circles",
  category: "Stainless Steel",
  img: "/img/SS-Circles.jpg",
  tagline: "SS Circle Supplier in Pune",
  headline: "SS Circles — Stainless Steel Circle Supplier in Pune",
  desc: "Precision-cut stainless steel circles for flanges, utensils, pressure vessel blanks, and decorative purposes. Grade 304 and 202 standard.",
  longDesc: `Precision-cut stainless steel circles are used as blanks for cookware, pressure vessel flanges, water tank covers, and decorative applications. Available in grade 202, 304, and 316 with laser or plasma cutting for clean edges. Custom diameters are our strength — tell us your spec and we'll deliver from Pune.`,
  specs: [
    [
        "Grade",
        "SS 202, SS 304, SS 316"
    ],
    [
        "Diameter",
        "50 mm to 1500 mm"
    ],
    [
        "Thickness",
        "0.6 mm to 10 mm"
    ],
    [
        "Finish",
        "2B / Mirror / BA"
    ],
    [
        "Cutting",
        "Laser / Plasma cut"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Cookware & utensils",
    "Pressure vessel blanks",
    "Flange fabrication",
    "Decorative panels",
    "Water tank tops"
],
  keywords: "ss circle supplier pune, stainless steel circle pune, ss blank supplier india, grade 304 circle dealer, ss disc supplier pune",
  relatedProducts: [
    {
        "name": "SS Sheets",
        "slug": "ss-sheets",
        "img": "/img/SS-Sheets.jpg"
    },
    {
        "name": "SS Flats",
        "slug": "ss-flats",
        "img": "/img/SS-Flats.jpg"
    },
    {
        "name": "SS Round Bars",
        "slug": "ss-round-bars",
        "img": "/img/SS-Round-Bars.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
