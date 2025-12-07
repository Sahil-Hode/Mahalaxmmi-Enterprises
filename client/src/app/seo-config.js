// app/seo-config.js
export const seoConfig = {
  // Base domain configuration
  domain: 'https://shreemahalaxmmienterprises.co.in',
  
  // Global SEO settings
  global: {
    title: {
      default: "Shree Mahalaxmmi  Enterprises",
      template: "%s | Shree Mahalaxmmi  Enterprises"
    },
    description: "Trusted real estate consultancy since 2011. Residential, Commercial & Rental services in Kalyan-Dombivli-Thane. MahaRERA Registered A011332500959",
    keywords: ["real estate", "property", "kalyan", "dombivli", "thane", "buy property", "sell property", "rental", "maha rera", "commercial property", "residential property", "mahalxmmi enterprises", "Mahalaxmmi  enterprises", "real estate"],
    authors: [{ name: "Shree Mahalaxmmi  Enterprises" }],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: '/',
      siteName: 'Shree Mahalaxmmi  Enterprises',
      images: [
        {
          url: 'https://shreemahalaxmmienterprises.co.in/favicon-new.ico',
          width: 1200,
          height: 630,
          alt: 'Shree Mahalaxmmi  Enterprises - Real Estate Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  },

  // Page-specific overrides
  pages: {
    home: {
      title: "Shree Mahalaxmmi  Enterprises",
      description: "Trusted real estate consultancy since 2011. Residential, Commercial & Rental services in Kalyan-Dombivli-Thane. MahaRERA Registered A011332500959",
      keywords: ["real estate", "property", "kalyan", "dombivli", "thane", "buy property", "sell property", "rental", "maha rera"],
    },
    about: {
      title: "About Shree Mahalaxmmi  Enterprises - Trusted Real Estate Consultant Since 2011",
      description: "Learn about Shree Mahalaxmmi  Enterprises, a MahaRERA registered real estate consultancy with 17+ years of experience in Kalyan-Dombivli-Thane region.",
      keywords: ["about real estate", "property consultant", "kalyan", "dombivli", "thane", "maha rera", "property services"],
    },
    services: {
      title: "Real Estate Services - Buy, Sell, Rent Properties in Kalyan Dombivli",
      description: "Complete real estate services including property buying, selling, rentals, commercial properties, documentation & home loans in Kalyan-Dombivli-Thane.",
      keywords: ["property services", "buy property", "sell property", "rental services", "commercial real estate", "home loans", "property documentation"],
    },
    process: {
      title: "7-Step Property Buying Process - Transparent Real Estate Services",
      description: "Our 7-step transparent process for property buying, selling & rental services in Kalyan-Dombivli. From consultation to handover.",
      keywords: ["property process", "real estate process", "property buying", "property documentation", "kalyan", "dombivli", "thane"],
    },
  },

  // Structured Data Configuration
  structuredData: {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Shree Mahalaxmmi  Enterprises",
      "image": "/favicon-new.ico",
      "telephone": "+91-9702211049",
      "email": "sarthakmore0803@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 21, Jeevan Jyot CHSL, Sai Jyot Apartment, Nr. Apollo Chemist, Gupte Road",
        "addressLocality": "Dombivli West",
        "addressRegion": "Maharashtra",
        "postalCode": "421202",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.2183,
        "longitude": 73.1271
      },
      "openingHours": "Mo-Su 09:00-20:00",
      "areaServed": ["Kalyan", "Dombivli", "Thane"],
      "serviceType": ["Real Estate Services", "Property Consultation", "Property Sales", "Property Rentals", "Commercial Real Estate", "Home Loans", "Property Documentation"],
      "url": "https://shriMahalaxmmi enterprises.co.in",
      "sameAs": [
        "https://instagram.com/Mahalaxmmi enterprises",
        "https://facebook.com/Mahalaxmmi enterprises"
      ]
    }
  },

  // Generate metadata for specific pages
  generatePageMetadata: (pageKey) => {
    const pageConfig = seoConfig.pages[pageKey];
    if (!pageConfig) return seoConfig.global;
    
    return {
      ...seoConfig.global,
      title: pageConfig.title,
      description: pageConfig.description,
      keywords: pageConfig.keywords,
      openGraph: {
        ...seoConfig.global.openGraph,
        title: pageConfig.title,
        description: pageConfig.description,
      },
      twitter: {
        ...seoConfig.global.twitter,
        title: pageConfig.title,
        description: pageConfig.description,
      }
    };
  }
};