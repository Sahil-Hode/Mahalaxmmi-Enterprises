import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seoConfig } from './seo-config';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://shreemahalaxmmienterprises.co.in"),

  ...seoConfig.global,

  icons: {
    icon: "https://shreemahalaxmmienterprises.co.in/favicon.ico",
    shortcut: "https://shreemahalaxmmienterprises.co.in/favicon.ico",
    apple: "https://shreemahalaxmmienterprises.co.in/favicon.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.localBusiness)
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}