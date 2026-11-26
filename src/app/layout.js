import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import JsonLd from "../components/ui/JsonLd";

export const metadata = {
  metadataBase: new URL("https://technotiq.in"),
  title: {
    default: "Technotiq | Industrial Automation, IT Solutions & Technical Training",
    template: "%s | Technotiq",
  },
  description:
    "Technotiq Automation Private Limited: Industrial Automation (PLC, SCADA, BMS, CCTV, Embedded Systems), IT Services, AI Workflows & Hands-on Engineering Training.",
  keywords: [
    "Industrial Automation",
    "PLC Training Ranchi",
    "SCADA Training",
    "BMS Automation",
    "CCTV Security Systems",
    "Embedded Systems",
    "IT Services",
    "Digital Marketing",
    "AI Workflow Automation",
    "Technotiq",
    "Technotiq Automation",
  ],
  authors: [{ name: "Technotiq Automation Private Limited" }],
  creator: "Technotiq Automation Private Limited",
  publisher: "Technotiq Automation Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://technotiq.in",
    siteName: "Technotiq",
    title: "Technotiq | Industrial Automation, IT Solutions & Technical Training",
    description:
      "Transform technical skills into real-world expertise. Hands-on industrial automation, enterprise software engineering, and corporate training.",
    images: [
      {
        url: "/technotiq-logo.webp",
        width: 1200,
        height: 630,
        alt: "Technotiq Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technotiq | Industrial Automation & IT Services",
    description:
      "Transform technical skills into real-world expertise through hands-on industrial automation labs and enterprise software engineering.",
    images: ["/technotiq-logo.webp"],
  },
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
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Technotiq Automation Private Limited",
  alternateName: "Technotiq",
  url: "https://technotiq.in",
  logo: "https://technotiq.in/technotiq-logo.webp",
  telephone: "+91-6299-916713",
  email: "technotiqautomation@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    addressCountry: "IN",
  },
  sameAs: ["https://technotiq.in"],
  slogan: "Technology. Innovation. Excellence.",
  description:
    "Industrial Automation (PLC, SCADA, BMS, CCTV, Embedded Systems), IT Services, Digital Marketing, and Hands-on Technical Training.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <JsonLd schema={orgSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-purple-100 selection:text-purple-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
