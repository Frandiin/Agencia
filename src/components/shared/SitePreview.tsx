"use client";

import { useRef, useCallback } from "react";
import BrowserChrome from "./previews/BrowserChrome";
import RestaurantePreview from "./previews/RestaurantePreview";
import ClinicaPreview from "./previews/ClinicaPreview";
import LojaPreview from "./previews/LojaPreview";
import StudioPreview from "./previews/StudioPreview";
import GenericoPreview from "./previews/GenericoPreview";

interface SitePreviewProps {
  businessName: string;
  businessType: string;
  slogan: string;
  color: string;
  services: string[];
  proofBadges: string[];
  extras: Record<string, unknown>;
  fullscreen?: boolean;
  onCloseFullscreen?: () => void;
}

export default function SitePreview({
  businessName,
  businessType,
  slogan,
  color,
  services,
  proofBadges,
  extras,
  fullscreen,
  onCloseFullscreen,
}: SitePreviewProps) {



  const displayName = businessName || "Seu Negócio";
  const displaySlogan = slogan || "Soluções que geram resultado para o seu negócio";

  const renderPreview = () => {
    switch (businessType) {
      case "Restaurante":
        return <RestaurantePreview name={displayName} slogan={displaySlogan} color={color} proofBadges={proofBadges} extras={extras} />;
      case "Clinica":
        return <ClinicaPreview name={displayName} slogan={displaySlogan} color={color} proofBadges={proofBadges} extras={extras} />;
      case "Loja":
        return <LojaPreview name={displayName} slogan={displaySlogan} color={color} proofBadges={proofBadges} extras={extras} />;
      case "Studio":
        return <StudioPreview name={displayName} slogan={displaySlogan} color={color} proofBadges={proofBadges} extras={extras} />;
      default:
        return <GenericoPreview name={displayName} slogan={displaySlogan} color={color} services={services} proofBadges={proofBadges} />;
    }
  };

  if (fullscreen) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white dark:bg-gray-950"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shrink-0"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold" style={{ color }}>{displayName}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 dark:text-gray-400">{displayName.toLowerCase().replace(/\s+/g, "")}.com.br</span>
            <button
              onClick={onCloseFullscreen}
              className="ml-2 rounded-full px-3 py-1 text-[10px] font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Fechar preview ✕
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-full">
            {renderPreview()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full rounded-2xl transition-shadow duration-700"
      style={{
        boxShadow: `0 0 80px -20px ${color}35, 0 25px 50px -12px rgba(0,0,0,0.15)`,
      }}
    >
      <div
        className="rounded-2xl bg-white dark:bg-gray-950 transition-transform duration-200 ease-out"
        style={{ border: `1px solid ${color}20` }}
      >
        <BrowserChrome name={displayName} />
        {renderPreview()}
      </div>
    </div>
  );
}
