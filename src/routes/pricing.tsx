import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PriceList, type PriceItem } from "@/components/PriceList";
import { PageHeroBanner } from "@/components/PageHeroBanner";


export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — K2 Beauty Salon | Hair, Skin, Body & Bridal" },
      { name: "description", content: "Transparent pricing for all services at K2 Beauty Salon — facials, hair, bridal, nail care and more." },
    ],
  }),
  component: PricingPage,
});

const tabs = ["Haircare", "Skincare", "Bodycare", "Bridal", "Nail Care", "Packages"] as const;
type Tab = (typeof tabs)[number];

interface Package {
  id: string;
  name: string;
  items: { name: string; price: number }[];
  total: number;
  discountDesc: string;
  discountedPrice: number;
}

const packagesList: Package[] = [
  {
    id: "pkg-1",
    name: "PACKAGE-1",
    items: [
      { name: "Fruit Facial", price: 1100 },
      { name: "Detan", price: 500 },
      { name: "Threading", price: 100 }
    ],
    total: 1700,
    discountDesc: "After 10% Discount",
    discountedPrice: 1530
  },
  {
    id: "pkg-2",
    name: "PACKAGE-2",
    items: [
      { name: "Oxy Facial", price: 1800 },
      { name: "Detan", price: 500 },
      { name: "Waxing", price: 800 },
      { name: "Threading", price: 100 }
    ],
    total: 3200,
    discountDesc: "After 10% Discount",
    discountedPrice: 2880
  },
  {
    id: "pkg-3",
    name: "PACKAGE-3",
    items: [
      { name: "Anti Pigmentation Facial", price: 2500 },
      { name: "Detan", price: 500 },
      { name: "Threading", price: 100 }
    ],
    total: 3100,
    discountDesc: "After 10% Discount",
    discountedPrice: 2790
  },
  {
    id: "pkg-4",
    name: "PACKAGE-4",
    items: [
      { name: "Korean Glass Facial", price: 3500 },
      { name: "Detan", price: 500 },
      { name: "Threading", price: 100 }
    ],
    total: 4100,
    discountDesc: "After 10% Discount",
    discountedPrice: 3690
  },
  {
    id: "pkg-5",
    name: "PACKAGE-5",
    items: [
      { name: "Advanced Skin Miracle Facial", price: 3000 },
      { name: "Detan", price: 500 },
      { name: "Threading", price: 100 }
    ],
    total: 3600,
    discountDesc: "After 10% Discount",
    discountedPrice: 3240
  },
  {
    id: "pkg-6",
    name: "PACKAGE-6",
    items: [
      { name: "Natural Gold Facial", price: 2000 },
      { name: "Detan", price: 500 },
      { name: "Waxing", price: 1100 },
      { name: "Detan Spa Pedicure", price: 900 },
      { name: "Threading", price: 100 }
    ],
    total: 4600,
    discountDesc: "After 10% Discount",
    discountedPrice: 4140
  },
  {
    id: "pkg-7",
    name: "PACKAGE-7",
    items: [
      { name: "O3+ Detan Facial", price: 4500 },
      { name: "Protein Hair Spa", price: 2500 },
      { name: "Crystal Pedicure", price: 1500 },
      { name: "Waxing", price: 1100 },
      { name: "Threading", price: 100 }
    ],
    total: 9200,
    discountDesc: "After 15% Discount",
    discountedPrice: 7820
  },
  {
    id: "pkg-8",
    name: "PACKAGE-8",
    items: [
      { name: "Protein Hair Spa", price: 2500 },
      { name: "Crystal Pedicure", price: 1500 },
      { name: "Crystal Manicure", price: 1200 }
    ],
    total: 5200,
    discountDesc: "After 15% Discount",
    discountedPrice: 4420
  },
  {
    id: "pkg-9",
    name: "PACKAGE-9",
    items: [
      { name: "Oil Massage Steam Wash", price: 1300 },
      { name: "Detan Spa Pedicure", price: 900 },
      { name: "Detan Spa Manicure", price: 750 },
      { name: "Pearl/FruitFacial/Detan", price: 1600 },
      { name: "Waxing Fullarms/Underarms", price: 500 },
      { name: "Threading", price: 100 }
    ],
    total: 5150,
    discountDesc: "After 10% Discount",
    discountedPrice: 4635
  },
  {
    id: "pkg-10",
    name: "PACKAGE-10",
    items: [
      { name: "Keretin Hair Spa", price: 2000 },
      { name: "Crystal Pedicure", price: 1500 },
      { name: "Threading", price: 100 }
    ],
    total: 3600,
    discountDesc: "After 10% Discount",
    discountedPrice: 3240
  },
  {
    id: "pkg-11",
    name: "PACKAGE-11",
    items: [
      { name: "Cashmara Facial/Detan", price: 2500 },
      { name: "Oil Massage", price: 1300 },
      { name: "Spa Pedicure", price: 900 },
      { name: "Threading", price: 100 }
    ],
    total: 4800,
    discountDesc: "After 15% Discount",
    discountedPrice: 4080
  },
  {
    id: "pkg-bridal",
    name: "BRIDAL PACKAGE",
    items: [
      { name: "Bio Whitening Bridal Facial", price: 5000 },
      { name: "Keretin Hair Spa", price: 2000 },
      { name: "Crystal Pedicure", price: 1500 },
      { name: "Crystal Manicure", price: 1200 },
      { name: "Full(Hands,Legs,Underarms):Wax", price: 1100 },
      { name: "Bleach", price: 1500 },
      { name: "Threading", price: 100 }
    ],
    total: 12400,
    discountDesc: "After 20% Discount",
    discountedPrice: 9920
  }
];

