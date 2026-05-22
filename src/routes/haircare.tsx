import { createFileRoute } from "@tanstack/react-router";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { ServiceSectionBlock } from "@/components/ServiceSectionBlock";
import haircareHero from "@/assets/haircare-model.jpg";
import haircareModel1 from "@/assets/haircare-model1.jpg";
import haircareModel2 from "@/assets/haircare-model2.jpeg";
import haircareModel3 from "@/assets/haircare-model3.jpeg";
import haircareModel4 from "@/assets/haircare-model4.jpeg";
import haircareModel5 from "@/assets/haircare-model5.jpeg";
import haircareModel6 from "@/assets/haircare-model6.jpeg";
import haircareModel7 from "@/assets/haircare-model7.jpeg";
import haircareModel8 from "@/assets/haircare-model8.jpeg";

export const Route = createFileRoute("/haircare")({
  head: () => ({
    meta: [
      { title: "Haircare — K2 Beauty Salon | Cuts, Color, Spa & Treatments" },
      { name: "description", content: "Premium hair cuts, styling, spa treatments and hair washes by master stylists at K2 Beauty Salon, Chennai." },
    ],
  }),
  component: HaircarePage,
});

const cuts = [
  "Layer Cut", "Textured Layer", "Wolf Cut", "Butterfly Cut", "U Cut",
  "One Length", "Boy Cut", "Baby Hair Cut", "Curtain Bangs", "Side Bangs", "Front French",
];

const spa = [
  "Amino Spa Treatment", "Botox Spa Treatment", "L'Oreal Spa Treatment",
  "Dandruff Treatment", "Dandruff Treatment with Spa", "Quick Spa",
];

const wash = [
  "Protein Treatment Wash", "Sulphur Free Shampoo Wash",
  "L'Oreal Shampoo Wash", "Normal Hair Wash",
];

const color = [
  "Root Touch Up (Ammonia)", "Root Touch Up (Ammonia Free)",
  "Ammonia Each Tube", "Ammonia Free Each Tube",
  "Global Hair Color", "Crown Highlightening",
  "Ombre Highlightening", "Balayage Highlightening",
  "Advance Highlights with Global (Full Hair)",
  "Inova Oil Based Color (Root Touch Up)",
];

const permanent = [
  "Botoplastia Treatment", "Keratin Treatment",
  "Hair Smoothening", "Hair Perming", "Smoothening / Touchup",
];

const setting = [
  "Ironing", "Thong Curls", "Crimping",
  "Curl Blow Dry", "Straight Blow Dry",
];

const oilMassage = [
  "Olive Oil Massage", "Almond Oil Massage",
  "Oil Massage (Egg Pack)", "Hair Oil Massage, Back Steam Wash",
  "Oil Massage (Without Wash)",
];

function HaircarePage() {
  return (
    <>
      {/* Landing Page Banner Image */}
      <PageHeroBanner
        eyebrow="Haircare"
        title="Hair Cuts & Styling Artistry"
        description="Experience exceptional hair styling, customized cuts, and deep-nourishing therapies crafted by Chennai's leading master stylists."
        image={haircareHero}
      />

      {/* Main Service Sections Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Section 1: Hair Cuts & Styling */}
        <ServiceSectionBlock
          title="Hair Cuts & Styling"
          description="Transform your look with cuts designed to frame your face and suit your lifestyle. From classic U-cuts to contemporary butterfly and shag cuts, our senior stylists deliver excellence."
          image={haircareModel1}
          items={cuts}
          priceNote="*Advanced Layer Cuts start at Rs.950 (Member discounts available)*"
          bgColor="bg-[#361E1A]"
          bookMessage="I want to book a Hair Cut and Styling session"
          imageRight={false}
        />

        {/* Section 2: Hair Spa Treatment */}
        <ServiceSectionBlock
          title="Hair Spa Treatment"
          description="Nourish your hair from root to tip. Our specialized spa treatments target dry, damaged, or dandruff-prone hair using premium organic blends and advanced therapeutic steams."
          image={haircareModel2}
          items={spa}
          priceNote="*L'Oreal Spa Treatment from Rs.1800 (Amino Therapy from Rs.3000)*"
          bgColor="bg-[#1E302B]"
          bookMessage="I want to book a luxury Hair Spa Treatment"
          imageRight={true}
        />

        {/* Section 3: Hair Wash */}
        <ServiceSectionBlock
          title="Hair Wash"
          description="Reinvigorate your scalp. We use premium, sulphate-free shampoos and protein-rich conditioners to gently cleanse, hydrate, and prepare your hair for flawless styling."
          image={haircareModel3}
          items={wash}
          priceNote="*Normal Hair Wash starts at Rs.650 (Sulphate-free wash starts at Rs.800)*"
          bgColor="bg-[#1E2B36]"
          bookMessage="I want to book a professional Hair Wash"
          imageRight={false}
        />

        {/* Section 4: Hair Color */}
        <ServiceSectionBlock
          title="Hair Color"
          description="Express yourself with our professional hair coloring services. From global colors and root touch-ups to creative Balayage and Ombre highlights, we use premium, hair-friendly colors for a radiant finish."
          image={haircareModel5}
          items={color}
          priceNote="*Ammonia-free color solutions and premium global shading available*"
          bgColor="bg-[#3B1E2E]"
          bookMessage="I want to book a Hair Color session"
          imageRight={true}
        />

        {/* Section 5: Permanent Style */}
        <ServiceSectionBlock
          title="Permanent Style & Treatments"
          description="Tame frizz and add long-lasting smoothness or bounce to your locks. Our senior stylists specialize in Botoplastia, Keratin, Smoothening, Perming, and touch-ups."
          image={haircareModel6}
          items={permanent}
          priceNote="*Smoothening and Keratin treatments start from Rs.2500*"
          bgColor="bg-[#361E1A]"
          bookMessage="I want to book a Permanent Hair Styling or Keratin treatment"
          imageRight={false}
        />

        {/* Section 6: Hair Setting */}
        <ServiceSectionBlock
          title="Hair Setting"
          description="Get ready for any special occasion with professional blow dries, ironing, thong curls, and crimping, designed to keep your hairstyle flawless all day."
          image={haircareModel7}
          items={setting}
          priceNote="*Blow dry and ironing setting starts at Rs.800*"
          bgColor="bg-[#1E302B]"
          bookMessage="I want to book a professional Hair Setting session"
          imageRight={true}
        />

        {/* Section 7: Hair Oil Massage */}
        <ServiceSectionBlock
          title="Hair Oil Massage"
          description="Relax and rejuvenate your scalp with a soothing oil massage. Choose from premium olive or almond oils, with options for egg packs, steam washes, or quick non-wash sessions."
          image={haircareModel8}
          items={oilMassage}
          priceNote="*Massages start from Rs.600 (Optional hair wash & steam available)*"
          bgColor="bg-[#1E2B36]"
          bookMessage="I want to book a relaxing Hair Oil Massage"
          imageRight={false}
        />

      </section>
    </>
  );
}