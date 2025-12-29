import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seoConfig } from "./seo-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ================= METADATA ================= */

export const metadata = {
  metadataBase: new URL("https://www.shreemahalaxmmienterprises.co.in"),

  ...seoConfig.global,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Structured Data (SEO Safe) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              seoConfig.structuredData.localBusiness
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}
