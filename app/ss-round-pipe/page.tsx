import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ss-round-pipe",
  name: "SS Round Pipe",
  category: "Stainless Steel",
  img: "/img/SS-Round-Pipe.jpg",
  tagline: "SS Round Pipe Supplier in Pune",
  headline: "SS Round Pipes — Stainless Steel Pipe Supplier in Pune",
  desc: "Seamless and welded stainless steel pipes in grade 304, 316 and 316L. Available in schedule 5S, 10S, 40S for process piping and structural use.",
  longDesc: `Seamless and welded stainless steel pipes in grade 304 and 316L for process piping, pharmaceutical sanitary lines, and handrail fabrication. We supply in schedule 5S through 80S with 2B and bead-blast finish. Custom cut lengths and bevelled ends available from our Pune facility.`,
  specs: [
    [
        "Grade",
        "SS 304, SS 316, SS 316L"
    ],
    [
        "OD Range",
        "6 mm to 600 mm"
    ],
    [
        "Schedule",
        "Sch 5S / 10S / 40S / 80S"
    ],
    [
        "Type",
        "Seamless & ERW Welded"
    ],
    [
        "Finish",
        "2B, No.1, Mirror, Bead Blast"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Process piping",
    "Pharmaceutical plants",
    "Food & dairy lines",
    "Handrails",
    "Marine piping"
],
  keywords: "ss round pipe supplier pune, stainless steel pipe pune, grade 304 pipe dealer, ss 316 pipe india, seamless ss pipe supplier",
  relatedProducts: [
    {
        "name": "SS Round Bars",
        "slug": "ss-round-bars",
        "img": "/img/SS-Round-Bars.jpg"
    },
    {
        "name": "SS Channels",
        "slug": "ss-channels",
        "img": "/img/SS-Channels.jpg"
    },
    {
        "name": "SS Sheets",
        "slug": "ss-sheets",
        "img": "/img/SS-Sheets.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
