import { createFileRoute } from "@tanstack/react-router";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { ServiceSectionBlock } from "@/components/ServiceSectionBlock";
import skincareHero from "@/assets/skincare-model.jpg";
import skincareModel1 from "@/assets/skincare-model1.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog3 from "@/assets/blog-3.jpg";
import unnamed1 from "@/assets/unnamed (1).webp";

export const Route = createFileRoute("/skincare")({
  head: () => ({
    meta: [
      { title: "Skincare & Facials — K2 Beauty Salon Chennai" },
      { name: "description", content: "Luxury, premium, classic and basic facials at K2 Beauty Salon. Glow-boost rituals tailored to your skin." },
    ],
  }),
  component: SkincarePage,
});

const luxury = ["Blanch Facial", "Upendice Facial", "Sensi Care Facial"];
const premium = ["Papaya & Marshmallow", "Ginger & Walnut", "Hydra Boost Facial", "Quinoa Whitening Facial", "Avacado Glow & Shine Facial", "Skin Miracle Glutathione"];
const classic = ["Ash Pumpkin", "Raw Mango", "Organic Facial 0% Chemical", "Anti Ageing Facial", "Skin Whitening Facial"];
const basic = ["VLCC Gold Facial", "Aroma Pearl Facial", "Aroma Fruit Facial", "Detan Cleanup", "Aelovera Facial", "Normal Cleanup"];

function SkincarePage() {
  return (
    <>
      {/* Landing Page Banner Image */}
      <PageHeroBanner
        eyebrow="Skincare"
        title="Facials & Glow Rituals"
        description="Reclaim your natural luminous complexion with our deeply relaxing facials, organic skincare, and clinical hydration treatments."
        image={skincareHero}
      />

      {/* Main Service Sections Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

        {/* Section 1: Luxury Facial */}
        <ServiceSectionBlock
          title="Luxury Facials"
          description="Indulge in our ultimate skin-rejuvenating treatments. Using premium active ingredients, these facials deeply nourish, lift, and restore youthfulness to mature or tired skin."
          image={blog1}
          items={luxury}
          priceNote="*Blanch & Sensi Care Luxury Facials fixed at Rs.6,999*"
          bgColor="bg-[#4A1521]"
          bookMessage="I want to book a Luxury Skincare Facial session"
          imageRight={false}
        />

        {/* Section 2: Premium Facial */}
        <ServiceSectionBlock
          title="Premium Glow Facials"
          description="Restore your skin's natural luminosity with our fruit-active and advanced clean-ups. Specially formulated to clear blemishes and boost long-lasting collagen production."
          image={blog3}
          items={premium}
          priceNote="*Hydra Boost is Rs.4,999 (Glutathione Glow starts at Rs.3,999)*"
          bgColor="bg-[#4C3B24]"
          bookMessage="I want to book a Premium Glow Facial session"
          imageRight={true}
        />

        {/* Section 3: Classic Facial */}
        <ServiceSectionBlock
          title="Classic Organic Facials"
          description="Harness the power of nature. Our organic, chemical-free facials detoxify the skin barrier, leaving it soft, hydrated, and completely refreshed."
          image={skincareModel1}
          items={classic}
          priceNote="*Ash Pumpkin & Raw Mango organic facials start at Rs.3,500*"
          bgColor="bg-[#22362C]"
          bookMessage="I want to book a Classic Organic Facial session"
          imageRight={false}
        />

        {/* Section 4: Basic Facial / Cleanup */}
        <ServiceSectionBlock
          title="Basic Facials & Cleanups"
          description="The perfect quick refresher. Gently exfoliates dead skin cells, removes tan, and clears impurities to give you an instant, clean glow."
          image={unnamed1}
          items={basic}
          priceNote="*Detan Cleanup starts at Rs.1,400 (Basic Cleanups from Rs.900)*"
          bgColor="bg-[#1A313B]"
          bookMessage="I want to book a Basic Facial / Cleanup session"
          imageRight={true}
        />

      </section>
    </>
  );
}