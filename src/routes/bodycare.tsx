import { createFileRoute } from "@tanstack/react-router";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { ServiceSectionBlock } from "@/components/ServiceSectionBlock";
import bodycareHero from "@/assets/bodycare-model.jpg";
import bodycareModel1 from "@/assets/bodycare-model1.jpg";
import unnamed5 from "@/assets/unnamed (5).webp";
import unnamed6 from "@/assets/unnamed (6).webp";
import whatsappImage from "@/assets/WhatsApp Image 2026-05-20 at 9.57.12 AM.jpg";
import bodyMassageImg from "@/assets/body-massage.png";
import threadingImg from "@/assets/threading.png";
import faceWaxingImg from "@/assets/face-waxing.png";

export const Route = createFileRoute("/bodycare")({
  head: () => ({
    meta: [
      { title: "Bodycare — Waxing, Mani-Pedi & Nail Care | K&K2 Beauty Salon" },
      { name: "description", content: "Waxing, bleach, manicure, pedicure and nail care services at K&K2 Beauty Salon, Chennai." },
    ],
  }),
  component: BodycarePage,
});

const waxing = ["Under Arms Waxing", "Full Arms Waxing", "Full Arms & Under Arms", "Face Waxing", "Chin Waxing", "Honey Brazilian Waxing", "Full Front Waxing", "Bum Wax"];
const bleach = ["Oxy Bleach"];
const maniPedi = ["Mint Chip Pedicure", "Mint Chip Manicure", "Alga Biscotti Pedicure", "Alga Biscotti Manicure", "Crystal Jelly Pedicure", "Crystal Jelly Manicure", "Spa Pedicure", "Spa Manicure", "Deluxe Pedicure", "Deluxe Manicure", "Normal Pedicure", "Normal Manicure"];
const nails = ["Prescription Nail Extension", "Gel Polish", "Gel Polish with Design", "Natural Nails Gel Polish", "Natural Nails Gel Polish with Design", "Gel Polish Removal", "Nail File and Polish"];

const bodyMassage = [
  "Body Massage with Coco Butter Cream",
  "Full Body Scrub",
  "Full Leg Massage (20 Minutes)",
  "Back Massage (20 Minutes)",
  "Back Scrub",
  "Tummy Massage",
  "Hand Massage (20 Minutes)"
];

const threading = [
  "Eyebrows",
  "Upper Lips",
  "Chin",
  "Forehead",
  "Full Face Threading"
];

const faceWaxing = [
  "Honey",
  "Brazillian",
  "Full Face Waxing",
  "Side Wax",
  "Upper Lip Wax",
  "Chin Wax",
  "Feet Wax"
];

function BodycarePage() {
  return (
    <>
      {/* Landing Page Banner Image */}
      <PageHeroBanner
        eyebrow="Bodycare"
        title="Body, Wax &amp; Nail Rituals"
        description="Indulge in deep relaxation and hygiene with our professional body waxing, luxurious manicure/pedicure scrubs, and artistic nail care."
        image={bodycareHero}
      />

      {/* Main Service Sections Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

        {/* Section 1: Waxing */}
        <ServiceSectionBlock
          title="Smooth Waxing Care"
          description="Experience smooth, hair-free skin with our gentle waxing services. We use high-quality honey and premium Rica wax to ensure a comfortable and highly hygienic session."
          image={unnamed5}
          items={waxing}
          priceNote="*Full Arms Rica Waxing at Rs.450 (Honey Waxing from Rs.350)*"
          bgColor="bg-[#3E233F]"
          bookMessage="I want to book a Waxing session"
          imageRight={false}
        />

        {/* Section 2: Face Waxing */}
        <ServiceSectionBlock
          title="Face Waxing"
          description="Enjoy a smooth, glowing facial complexion with our premium waxing options. We offer gentle honey and specialized Brazilian waxing for all face areas."
          image={faceWaxingImg}
          items={faceWaxing}
          priceNote="*Full Face Waxing starts at Rs.800 (Honey or Brazilian options available)*"
          bgColor="bg-[#403B1E]"
          bookMessage="I want to book a Face Waxing session"
          imageRight={true}
        />

        {/* Section 3: Threading */}
        <ServiceSectionBlock
          title="Threading Services"
          description="Define your features with precise brow shaping and facial threading. Our experienced therapists ensure clean lines and a gentle touch."
          image={threadingImg}
          items={threading}
          priceNote="*Eyebrow threading starts at Rs.100 (Full face package options available)*"
          bgColor="bg-[#1A3840]"
          bookMessage="I want to book a Threading session"
          imageRight={false}
        />

        {/* Section 4: Bleach & Detan */}
        <ServiceSectionBlock
          title="Hygiene Bleach &amp; Detan"
          description="Instantly brighten and even out your skin tone. Our gentle oxy bleach reduces hyperpigmentation and prepares your skin for specialized glow treatments."
          image={unnamed6}
          items={bleach}
          priceNote="*Oxy Bleach starts at Rs.700 (Fruit Bleach starts from Rs.600)*"
          bgColor="bg-[#4A1E2F]"
          bookMessage="I want to book a Bleaching / Detanning session"
          imageRight={true}
        />

        {/* Section 5: Body Massage */}
        <ServiceSectionBlock
          title="Body Massage & Scrub"
          description="Rejuvenate your body and mind with our therapeutic massages. From rich cocoa butter cream massages to deep scrubs and targeted back, leg, tummy, or hand reliefs."
          image={bodyMassageImg}
          items={bodyMassage}
          priceNote="*Relaxing full body massage starts from Rs.2000 (Targeted 20-min therapies from Rs.500)*"
          bgColor="bg-[#3E233F]"
          bookMessage="I want to book a Body Massage / Scrub session"
          imageRight={false}
        />

        {/* Section 6: Manicures & Pedicures */}
        <ServiceSectionBlock
          title="Manicures &amp; Pedicures"
          description="Pamper your hands and feet. Indulge in our luxurious mint-chip or crystal-jelly rituals, featuring relaxing exfoliations, mud masks, and deep hydrating massages."
          image={bodycareModel1}
          items={maniPedi}
          priceNote="*Mint Chip Pedicure is Rs.2,999 (Spa Manicures start at Rs.700)*"
          bgColor="bg-[#403B1E]"
          bookMessage="I want to book an Indulgent Manicure / Pedicure session"
          imageRight={true}
        />

        {/* Section 7: Nail Care */}
        <ServiceSectionBlock
          title="Gel Polish &amp; Extensions"
          description="Express yourself with gorgeous nails. From custom gel polishes and acrylic extensions to delicate hand-painted designs, our nail artists will perfect your look."
          image={whatsappImage}
          items={nails}
          priceNote="*Nail Extensions start at Rs.2,000 (Natural Gel Polish from Rs.800)*"
          bgColor="bg-[#4A1E2F]"
          bookMessage="I want to book a Nail Care / Extensions session"
          imageRight={false}
        />

      </section>
    </>
  );
}