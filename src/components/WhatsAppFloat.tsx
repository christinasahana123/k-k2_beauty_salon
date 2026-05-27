import { useState } from "react";
import { waLink } from "@/lib/whatsapp";

const WA_MESSAGE = "Hi! I'd like to book an appointment at K&K2 Beauty Salon.";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Popup Card */}
      {open && (
        <div
          className="fixed bottom-28 right-4 sm:right-6 z-50 w-[300px] sm:w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          style={{ animation: "wa-popup-in 0.25s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {/* Green top border accent */}
          <div className="h-1 w-full bg-[#25D366]" />

          {/* Card body */}
          <div className="p-5">
            {/* Header row */}
            <div className="flex items-center gap-3 mb-4">
              {/* Chat icon circle */}
              <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 border-2 border-black">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base leading-tight">Hi there!</div>
                <div className="font-semibold text-gray-800 text-sm">How can I help you?</div>
              </div>
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="ml-auto w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Book Appointment CTA */}
            <a
              href={waLink(WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-4 py-3.5 font-semibold text-sm transition-colors"
            >
              <span className="flex items-center gap-2.5">
                {/* WhatsApp icon */}
                <svg viewBox="0 0 32 32" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                  <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.18.16-1.28-.07-.11-.25-.18-.52-.32zM16 5C9.93 5 5 9.93 5 16c0 1.94.51 3.83 1.48 5.49L5 27l5.66-1.48A10.94 10.94 0 0 0 16 27c6.07 0 11-4.93 11-11S22.07 5 16 5z"/>
                </svg>
                Book your appointment
              </span>
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            {/* Powered by */}
            <div className="mt-3 text-center text-[11px] text-gray-400 flex items-center justify-center gap-1">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Powered by <span className="font-bold text-gray-500">wati.io</span>
            </div>
          </div>

          {/* Speech bubble tail */}
          <div
            className="absolute -bottom-2 right-7 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45"
            style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.05)" }}
          />
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">
        {/* "Book your appointment" label bubble */}
        {!open && (
          <div
            className="bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 whitespace-nowrap cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setOpen(true)}
            style={{ animation: "wa-popup-in 0.3s ease both" }}
          >
            Book your appointment
          </div>
        )}

        {/* WhatsApp circle button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-float"
          style={{ background: "#25D366" }}
        >
          <svg viewBox="0 0 32 32" className="w-8 h-8 text-white" fill="currentColor" aria-hidden="true">
            <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.18.16-1.28-.07-.11-.25-.18-.52-.32zM16 5C9.93 5 5 9.93 5 16c0 1.94.51 3.83 1.48 5.49L5 27l5.66-1.48A10.94 10.94 0 0 0 16 27c6.07 0 11-4.93 11-11S22.07 5 16 5z"/>
          </svg>
        </button>
      </div>

      {/* Popup animation keyframe */}
      <style>{`
        @keyframes wa-popup-in {
          from { opacity: 0; transform: scale(0.85) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
}