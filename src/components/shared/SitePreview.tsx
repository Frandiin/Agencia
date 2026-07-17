"use client";

import { useRef, useEffect, useState, useMemo, useCallback, lazy, Suspense } from "react";
import BrowserChrome from "./previews/BrowserChrome";

const RestaurantePreview = lazy(() => import("./previews/RestaurantePreview"));
const ClinicaPreview = lazy(() => import("./previews/ClinicaPreview"));
const LojaPreview = lazy(() => import("./previews/LojaPreview"));
const StudioPreview = lazy(() => import("./previews/StudioPreview"));
const GenericoPreview = lazy(() => import("./previews/GenericoPreview"));

const PREVIEW_BASE_WIDTH = 1200;

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

  const displayName = businessName || "Seu Negócio";
  const displaySlogan = slogan || "Soluções que geram resultado para o seu negócio";

  const previewContent = useMemo(() => {
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
  }, [businessType, displayName, displaySlogan, color, proofBadges, extras, services]);

  useEffect(() => {
    if (fullscreen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onCloseFullscreen?.();
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }

    const updateScale = () => {
      if (!wrapperRef.current || !contentRef.current) return;
      const wrapperWidth = wrapperRef.current.clientWidth;
      const newScale = wrapperWidth / PREVIEW_BASE_WIDTH;
      const height = contentRef.current.scrollHeight;
      setScale(newScale);
      setContentHeight(Math.ceil(height * newScale));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, [fullscreen, onCloseFullscreen]);

  if (fullscreen) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white dark:bg-gray-950 animate-fullscreen-in"
        role="dialog"
        aria-modal="true"
        aria-label={`Preview de ${displayName}`}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        style={{ willChange: 'opacity' }}
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
              aria-label="Fechar preview"
              className="ml-2 rounded-full px-3 py-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Fechar preview
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto" style={{ overscrollBehavior: 'contain' }}>
          <div className="min-h-full animate-content-in" style={{ willChange: 'transform, opacity' }}>
            <Suspense fallback={<div className="flex items-center justify-center h-64 text-gray-400">Carregando...</div>}>
              {previewContent}
            </Suspense>
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
        className="rounded-2xl bg-white dark:bg-gray-950 transition-transform duration-200 ease-out overflow-hidden"
        style={{ border: `1px solid ${color}20` }}
      >
        <BrowserChrome name={displayName} />
        <div ref={wrapperRef} className="overflow-hidden" style={{ height: contentHeight || "auto" }}>
          <div
            ref={contentRef}
            style={{
              width: PREVIEW_BASE_WIDTH,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              willChange: "transform",
            }}
          >
            <Suspense fallback={<div className="flex items-center justify-center h-64 text-gray-400">Carregando...</div>}>
              {previewContent}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
