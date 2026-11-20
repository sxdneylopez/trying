// makeup_data.js - the makeup catalog for the browsing pages (Sydney)
// To add a product: copy one block in PRODUCTS, change the fields, and put the photo in assets/makeup-products/.
// "type" has to match one of the keys in TYPES below.

// Line-art icons (64x64) for the type tiles, drawn to match the black outline icons in the Figma
const ICONS = {
  eyes: '<path d="M6 32c8-13 18-18 26-18s18 5 26 18c-8 13-18 18-26 18S14 45 6 32z"/><circle cx="32" cy="32" r="9"/><circle cx="32" cy="32" r="3" fill="#000"/><path d="M32 6v4M16 12l2 3M48 12l-2 3"/>',
  lips: '<path d="M5 32c7-7 12-10 17-10 4 0 7 2 10 4 3-2 6-4 10-4 5 0 10 3 17 10-7 11-17 18-27 18S12 43 5 32z"/><path d="M5 32c9 3 18 4 27 4s18-1 27-4"/>',
  brows: '<path d="M6 40c6-14 20-22 34-20 8 1 14 5 18 10-9-5-18-6-27-3-9 3-17 7-25 13z"/><path d="M18 36l3-6M26 33l3-7M34 31l3-6M42 29l3-5"/>',
  blush: '<circle cx="32" cy="34" r="22"/><circle cx="32" cy="34" r="14"/><path d="M24 28c4-4 12-4 16 0M22 38c6 6 14 6 20 0"/><path d="M44 8l-9 12"/>',
  foundation: '<rect x="20" y="4" width="24" height="16" rx="2" fill="#000"/><path d="M18 20h28v36a3 3 0 0 1-3 3H21a3 3 0 0 1-3-3z"/><path d="M24 30h16M24 38h16" />',
  powders: '<ellipse cx="32" cy="42" rx="26" ry="14"/><path d="M6 42v-6c0-7 12-12 26-12s26 5 26 12v6"/><ellipse cx="32" cy="36" rx="16" ry="6"/><path d="M14 14c4-6 12-9 18-9s14 3 18 9"/>',
  skincare: '<rect x="22" y="3" width="20" height="9" rx="2" fill="#000"/><path d="M24 12h16v8l6 8v28a3 3 0 0 1-3 3H21a3 3 0 0 1-3-3V28l6-8z"/><path d="M26 36h12M26 44h12"/>',
  makeup: '<rect x="8" y="30" width="14" height="28" rx="2"/><path d="M10 30V16c0-6 10-6 10 0v14"/><circle cx="43" cy="39" r="16"/><circle cx="43" cy="39" r="9"/><path d="M36 33l14 12"/>'
};

// Wraps the inner paths above in an svg tag
function icon(name) {
  return '<svg viewBox="0 0 64 64" fill="none" stroke="#000" stroke-width="2.5" ' +
         'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
}

// Order matches the Figma "Makeup" screen
const TYPES = [
  { key: "eyes",       label: "Eyes" },
  { key: "lips",       label: "Lips" },
  { key: "brows",      label: "Brows" },
  { key: "blush",      label: "Blush" },
  { key: "foundation", label: "Foundation" },
  { key: "powders",    label: "Powders" }
];

// Fields:
//   retailer : "Sephora" or "Ulta" (shown on the photo and used by the store chips)
//   price    : USD number, or null if not confirmed (the price line is then hidden)
//   rating / reviews : same numbers the product detail page shows
//   page     : the product detail page in the repo (products/...). Clicking the card opens it.
//              Products without a page open the retailer's site in a new tab instead.
//   img      : photo file in assets/makeup-products/ (path starts with ../assets/ because this file is used from browsing/)
//   sku      : Ulta product number. Ulta photos are linked straight from Ulta's image server (not re-hosted).
//   url      : direct retailer link; if left out, "Shop at ..." opens a search for the product.
// Prices change often, so the retailer page is the source of truth.

// Ulta's product image address from a product number
function ultaImg(sku) { return "https://media.ultainc.com/i/ulta/" + sku + "?w=400&h=400&fmt=auto"; }

