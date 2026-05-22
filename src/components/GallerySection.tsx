import { useState } from "react";
import { X, Play, Eye, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import bodycareModel from "@/assets/bodycare-model.jpg";
import bodycareModel1 from "@/assets/bodycare-model1.jpg";
import unnamed5 from "@/assets/unnamed (5).webp";
import unnamed6 from "@/assets/unnamed (6).webp";
import whatsappImg from "@/assets/WhatsApp Image 2026-05-20 at 9.57.12 AM.jpg";

import bridal1 from "@/assets/bridal-1.jpg";
import bridal2 from "@/assets/bridal-2.jpg";
import bridal3 from "@/assets/bridal-3.jpg";
import bridal4 from "@/assets/bridal-4.jpeg";
import bridal5 from "@/assets/bridal-5.jpeg";
import bridal6 from "@/assets/bridal-6.jpeg";
import bridal7 from "@/assets/bridal-7.jpeg";
import bridal8 from "@/assets/bridal-8.jpeg";
import bridal9 from "@/assets/bridal-9.jpeg";
import bridal10 from "@/assets/bridal-10.jpeg";
import bridal11 from "@/assets/bridal-11.jpeg";
import bridal12 from "@/assets/bridal-12.jpeg";
import bridal13 from "@/assets/bridal-13.jpeg";
import bridal14 from "@/assets/bridal-14.jpg";
import bridalHero from "@/assets/bridal-hero.jpg";
import bridalHero1 from "@/assets/bridal-hero1.jpg";

import haircareModel from "@/assets/haircare-model.jpg";
import haircareModel1 from "@/assets/haircare-model1.jpg";
import haircareModel2 from "@/assets/haircare-model2.jpeg";
import haircareModel3 from "@/assets/haircare-model3.jpeg";
import haircareModel4 from "@/assets/haircare-model4.jpeg";
import haircareModel5 from "@/assets/haircare-model5.jpeg";
import haircareModel6 from "@/assets/haircare-model6.jpeg";
import haircareModel7 from "@/assets/haircare-model7.jpeg";
import haircareModel8 from "@/assets/haircare-model8.jpeg";
import haircareModel9 from "@/assets/haircare-model9.jpeg";
import haircareModel10 from "@/assets/haircare-model10.jpeg";
import haircareModel11 from "@/assets/haircare-model11.jpeg";
import haircareModel12 from "@/assets/haircare-model12.jpeg";
import haircareModel13 from "@/assets/haircare-model13.jpeg";
import haircareModel14 from "@/assets/haircare-model14.jpeg";

import skincareModel from "@/assets/skincare-model.jpg";
import skincareModel1 from "@/assets/skincare-model1.jpg";
import unnamed1 from "@/assets/unnamed (1).webp";

import salonInterior from "@/assets/salon-interior.jpg";
import salonInterior1 from "@/assets/salon-interior1.webp";
import salonInterior2 from "@/assets/salon-interior2.webp";
import salonInterior3 from "@/assets/salon-interior3.webp";
import salonInterior4 from "@/assets/salon-interior4.webp";
import salonInterior5 from "@/assets/salon-interior5.webp";

import reel1 from "@/assets/reel-1.png";
import reel3 from "@/assets/reel-3.png";
import reel4 from "@/assets/reel-4.png";

interface GalleryItem {
  id: number;
  img: string;
  category: "Bridal" | "Haircare" | "Skincare" | "Bodycare" | "Interior";
  title: string;
}

const galleryItems: GalleryItem[] = [
  // Bridal
  { id: 1, img: bridal1, category: "Bridal", title: "Traditional Bridal Glow" },
  { id: 2, img: bridal2, category: "Bridal", title: "Modern Reception Elegance" },
  { id: 3, img: bridal3, category: "Bridal", title: "Christian Trousseau Makeover" },
  { id: 4, img: bridal4, category: "Bridal", title: "Signature Wedding Glow" },
  { id: 5, img: bridal5, category: "Bridal", title: "Royal Mehndhi Radiance" },
  { id: 6, img: bridal6, category: "Bridal", title: "Exquisite South Indian Bride" },
  { id: 7, img: bridal7, category: "Bridal", title: "Haldi Ceremony Warmth" },
  { id: 8, img: bridal8, category: "Bridal", title: "Golden Bridal Glamour" },
  { id: 9, img: bridal9, category: "Bridal", title: "Pre-Wedding Facial Sparkle" },
  { id: 10, img: bridal10, category: "Bridal", title: "Elegant Hair Styling & Draping" },
  { id: 11, img: bridal11, category: "Bridal", title: "Classic Red Veil Elegance" },
  { id: 12, img: bridal12, category: "Bridal", title: "Stunning Muhurtham Portrait" },
  { id: 13, img: bridal13, category: "Bridal", title: "Premium Saree Draping Artistry" },
  { id: 14, img: bridal14, category: "Bridal", title: "HD Outdoor Bridal Makeup" },
  { id: 15, img: bridalHero, category: "Bridal", title: "K&K2 Bridal Signature Look" },
  { id: 16, img: bridalHero1, category: "Bridal", title: "Timeless Bridal Grace" },

  // Haircare
  { id: 17, img: haircareModel, category: "Haircare", title: "Luxury Blonde Highlights" },
  { id: 18, img: haircareModel1, category: "Haircare", title: "Precision Layer Cut" },
  { id: 19, img: haircareModel2, category: "Haircare", title: "Botanical Hair Botox" },
  { id: 20, img: haircareModel3, category: "Haircare", title: "Volumizing Hair Blowout" },
  { id: 21, img: haircareModel4, category: "Haircare", title: "L'Oreal Professional Styling" },
  { id: 22, img: haircareModel5, category: "Haircare", title: "Rich Copper Balayage" },
  { id: 23, img: haircareModel6, category: "Haircare", title: "Textured Shag & Bangs" },
  { id: 24, img: haircareModel7, category: "Haircare", title: "Amino Acid Restorative Treatment" },
  { id: 25, img: haircareModel8, category: "Haircare", title: "Hydrating Keratin Spa" },
  { id: 26, img: haircareModel9, category: "Haircare", title: "Sleek Ironing & Soft Curls" },
  { id: 27, img: haircareModel10, category: "Haircare", title: "Ombre Highlights Artistry" },
  { id: 28, img: haircareModel11, category: "Haircare", title: "Classic Bob Cut Styling" },
  { id: 29, img: haircareModel12, category: "Haircare", title: "Deep-Cleansing Anti-Dandruff Spa" },
  { id: 30, img: haircareModel13, category: "Haircare", title: "Premium Hair Wash & Blow Dry" },
  { id: 31, img: haircareModel14, category: "Haircare", title: "Wella Koleston Color Transformation" },
  { id: 32, img: blog2, category: "Haircare", title: "Hydra-Nourishing Scalp Spa" },
  { id: 33, img: reel1, category: "Haircare", title: "Stunning Blonde Makeover" },
  { id: 34, img: reel3, category: "Haircare", title: "Wella Color Radiance" },
  { id: 35, img: reel4, category: "Haircare", title: "Premium Volume Curls" },

  // Skincare
  { id: 36, img: skincareModel, category: "Skincare", title: "Hydrating Facial Treatment" },
  { id: 37, img: skincareModel1, category: "Skincare", title: "Classic Organic Glow" },
  { id: 38, img: unnamed1, category: "Skincare", title: "Active Collagen Clean-up" },
  { id: 39, img: blog1, category: "Skincare", title: "Organic Acne Clean-up" },
  { id: 40, img: blog3, category: "Skincare", title: "Glutathione Radiance Boosting" },

  // Bodycare
  { id: 41, img: bodycareModel, category: "Bodycare", title: "Luxury Body Spa" },
  { id: 42, img: bodycareModel1, category: "Bodycare", title: "Relaxing Pedicure Spa" },
  { id: 43, img: unnamed5, category: "Bodycare", title: "Hygienic Honey Waxing" },
  { id: 44, img: unnamed6, category: "Bodycare", title: "Oxy Detan & Polish" },
  { id: 45, img: whatsappImg, category: "Bodycare", title: "Artistic Gel Extensions" },

  // Interior
  { id: 46, img: salonInterior, category: "Interior", title: "Our Boutique Ambience" },
  { id: 47, img: salonInterior1, category: "Interior", title: "Luxury Styling Station" },
  { id: 48, img: salonInterior2, category: "Interior", title: "Elegant Lounge Area" },
  { id: 49, img: salonInterior3, category: "Interior", title: "Relaxing Spa Rooms" },
  { id: 50, img: salonInterior4, category: "Interior", title: "Hygienic Washing Chairs" },
  { id: 51, img: salonInterior5, category: "Interior", title: "Besant Nagar Boutique Entrance" },
];

const categories = ["All", "Bridal", "Haircare", "Skincare", "Bodycare", "Interior"] as const;

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  const openLightbox = (id: number) => {
    // Find index of the clicked item in the currently FILTERED list
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    let newIndex = direction === "prev" ? lightboxIndex - 1 : lightboxIndex + 1;

    if (newIndex < 0) {
      newIndex = filteredItems.length - 1;
    } else if (newIndex >= filteredItems.length) {
      newIndex = 0;
    }
    setLightboxIndex(newIndex);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, filteredItems.length));
  };

  const handleShowLess = () => {
    setVisibleCount(6);
  };

  return (
    <section className="bg-gradient-soft py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center mx-auto max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Our Work</div>
          <h2 className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" /> K&K2 Salon Gallery
          </h2>
          <p className="mt-4 text-muted-foreground">
            A visual showcase of our premium makeovers, haircuts, skin treatments, and elegant boutique spaces.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6); // Reset visible count on category change
              }}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#B8893A] text-white shadow-md"
                  : "bg-white text-muted-foreground border border-border hover:border-[#B8893A]/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Responsive & Mobile-friendly */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 animate-fade-in">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="relative aspect-[4/5] group overflow-hidden rounded-[1.5rem] bg-black border border-border/30 shadow-soft cursor-pointer hover:shadow-elegant transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </span>
              </div>

              {/* Details (visible always on mobile, or on hover) */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 z-10 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest bg-[#B8893A] font-bold text-white px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h4 className="text-white text-sm md:text-base font-semibold mt-2 tracking-wide font-body line-clamp-1 drop-shadow-md">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 flex justify-center gap-4">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center bg-[#B8893A] hover:bg-[#8A6428] text-white px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Load More Work
            </button>
          ) : (
            filteredItems.length > 6 && (
              <button
                onClick={handleShowLess}
                className="inline-flex items-center justify-center bg-transparent border border-border text-muted-foreground hover:text-foreground hover:border-foreground/45 px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider transition-all duration-300"
              >
                Show Less
              </button>
            )
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 md:left-8 z-40 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-[85vw] max-h-[80vh] flex flex-col items-center animate-scale-up">
            <img
              src={filteredItems[lightboxIndex].img}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[72vh] object-contain rounded-lg border border-white/10 shadow-2xl"
            />
            {/* Image Details */}
            <div className="mt-4 text-center text-white">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#D4AF7F] font-bold">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-base md:text-lg font-semibold mt-1 font-body">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-white/40 mt-1">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 md:right-8 z-40 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
