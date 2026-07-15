import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://seudominio.com.br"),
  title: "Landpages e Sistemas para PMEs | Agencia",
  description:
    "Criamos landpages que convertem visitantes em clientes e sistemas que automatizam o que dá trabalho. Resultado em 30 dias ou devolvemos seu dinheiro.",
  keywords: ["landpage", "landing page", "sistemas", "PME", "pequena empresa", "site que vende"],
  openGraph: {
    title: "Landpages e Sistemas para PMEs | Agencia",
    description: "Landpages que convertem e sistemas que simplificam. Resultado em 30 dias.",
    type: "website",
    locale: "pt_BR",
    url: "https://seudominio.com.br",
    siteName: "Agencia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agencia - Landpages e Sistemas para PMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landpages e Sistemas para PMEs | Agencia",
    description: "Landpages que convertem e sistemas que simplificam. Resultado em 30 dias.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agencia",
    url: "https://seudominio.com.br",
    description: "Landpages e Sistemas para PMEs",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-95839-4250",
      contactType: "customer service",
    },
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof window!=='undefined'){window.history.scrollRestoration='manual';window.scrollTo(0,0);}`,
          }}
        />
      </head>
      <body className="min-h-dvh">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