// Folders (relative to the browsing/ pages)
const PHOTOS = "../assets/makeup-products/";
const PAGES  = "../products/";

const PRODUCTS = [
  // ---- Foundation: every photo in assets/makeup-products/ that has a detail page ----
  { id: "mac-nc50", type: "foundation", retailer: "Ulta", brand: "MAC",
    name: "Studio Fix Fluid SPF15 24HR Matte Foundation + Oil Control", price: 39.00, rating: 4, reviews: "4.2K",
    tags: ["Cruelty-Free"], img: PHOTOS + "mac_nc50.png", page: PAGES + "product_macnc50_details.html",
    url: "https://www.ulta.com/p/studio-fix-fluid-spf15-24hr-matte-foundation-oil-control-pimprod2044825?sku=2622182" },
  { id: "fenty-185", type: "foundation", retailer: "Sephora", brand: "Fenty Beauty",
    name: "Pro Filt'r Soft Matte Longwear Foundation - 185", price: 40.00, rating: 4, reviews: "9.8K",
    img: PHOTOS + "fenty_185.png", page: PAGES + "product_fenty185_details.html" },
  { id: "fenty-100", type: "foundation", retailer: "Sephora", brand: "Fenty Beauty",
    name: "Pro Filt'r Soft Matte Longwear Liquid Foundation - 100", price: 24.00, rating: 4, reviews: "17.4K",
    tags: ["Cruelty-Free"], img: PHOTOS + "fenty_100.png", page: PAGES + "product_fenty100_details.html",
    url: "https://www.sephora.com/product/pro-filtr-soft-matte-longwear-foundation-P87985432" },
  { id: "fenty-310", type: "foundation", retailer: "Sephora", brand: "Fenty Beauty",
    name: "Pro Filt'r Soft Matte Longwear Foundation - 310", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "fenty_foundation.png", page: PAGES + "product_fentyfoundation_details.html" },
  { id: "fenty-330", type: "foundation", retailer: "Sephora", brand: "Fenty Beauty",
    name: "Pro Filt'r Soft Matte Longwear Foundation - 330", price: 24.00, rating: 2, reviews: "3K",
    img: PHOTOS + "fenty_330.png", page: PAGES + "product_fenty330_details.html" },
  { id: "fenty-450", type: "foundation", retailer: "Sephora", brand: "Fenty Beauty",
    name: "Pro Filt'r Soft Matte Longwear Foundation - 450", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "fenty_450.png", page: PAGES + "product_fenty450_details.html" },
  { id: "mac-nc40", type: "foundation", retailer: "Ulta", brand: "MAC",
    name: "Foundation - NC40", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "mac_foundation.png", page: PAGES + "product_macfoundation_details.html" },
  { id: "mac-n11", type: "foundation", retailer: "Ulta", brand: "MAC",
    name: "Foundation - N11", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "mac_n11.png", page: PAGES + "product_macn11_details.html" },
  { id: "mac-nc20", type: "foundation", retailer: "Ulta", brand: "MAC",
    name: "Foundation - NC20", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "mac_nc20.png", page: PAGES + "product_macnc20_details.html" },
  { id: "mac-nc45", type: "foundation", retailer: "Ulta", brand: "MAC",
    name: "Studio Radiance Foundation - NC45", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "mac_nc45.png", page: PAGES + "product_macnc45_details.html" },
  { id: "nars-oslo", type: "foundation", retailer: "Sephora", brand: "NARS",
    name: "Light Reflecting Foundation - Oslo", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "nars_oslo.png", page: PAGES + "product_narsoslo_details.html" },
  { id: "nars-manaus", type: "foundation", retailer: "Sephora", brand: "NARS",
    name: "Light Reflecting Foundation - Manaus", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "nars_manaus.png", page: PAGES + "product_narsmanaus_details.html" },
  { id: "nars-fiji", type: "foundation", retailer: "Sephora", brand: "NARS",
    name: "Light Reflecting Foundation - Fiji", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "nars_fiji.png", page: PAGES + "product_narsfiji_details.html" },
  { id: "nars-barcelona", type: "foundation", retailer: "Ulta", brand: "NARS",
    name: "Light Reflecting Foundation - Barcelona", price: 24.00, rating: 2, reviews: "3K",
    tags: ["Cruelty-Free"], img: PHOTOS + "nars_barcelona.png", page: PAGES + "product_narsbarcelona_details.html" },
  // Photo is in the repo but there is no detail page for it yet, so this card opens Sephora
  { id: "nars-light-reflecting", type: "foundation", retailer: "Sephora", brand: "NARS",
    name: "Light Reflecting Foundation", price: 55.00, rating: 4, reviews: "3.1K",
    img: PHOTOS + "nars_foundation.png" },
  // More foundations from Ulta (photos load from Ulta)
  { id: "dior-forever-skin-glow", type: "foundation", retailer: "Ulta", brand: "Dior",
    name: "Forever Skin Glow Foundation", price: 60.00, rating: 4.7, reviews: "1.1K", sku: "2652364",
    url: "https://www.ulta.com/p/forever-skin-glow-foundation-pimprod2057578?sku=2652364" },
  { id: "elf-halo-glow-filter", type: "foundation", retailer: "Ulta", brand: "e.l.f. Cosmetics",
    name: "Halo Glow Liquid Filter", price: 15.00, rating: 4.5, reviews: "10K", sku: "2604924",
    tags: ["Cruelty-Free", "Vegan"],
    url: "https://www.ulta.com/p/halo-glow-liquid-filter-pimprod2036949" },
  { id: "it-cosmetics-cc-cream", type: "foundation", retailer: "Ulta", brand: "IT Cosmetics",
    name: "CC+ Cream Foundation with SPF 50+", price: 39.00, rating: 4.3, reviews: "22K", sku: "2533844",
    url: "https://www.ulta.com/p/cc-cream-with-spf-50-xlsImpprod5770257?sku=2533844" },

  // ---- Powders ----
  { id: "onesize-blurring-powder", type: "powders", retailer: "Sephora", brand: "ONE/SIZE by Patrick Starr",
    name: "Ultimate Blurring Setting Powder", price: 36.00, rating: 4, reviews: "2.7K",
    img: PHOTOS + "onesize-powder.png" },
  { id: "laura-mercier-translucent", type: "powders", retailer: "Sephora", brand: "Laura Mercier",
    name: "Translucent Loose Setting Powder", price: null },
  { id: "huda-easy-bake", type: "powders", retailer: "Sephora", brand: "HUDA BEAUTY",
    name: "Easy Bake Loose Baking & Setting Powder", price: null },
  { id: "fenty-instant-retouch", type: "powders", retailer: "Sephora", brand: "Fenty Beauty by Rihanna",
    name: "Pro Filt'r Instant Retouch Setting Powder", price: null },

  // ---- Lips ----
  { id: "morphe-signature-lip-pencil", type: "lips", retailer: "Ulta", brand: "Morphe",
    name: "Signature Lip Pencil", price: 7.00, rating: 4.8, reviews: "790", sku: "2646219",
    url: "https://www.ulta.com/p/signature-lip-pencil-pimprod2054243?sku=2646219" },
  { id: "elf-glow-reviver-lip-balm", type: "lips", retailer: "Ulta", brand: "e.l.f. Cosmetics",
    name: "Glow Reviver Melting Lip Balm", price: 9.00, rating: 4.7, reviews: "3.1K",
    tags: ["Cruelty-Free", "Vegan"], img: PHOTOS + "elf-lip-balm.png" },
  { id: "rare-lip-souffle", type: "lips", retailer: "Sephora", brand: "Rare Beauty by Selena Gomez",
    name: "Lip Soufflé Matte Cream Lipstick", price: 20.00, tags: ["Cruelty-Free", "Vegan"],
    url: "https://sephora.com/product/rare-beauty-by-selena-gomez-lip-souffle-matte-cream-lipstick-P87987897" },
  { id: "fenty-gloss-bomb", type: "lips", retailer: "Sephora", brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Universal Lip Luminizer", price: 21.00 },
  { id: "rare-tinted-lip-oil", type: "lips", retailer: "Sephora", brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Tinted Lip Oil", price: 24.00 },
  { id: "fenty-icon-velvet", type: "lips", retailer: "Sephora", brand: "Fenty Beauty by Rihanna",
    name: "Fenty Icon Velvet Liquid Lipstick", price: 29.00 },

  // ---- Eyes ----
  { id: "maybelline-sky-high", type: "eyes", retailer: "Ulta", brand: "Maybelline",
    name: "Lash Sensational Sky High Mascara", price: 13.99, rating: 4.5, reviews: "11.9K",
    img: PHOTOS + "maybelline-sky-high.png",
    url: "https://www.ulta.com/p/lash-sensational-sky-high-mascara-pimprod2020260" },
  { id: "tarte-tartelette-tubing", type: "eyes", retailer: "Ulta", brand: "Tarte",
    name: "Tartelette Tubing Mascara", price: 28.00, rating: 4.1, reviews: "1.9K", sku: "2596644",
    url: "https://www.ulta.com/p/tartelette-tubing-mascara-pimprod2033171?sku=2596644" },
  { id: "too-faced-better-than-sex", type: "eyes", retailer: "Sephora", brand: "Too Faced",
    name: "Better Than Sex Mascara", price: null },
  { id: "fenty-flypencil", type: "eyes", retailer: "Sephora", brand: "Fenty Beauty by Rihanna",
    name: "Flypencil Longwear Pencil Eyeliner", price: null },

  // ---- Brows ----
  { id: "benefit-gimme-brow", type: "brows", retailer: "Sephora", brand: "Benefit Cosmetics",
    name: "Gimme Brow+ Volumizing Eyebrow Gel", price: null },
  { id: "glossier-boy-brow", type: "brows", retailer: "Sephora", brand: "Glossier",
    name: "Boy Brow", price: null },
  { id: "rare-brow-harmony", type: "brows", retailer: "Sephora", brand: "Rare Beauty by Selena Gomez",
    name: "Brow Harmony Pencil & Gel", price: null },

  // ---- Blush ----
  { id: "rare-soft-pinch-liquid-blush", type: "blush", retailer: "Ulta", brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Liquid Blush", price: 25.00, rating: 4.9, reviews: "3.6K", sku: "2647882",
    url: "https://www.ulta.com/p/soft-pinch-liquid-blush-pimprod2055883?sku=2647882" },
  { id: "morphe-cheek-thrills", type: "blush", retailer: "Ulta", brand: "Morphe",
    name: "Cheek Thrills Multi-Finish Face Trio", price: 19.00, rating: 4.8, reviews: "2.1K",
    img: PHOTOS + "morphe-cheek-thrills.png",
    url: "https://www.ulta.com/p/cheek-thrills-multi-finish-face-trio-pimprod2051122?sku=2638343" },
  { id: "tower28-getset-blush", type: "blush", retailer: "Sephora", brand: "Tower 28 Beauty",
    name: "GetSet Blur + Set Matte Powder Blush", price: 22.00 },
  { id: "nars-orgasm-blush", type: "blush", retailer: "Sephora", brand: "NARS",
    name: "Blush in Orgasm", price: null }
];

// A product with a sku and no photo of its own gets its photo from Ulta
PRODUCTS.forEach(p => { if (!p.img && p.sku) p.img = ultaImg(p.sku); });

// Where "Shop at ..." goes: the direct url if we have one, otherwise a search at that store.
function shopUrl(p) {
  if (p.url) return p.url;
  const q = encodeURIComponent(p.brand + " " + p.name);
  return p.retailer === "Ulta"
    ? "https://www.ulta.com/shop/search?search=" + q
    : "https://www.sephora.com/search?keyword=" + q;
}

// Highlights the Browse icon in the shared navbar once it has loaded (the navbar is added by navigation-bar/script.js)
function highlightBrowseIcon() {
  const box = document.getElementById("navbar-container");
  if (!box) return;
  const mark = () => {
    const link = box.querySelector('a[aria-label="Browse products"]');
    if (link) link.parentElement.classList.add("active");
  };
  mark();
  new MutationObserver(mark).observe(box, { childList: true, subtree: true });
}
