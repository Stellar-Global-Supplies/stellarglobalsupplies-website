/** @type {import('next-sitemap').IConfig} */
const PRODUCT_SLUGS = [
  // Mild Steel
  "ms-angles","ms-flats","ms-round-pipes","ms-sheet",
  "ms-square-tubes","ms-channels","ms-chequered-plate","ms-galvanised-sheets",
  // Stainless Steel
  "ss-channels","ss-circles","ss-flats","ss-round-bars","ss-round-pipe","ss-sheets",
  // Locking & Fastening
  "brass-hex-spacers","km-lock-nuts","mb-lock-washer",
  "external-circlip","internal-circlip","dowel-pins","studs",
  "nylock-nuts","castle-nuts","grub-screws","spring-dowel-pins",
  "allen-csk-bolts","hex-bolts","allen-bolts",
];

module.exports = {
  siteUrl: "https://stellarglobalsupplies.com",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  outDir: "./out",
  exclude: ["/404"],
  additionalPaths: async (config) => {
    const promo = [
      "ms-nylock-nut",
      "internal-circlips-din472",
      "external-circlip-din471",
      "nordlock-washers",
    ];
    const all = [...PRODUCT_SLUGS, ...promo];
    return all.map((slug) => ({
      loc: `/${slug}`,
      changefreq: "monthly",
      priority: promo.includes(slug) ? 0.90 : 0.85,
      lastmod: new Date().toISOString(),
    }));
  },
};
