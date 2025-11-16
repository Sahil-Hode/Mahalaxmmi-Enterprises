"use client";
import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Handshake } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Paradise Group",
      logo: "/images/paradise.jpg",
      category: "Premium Developer"
    },
    {
      name: "Runwal Gardens",
      logo: "/images/runwal.jpg",
      category: "Luxury Projects"
    },
    {
      name: "Swaminarayan City (Neo Thane)",
      logo: "/images/swaminarayan.png",
      category: "Integrated Township"
    },
    {
      name: "S S Lifespaces",
      logo: "/images/ss life space.jpg",
      category: "Quality Construction"
    },
    {
      name: "Lodha Developers",
      logo: "/images/lodha.jpg",
      category: "Premium Realty"
    },
    {
      name: "Balaji Estate",
      logo: "/images/balaji.jpg",
      category: "Trusted Builder"
    },
    {
      name: "Sunraj Construction",
      logo: "/images/sunjraj.png",
      category: "Experienced Builder"
    },
    {
      name: "Poddar Housing",
      logo: "/images/poddar.jpg",
      category: "Reputed Developer"
    }
  ];

  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200 mb-6">
            <Handshake className="w-5 h-5 text-orange-600" />
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
              Trusted Partnerships
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Authorized Channel Partners
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partnered with leading developers and builders to bring you the best real estate opportunities in Kalyan-Dombivli-Thane
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Verified Partnerships</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Premium Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Handshake className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Direct Tie-ups</span>
            </div>
          </div>
        </div>

        {/* Partners Grid - 4x2 Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Logo Container */}
              <div className="relative h-20 mb-4 flex items-center justify-center">
                <div className="relative w-full h-full max-w-28 mx-auto">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-contain object-center transition-all duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 112px, 128px"
                  />
                </div>
              </div>

              {/* Partner Info */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  {partner.category}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 group-hover:opacity-50 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-900">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Why Partner With Us?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              As authorized channel partners, we offer direct access to premium projects, 
              exclusive deals, and priority allocations. Our 17+ years of experience ensures 
              you get the best properties with complete transparency.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-900 {
          animation-delay: 900ms;
        }
      `}</style>
    </section>
  );
};

export default Partners;