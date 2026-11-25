import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ms-flats",
  name: "MS Flats",
  category: "Mild Steel",
  img: "/img/MS-Flats.jpg",
  tagline: "MS Flat Bar Supplier in Pune",
  headline: "MS Flat Bars Supplier in Pune | IS 2062 E250 Steel Flats",
  desc: "Buy MS flat bars in Pune: IS 2062 E250 mild steel flats, 12–300 mm widths and 3–50 mm thicknesses. 6 m lengths or cut-to-size options; request a B2B quote.",
  longDesc: `MS flat bars (mild steel flats) are steel sections used for fabrication, construction, machine components and industrial equipment. Stellar Global Supplies lists IS 2062 E250 grade MS flats in widths from 12 mm to 300 mm and thicknesses from 3 mm to 50 mm. Standard 6 m lengths and cut-to-size requirements can be discussed when requesting a quote.\n\nWhen sourcing MS flat bars, specify width, thickness, length, grade, quantity and any drawing or fabrication requirements. Confirm the material specification and availability before ordering. These details help buyers and fabrication teams shortlist the correct section and reduce quote clarification cycles.`,
  specs: [
    [
        "Grade",
        "IS 2062, E250"
    ],
    [
        "Width Range",
        "12 mm to 300 mm"
    ],
    [
        "Thickness",
        "3 mm to 50 mm"
    ],
    [
        "Length",
        "Standard 6 m or cut-to-size"
    ],
    [
        "Surface",
        "Mill Finish"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Fabrication brackets",
    "Machine bases",
    "Grating bars",
    "Architectural frameworks",
    "Agricultural equipment"
],
  keywords: "ms flat bar supplier pune, MS flats Pune, mild steel flat bars, IS 2062 E250 flats, MS flat bar sizes, MS flat steel supplier India, cut to size MS flats",
  relatedProducts: [
    {
        "name": "MS Angles",
        "slug": "ms-angles",
        "img": "/img/MS-Angles.jpg"
    },
    {
        "name": "MS Channels",
        "slug": "ms-channels",
        "img": "/img/Channels.jpg"
    },
    {
        "name": "MS Square Tubes",
        "slug": "ms-square-tubes",
        "img": "/img/Square-Tubes.jpg"
    }
],
  faqs: [
    {
        "q": "Can MS flats be supplied in custom widths?",
        "a": "Yes, we offer custom widths via slitting from standard sheets or sourcing from our mill partners. Contact us with your exact requirement."
    },
    {
        "q": "What is the minimum order for MS flats?",
        "a": "We cater to both small and bulk orders. WhatsApp us your requirement and we will confirm the minimum quantity and pricing."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
