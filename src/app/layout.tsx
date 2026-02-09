import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Psicología Integral - Terapia y Bienestar Emocional",
  description:
    "Centro de psicología especializado en terapia individual, de pareja y familiar. Tratamiento de ansiedad, depresión, estrés y más. Psicólogos certificados con años de experiencia en salud mental y bienestar emocional.",
  keywords:
    "psicología, terapia psicológica, psicólogo, terapia de pareja, terapia familiar, ansiedad, depresión, estrés, salud mental, bienestar emocional, terapia online, psicología clínica, autoestima, desarrollo personal",
  authors: [{ name: "Dra. María González" }],
  creator: "Psicología Integral",
  publisher: "Psicología Integral",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.psicologia-integral.com",
    siteName: "Psicología Integral",
    title: "Psicología Integral - Terapia y Bienestar Emocional",
    description:
      "Centro de psicología especializado en terapia individual, de pareja y familiar. Psicólogos certificados con años de experiencia en salud mental.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Psicología Integral - Centro de Terapia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicología Integral - Terapia y Bienestar Emocional",
    description:
      "Centro de psicología especializado en salud mental y bienestar emocional. Terapia individual, de pareja y familiar.",
    images: ["/images/og-image.jpg"],
    creator: "@psicologia_integral",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  alternates: {
    canonical: "https://www.psicologia-integral.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.psicologia-integral.com",
    name: "Psicología Integral",
    description:
      "Centro de psicología especializado en terapia individual, de pareja y familiar. Tratamiento de ansiedad, depresión y estrés.",
    url: "https://www.psicologia-integral.com",
    telephone: "+52-555-987-6543",
    email: "contacto@psicologia-integral.com",
    image: "https://www.psicologia-integral.com/images/logo.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Insurgentes Sur 1234, Piso 5",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      postalCode: "03100",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.3686,
      longitude: -99.1694,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/psicologiaintegral",
      "https://www.instagram.com/psicologiaintegral",
      "https://www.linkedin.com/company/psicologia-integral",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Psicología",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Terapia Individual",
            description: "Sesiones personalizadas de terapia psicológica",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Terapia de Pareja",
            description:
              "Fortalecimiento de relaciones y resolución de conflictos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Terapia Familiar",
            description: "Mejora de la dinámica y comunicación familiar",
          },
        },
      ],
    },
  };

  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