const facialLuxury: PriceItem[] = [
  { name: "Blanch Facial", price: "₹6,999" },
  { name: "Upendice Facial", price: "₹6,999" },
  { name: "Sensi Care Facial", price: "₹6,999" },
];
const facialPremium: PriceItem[] = [
  { name: "Papaya & Marshmallow", price: "₹4,999" },
  { name: "Ginger & Walnut", price: "₹4,999" },
  { name: "Hydra Boost Facial", price: "₹4,999" },
  { name: "Quinoa Whitening Facial", price: "₹4,499" },
  { name: "Avacado Glow & Shine Facial", price: "₹3,999" },
  { name: "Skin Miracle Glutathione", price: "₹3,999" },
];
const facialClassic: PriceItem[] = [
  { name: "Ash Pumpkin", price: "₹3,500" },
  { name: "Raw Mango", price: "₹3,500" },
  { name: "Organic Facial 0% Chemical", price: "₹3,500" },
  { name: "Anti Ageing Facial", price: "₹2,500" },
  { name: "Skin Whitening Facial", price: "₹2,200" },
];
const facialBasic: PriceItem[] = [
  { name: "VLCC Gold Facial", price: "₹1,800" },
  { name: "Aroma Pearl Facial", price: "₹1,500" },
  { name: "Aroma Fruit Facial", price: "₹1,500" },
  { name: "Detan Cleanup", price: "₹1,400" },
  { name: "Aelovera Facial", price: "₹1,000" },
  { name: "Normal Cleanup", price: "₹900" },
];

