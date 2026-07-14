"use client";

import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5511958394250?text=Ol%C3%A1!%20Vim%20pelo%20site"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all hover:bg-emerald-600 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
