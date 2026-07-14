import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/shared/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landpages e Sistemas para PMEs | Agencia",
  description:
    "Criamos landpages de alta conversao e sistemas personalizados para pequenas e medias empresas. Resultado em 30 dias ou dinheiro de volta.",
  keywords: ["landpage", "landing page", "sistemas", "PME", "pequena empresa"],
  openGraph: {
    title: "Landpages e Sistemas para PMEs | Agencia",
    description: "Landpages que convertem e sistemas que simplificam.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