const hairCuts: PriceItem[] = [
  { name: "Layer Cut", price: "₹950+", note: "With Wash ₹1,500+ · Without ₹950" },
  { name: "Textured Layer", price: "₹950+", note: "With Wash ₹1,500+ · Without ₹950" },
  { name: "Wolf Cut", price: "₹950+", note: "With Wash ₹1,500+ · Without ₹950" },
  { name: "Butterfly Cut", price: "₹950+", note: "With Wash ₹1,500+ · Without ₹950" },
  { name: "U Cut", price: "₹600+", note: "With Wash ₹1,200+ · Without ₹600" },
  { name: "One Length", price: "₹500+", note: "With Wash ₹1,100+ · Without ₹500" },
  { name: "Boy Cut", price: "₹600+", note: "With Wash ₹1,100+ · Without ₹600" },
  { name: "Baby Hair Cut", price: "₹500+", note: "With Wash ₹1,100 · Without ₹500" },
  { name: "Curtain Bangs", price: "₹400", note: "Without Wash" },
  { name: "Side Bangs", price: "₹350", note: "Without Wash" },
  { name: "Front French", price: "₹300", note: "Without Wash" },
];
const hairSpa: PriceItem[] = [
  { name: "Amino Spa Treatment", price: "₹3,000+" },
  { name: "Botox Spa Treatment", price: "₹2,500+" },
  { name: "L'Oreal Spa Treatment", price: "₹1,800+" },
  { name: "Dandruff Treatment", price: "₹1,200+" },
  { name: "Dandruff Treatment with Spa", price: "₹2,000+" },
  { name: "Quick Spa", price: "₹1,200+" },
];
const hairWash: PriceItem[] = [
  { name: "Protein Treatment Wash", price: "₹800" },
  { name: "Sulphur Free Shampoo Wash", price: "₹800" },
  { name: "L'Oreal Shampoo Wash", price: "₹700" },
  { name: "Normal Hair Wash", price: "₹650" },
];

// ─── L'OREAL HAIR COLOR ───────────────────────────────────────────────────────
const hairColor: PriceItem[] = [
  { name: "Root Touch Up (Ammonia)", price: "₹1,500+" },
  { name: "Root Touch Up (Ammonia Free)", price: "₹1,600+" },
  { name: "Ammonia Each Tube", price: "₹2,500+" },
  { name: "Ammonia Free Each Tube", price: "₹2,700+" },
  { name: "Global Hair Color", price: "₹3,500+" },
  { name: "Crown Highlighting", price: "₹4,000+" },
  { name: "Ombré Highlighting", price: "₹4,999+" },
  { name: "Balayage Highlighting", price: "₹5,999+" },
  { name: "Advance Highlights with Global (Full Hair)", price: "₹7,999+" },
  { name: "Inova Oil Based Color (Root Touch Up)", price: "₹1,800+" },
];

const permanentStyle: PriceItem[] = [
  { name: "Botoplastia Treatment", price: "₹6,999+" },
  { name: "Keratin Treatment", price: "₹5,999+" },
  { name: "Hair Smoothening", price: "₹4,999+" },
  { name: "Hair Perming", price: "₹4,999+" },
  { name: "Smoothening / Touch Up", price: "₹3,999+" },
];

const hairSetting: PriceItem[] = [
  { name: "Ironing", price: "₹1,200+" },
  { name: "Thong Curls", price: "₹1,200+" },
  { name: "Crimping", price: "₹900+" },
  { name: "Curl Blow Dry", price: "₹900+" },
  { name: "Straight Blow Dry", price: "₹600+" },
];

const hairOilMassage: PriceItem[] = [
  { name: "Olive Oil Massage", price: "₹1,500+" },
  { name: "Almond Oil Massage", price: "₹1,500+" },
  { name: "Oil Massage (Egg Pack)", price: "₹1,300+" },
  { name: "Hair Oil Massage + Back Steam Wash", price: "₹1,200+" },
  { name: "Oil Massage (Without Wash)", price: "₹800+" },
];
// ─────────────────────────────────────────────────────────────────────────────

const bridal: PriceItem[] = [
  { name: "Make-up Outdoor", price: "₹15,000" },
  { name: "Make-up Indoor", price: "₹10,000" },
  { name: "Indoor Hair Do", price: "₹1,500+" },
  { name: "Indoor Saree Draping", price: "₹700+" },
  { name: "Outdoor Hair Do", price: "₹2,000+" },
  { name: "Outdoor Saree Draping", price: "₹1,000+" },
];

