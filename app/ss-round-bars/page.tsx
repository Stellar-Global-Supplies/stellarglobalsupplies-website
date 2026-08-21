import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ss-round-bars",
  name: "SS Round Bars",
  category: "Stainless Steel",
  img: "/img/SS-Round-Bars.jpg",
  tagline: "SS Round Bar Supplier in Pune",
  headline: "SS Round Bars — Stainless Steel Rod Supplier in Pune",
  desc: "Solid stainless steel round bars for machining, shaft fabrication, and industrial tooling. Grade 304, 316 and 303 free-machining grades available.",
  longDesc: `Stainless steel round bars are the primary input material for CNC-machined components, shafts, spindles, and valve bodies. Available in grade 303 (free-machining), 304, and 316L with surface conditions ranging from hot-rolled black to bright drawn and centreless ground. Tight tolerances available on request.`,
  specs: [
    [
        "Grade",
        "SS 303, SS 304, SS 316, SS 316L"
    ],
    [
        "Diameter",
        "6 mm to 300 mm"
    ],
    [
        "Condition",
        "Hot Rolled, Cold Drawn, Peeled"
    ],
    [
        "Finish",
        "Black / Bright / Centreless Ground"
    ],
    [
        "Tolerance",
        "h9, h11 as required"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "CNC turning components",
    "Shaft & spindle machining",
    "Valve bodies",
    "Pump shafts",
    "Fastener blanks"
],
  keywords: "ss round bar supplier pune, stainless steel rod pune, grade 304 bar dealer, ss 316 round bar india, bright bar supplier pune",
  relatedProducts: [
    {
        "name": "SS Round Pipe",
        "slug": "ss-round-pipe",
        "img": "/img/SS-Round-Pipe.jpg"
    },
    {
        "name": "SS Flats",
        "slug": "ss-flats",
        "img": "/img/SS-Flats.jpg"
    },
    {
        "name": "SS Channels",
        "slug": "ss-channels",
        "img": "/img/SS-Channels.jpg"
    }
],
  faqs: [
    {
        "q": "What is the difference between SS 303 and SS 304 round bar?",
        "a": "SS 303 is a free-machining grade with added sulfur for improved chip breakage on CNC lathes \u2014 ideal for high-volume turned parts. SS 304 has better corrosion resistance and weldability but machines slightly slower. For non-welded machined parts, 303 is the preferred choice."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
