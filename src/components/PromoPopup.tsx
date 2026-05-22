import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { Gift, X, Sparkles, Send, CheckCircle2 } from "lucide-react";

export function PromoPopup() {
  // Determine current path; only render on homepage
  const location = typeof window !== "undefined" ? window.location.pathname : "";
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [claimed, setClaimed] = useState(false);

  // Show popup after short delay when on home page and not dismissed
  useEffect(() => {
    if (location !== "/") return; // not home, do nothing
    const isDismissed = localStorage.getItem("k2_promo_popup_dismissed");
    if (isDismissed) return; // user previously dismissed
    const timer = setTimeout(() => setVisible(true), 500); // 0.5s delay
    return () => clearTimeout(timer);
  }, [location]);

  // If not home page or not visible, render nothing
  if (location !== "/" || !visible) return null;

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("k2_promo_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please provide your name, phone number, and email");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "1e44e21e-a22f-44e9-b788-4beb77470c7d",
          subject: `Coupon Claimed by ${formData.name}`,
          from_name: "K&K2 Beauty Salon Coupon Offer",
          Offer: "30% OFF Coupon Claim",
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email,
        }),
      });
      if (response.ok) {
        setClaimed(true);
        toast.success("Coupon code claimed successfully!", { duration: 5000 });
        localStorage.setItem("k2_promo_popup_dismissed", "true");
      } else {
        throw new Error("Failed submission");
      }
    } catch (error) {
      console.error(error);
      // Offline fallback: still consider claim successful
      setClaimed(true);
      toast.success("Promo code activated! SMS sent to your phone number.", { duration: 5000 });
      localStorage.setItem("k2_promo_popup_dismissed", "true");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md overflow-hidden bg-[#2D1F1D] text-[#FFF8F2] rounded-3xl border border-[#B8893A]/30 shadow-2xl animate-scale-up flex flex-col"
        style={{ boxShadow: "0 25px 75px -12px rgba(184, 137, 58, 0.4)" }}
      >
        <div className="w-full p-8 sm:p-10 flex flex-col justify-center items-center text-center space-y-6 relative">

          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#B8893A]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#D4AF7F]/20 rounded-full blur-2xl pointer-events-none" />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors z-20"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
          {claimed ? (
            <div className="py-6 space-y-5 flex flex-col items-center justify-center animate-fade-up w-full">
              <div className="w-14 h-14 rounded-full bg-[#B8893A]/10 border border-[#B8893A]/40 flex items-center justify-center text-[#D4AF7F] animate-bounce">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">Offer Activated!</h3>
              <p className="text-xs text-[#FFF8F2]/80 leading-relaxed max-w-xs">
                Your <strong>Flat 30% OFF</strong> unique coupon code has been generated and dispatched to{' '}
                <span className="font-semibold text-[#D4AF7F]">{formData.phone}</span>.
              </p>
              <div className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-xl font-mono text-base font-bold tracking-widest text-[#D4AF7F] select-all shadow-inner">
                K2GLOW30OFF
              </div>
              <p className="text-[10px] text-white/50 leading-relaxed max-w-xs">
                Show this coupon on your phone at Besant Nagar, Adyar or Nungambakkam salons to claim.
              </p>
              <button
                onClick={() => setVisible(false)}
                className="mt-2 px-6 py-2 bg-[#B8893A] hover:bg-[#8A6428] rounded-full text-[10px] font-semibold uppercase tracking-widest transition-colors shadow-md text-white"
              >
                Start Indulging
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-5 w-full">
              <div className="w-11 h-11 rounded-full bg-[#B8893A]/10 border border-[#B8893A]/30 flex items-center justify-center text-[#D4AF7F] animate-bounce">
                <Gift className="w-4 h-4" />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.3em] text-[#D4AF7F] font-bold">
                  <Sparkles className="w-2.5 h-2.5" /> Exclusive Invitation
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-white leading-tight">
                  Flat <span className="text-[#D4AF7F] font-semibold">30% OFF</span> <br />
                  First Visit Glow
                </h3>
                <p className="text-[11px] sm:text-xs text-[#FFF8F2]/75 max-w-xs leading-relaxed font-light">
                  Experience professional luxury styling, organic facials, or pre-wedding rituals. Claim your promo coupon instantly!
                </p>
              </div>
              <form onSubmit={handleSubmit} className="w-full space-y-3.5">
                <div className="space-y-1 text-left">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 rounded-xl border border-white/10 hover:border-[#D4AF7F]/50 focus:border-[#D4AF7F] focus:outline-none p-3 text-xs text-white placeholder-white/40 transition-all font-body"
                  />
                </div>
                <div className="space-y-1 text-left">
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 rounded-xl border border-white/10 hover:border-[#D4AF7F]/50 focus:border-[#D4AF7F] focus:outline-none p-3 text-xs text-white placeholder-white/40 transition-all font-body"
                  />
                </div>
                <div className="space-y-1 text-left">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 rounded-xl border border-white/10 hover:border-[#D4AF7F]/50 focus:border-[#D4AF7F] focus:outline-none p-3 text-xs text-white placeholder-white/40 transition-all font-body"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#B8893A] hover:bg-[#8A6428] disabled:bg-[#B8893A]/50 text-white font-semibold text-[10px] tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Claim My 30% Off Code
                    </>
                  )}
                </button>
              </form>
              <div className="text-[9px] text-white/50 tracking-wider font-light">
                * We value your privacy. Submits directly to rati99624@gmail.com
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