const nailCare: PriceItem[] = [
  { name: "Prescription Nail Extension Gel Polish", price: "₹2,000" },
  { name: "Gel Polish with Design", price: "₹2,500" },
  { name: "Natural Nails Gel Polish", price: "₹800" },
  { name: "Natural Nails Gel Polish with Design", price: "₹950" },
  { name: "Gel Polish Removal", price: "₹300" },
  { name: "Nail File and Polish", price: "₹200" },
];

import { waLink } from "@/lib/whatsapp";

const pedicures: PriceItem[] = [
  { name: "Mint Chip Pedicure", price: "₹2,999" },
  { name: "Alga Biscotti Pedicure", price: "₹2,999" },
  { name: "Crystal Jelly Pedicure", price: "₹2,000" },
  { name: "Spa Pedicure", price: "₹1,000" },
  { name: "Deluxe Pedicure", price: "₹750" },
  { name: "Normal Pedicure", price: "₹650" },
];

const manicures: PriceItem[] = [
  { name: "Mint Chip Manicure", price: "₹2,000" },
  { name: "Alga Biscotti Manicure", price: "₹2,000" },
  { name: "Crystal Jelly Manicure", price: "₹1,500" },
  { name: "Spa Manicure", price: "₹700" },
  { name: "Deluxe Manicure", price: "₹600" },
  { name: "Normal Manicure", price: "₹550" },
  { name: "Nail File & Polish", price: "₹200" },
];

const bleachDetan: PriceItem[] = [
  { name: "Oxy Bleach", price: "₹700" },
  { name: "Fruit Bleach", price: "₹600" },
  { name: "Fruit Detan", price: "₹500" },
  { name: "Under Arms Bleach", price: "₹300" },
  { name: "Full Legs Bleach", price: "₹1,000" },
  { name: "Half Legs Bleach", price: "₹500" },
  { name: "Full Arms & Under Arms Bleach", price: "₹600" },
  { name: "Full Front & Back Bleach", price: "₹600 / ₹600", note: "Front / Back" },
  { name: "Half Front & Back Bleach", price: "₹300 / ₹300", note: "Front / Back" },
  { name: "Feet Bleach", price: "₹200" },
];

interface WaxingItem {
  service: string;
  honey: string;
  rica: string;
  roller: string;
}

const waxingList: WaxingItem[] = [
  { service: "Full Arms", honey: "₹350", rica: "₹450", roller: "₹500" },
  { service: "3/4 Arms", honey: "₹300", rica: "₹400", roller: "₹450" },
  { service: "Under Arms", honey: "₹250", rica: "₹300", roller: "₹350" },
  { service: "Full Legs", honey: "₹700", rica: "₹900", roller: "₹1,000" },
  { service: "Half Legs", honey: "₹350", rica: "₹450", roller: "₹500" },
  { service: "Full Back", honey: "₹600", rica: "₹800", roller: "—" },
  { service: "Full Front", honey: "₹600", rica: "₹800", roller: "—" },
  { service: "Full Body", honey: "₹2,000", rica: "₹2,800", roller: "—" },
  { service: "Bum Wax", honey: "₹500", rica: "₹600", roller: "—" },
  { service: "Bikini Wax", honey: "₹1,200", rica: "₹1,500", roller: "—" },
];

// ─── BODY MASSAGE ────────────────────────────────────────────────────────────
const bodyMassage: PriceItem[] = [
  { name: "Body Massage with Coco Butter Cream", price: "₹2,000" },
  { name: "Full Body Scrub", price: "₹1,500" },
  { name: "Full Leg Massage (20 min)", price: "₹600" },
  { name: "Back Massage (20 min)", price: "₹500" },
  { name: "Back Scrub", price: "₹500" },
  { name: "Tummy Massage", price: "₹500" },
  { name: "Hand Massage (20 min)", price: "₹500" },
];

const threading: PriceItem[] = [
  { name: "Eyebrows", price: "₹60" },
  { name: "Upper Lips", price: "₹60" },
  { name: "Chin", price: "₹60" },
  { name: "Forehead", price: "₹60" },
  { name: "Full Face Threading", price: "₹600" },
];

const faceWaxing: PriceItem[] = [
  { name: "Full Face Waxing", price: "₹650 / ₹750", note: "Honey / Brazilian" },
  { name: "Side Wax", price: "₹150 / ₹250", note: "Honey / Brazilian" },
  { name: "Upper Lip Wax", price: "₹70 / ₹80", note: "Honey / Brazilian" },
  { name: "Chin Wax", price: "₹80 / ₹90", note: "Honey / Brazilian" },
  { name: "Feet Wax", price: "₹100", note: "Honey only" },
];
// ─────────────────────────────────────────────────────────────────────────────

function PricingPage() {
  const [tab, setTab] = useState<Tab>("Haircare");

  return (
    <>
      <PageHeroBanner
        eyebrow="Transparent Pricing"
        title="Our Service Menu"
        description="Premium beauty and hair experiences at honest, transparent pricing. Click or hover any service to book instantly via WhatsApp."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              tab === t
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-card border border-border text-foreground hover:border-primary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Haircare" && (
        <div className="space-y-10">
          {/* ─── L'OREAL HAIR COLOR ─── */}
          <div>
            <div className="text-center mb-8">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#B8893A] font-bold mb-2">Premium Color Services</span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">L'Oréal Hair Color</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <PriceList title="Hair Color Services" items={hairColor} />
              <PriceList title="Permanent Style" items={permanentStyle} />
            </div>
          </div>

          {/* ─── CUTS, SPA & WASH ─── */}
          <div className="grid md:grid-cols-2 gap-6">
            <PriceList title="Hair Cuts & Styling" items={hairCuts} />
            <div className="space-y-6">
              <PriceList title="Hair Spa Treatment" items={hairSpa} />
              <PriceList title="Hair Wash" items={hairWash} />
            </div>
          </div>

          {/* ─── SETTING & OIL MASSAGE ─── */}
          <div className="grid md:grid-cols-2 gap-6">
            <PriceList title="Hair Setting" items={hairSetting} />
            <PriceList title="Hair Oil Massage" items={hairOilMassage} />
          </div>
        </div>
      )}

      {tab === "Skincare" && (
        <div className="grid md:grid-cols-2 gap-6">
          <PriceList title="Luxury Facial" items={facialLuxury} />
          <PriceList title="Premium Facial" items={facialPremium} />
          <PriceList title="Classic Facial" items={facialClassic} />
          <PriceList title="Basic Facial / Cleanup" items={facialBasic} />
        </div>
      )}

      {tab === "Bodycare" && (
        <div className="space-y-10">
          <div className="grid md:grid-cols-2 gap-8">
            <PriceList title="Pedicure" items={pedicures} />
            <PriceList title="Manicure" items={manicures} />
          </div>

          {/* Waxing Table Card */}
          <div className="luxe-card p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Waxing Services
              </h3>
              <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
                Select a price cell to book on WhatsApp
              </span>
            </div>
            
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="p-4 font-semibold text-foreground text-sm">Service</th>
                    <th className="p-4 font-semibold text-[#B8893A] text-sm text-center">Honey Wax</th>
                    <th className="p-4 font-semibold text-[#B8893A] text-sm text-center">Rica Wax</th>
                    <th className="p-4 font-semibold text-[#B8893A] text-sm text-center">Roller Wax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {waxingList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">{item.service}</td>
                      
                      <td className="p-4 text-center">
                        {item.honey !== "—" ? (
                          <a
                            href={waLink(`I want to book ${item.service} Waxing (Honey: ${item.honey})`)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-3.5 py-1.5 rounded-full hover:bg-secondary text-[#B8893A] font-semibold transition-all"
                          >
                            {item.honey}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      
                      <td className="p-4 text-center">
                        {item.rica !== "—" ? (
                          <a
                            href={waLink(`I want to book ${item.service} Waxing (Rica: ${item.rica})`)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-3.5 py-1.5 rounded-full hover:bg-secondary text-[#B8893A] font-semibold transition-all"
                          >
                            {item.rica}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      
                      <td className="p-4 text-center">
                        {item.roller !== "—" ? (
                          <a
                            href={waLink(`I want to book ${item.service} Waxing (Roller: ${item.roller})`)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-3.5 py-1.5 rounded-full hover:bg-secondary text-[#B8893A] font-semibold transition-all"
                          >
                            {item.roller}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <PriceList title="Bleach & Detan" items={bleachDetan} />
            <div className="luxe-card p-6 md:p-8 flex flex-col justify-center items-center text-center bg-[#FFF8F2] border border-[#E8D8C3]/40">
              <span className="w-12 h-12 rounded-full bg-[#B8893A]/10 flex items-center justify-center mb-4 text-[#B8893A]">
                ✨
              </span>
              <h4 className="text-lg font-bold text-[#3B2A28] mb-2">Need a custom package?</h4>
              <p className="text-sm text-[#7A5A55]/90 max-w-sm mb-6">
                Consult with our stylists to create a tailored bridal, skin, or hair ritual package.
              </p>
              <a
                href={waLink("I want to inquire about custom beauty packages")}
                target="_blank"
                rel="noreferrer"
                className="bg-[#B8893A] hover:bg-[#8A6428] text-white font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors duration-300"
              >
                Inquire via WhatsApp
              </a>
            </div>
          </div>

          {/* ─── BODY MASSAGE & THREADING ─── */}
          <div className="grid md:grid-cols-2 gap-8">
            <PriceList title="Body Massage" items={bodyMassage} />
            <PriceList title="Threading" items={threading} />
          </div>

          {/* ─── FACE WAXING ─── */}
          <PriceList title="Face Waxing (Honey / Brazilian)" items={faceWaxing} />
        </div>
      )}

      {tab === "Bridal" && (
        <div className="max-w-2xl mx-auto">
          <PriceList title="Bridal Makeup" items={bridal} />
        </div>
      )}

      {tab === "Nail Care" && (
        <div className="max-w-2xl mx-auto">
          <PriceList title="Nail Care" items={nailCare} />
        </div>
      )}

      {tab === "Packages" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {packagesList.map((pkg) => (
            <div 
              key={pkg.id} 
              className="relative overflow-hidden rounded-[2rem] border border-[#B8893A]/30 p-6 md:p-8 flex flex-col justify-between min-h-[420px] transition-transform duration-500 hover:scale-[1.02] hover:shadow-elegant"
              style={{
                background: "linear-gradient(135deg, #3B2A28 0%, #261816 100%)",
                boxShadow: "0 15px 35px -5px rgba(38, 24, 22, 0.4)",
              }}
            >
              <div>
                {/* Package Header */}
                <div className="text-center pb-4 mb-6 border-b border-white/10">
                  <h3 className="font-display text-2xl tracking-widest text-[#D4AF7F] font-medium uppercase">
                    {pkg.name}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-3.5 text-[#FFF8F2]/90 text-sm">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-start gap-4">
                      <span className="font-body font-light text-left leading-normal">{item.name}</span>
                      <span className="font-mono text-[#D4AF7F] font-medium shrink-0">Rs. {item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Total & Discount Section */}
              <div className="mt-8 pt-4 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center text-xs text-[#FFF8F2]/60">
                  <span>Total Value</span>
                  <span className="font-mono line-through">Rs. {pkg.total}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-[#D4AF7F] font-semibold tracking-wider uppercase">
                    {pkg.discountDesc}
                  </span>
                  <span className="font-mono font-bold text-lg text-[#D4AF7F]">
                    Rs. {pkg.discountedPrice}
                  </span>
                </div>

                {/* Booking Button */}
                <a
                  href={waLink(`I want to book the ${pkg.name} (Rs. ${pkg.discountedPrice})`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center py-3 bg-[#B8893A] hover:bg-[#8A6428] text-white font-semibold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Book Package
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      </section>
    </>
  );
}