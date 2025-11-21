"use client";
import React from "react";
import Image from "next/image";
import CertificateModal from "./certificate"; // ⭐ ADDED

export default function Hero() {

  const [showCertificate, setShowCertificate] = React.useState(false); // ⭐ ADDED

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden -mt-16 pb-7">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Premium Real Estate Services in Kalyan Dombivli Thane"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />

        {/* ⭐ FIXED OVERLAY FOR PERFECT TEXT VISIBILITY */}
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Floating Home Icons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float animation-delay-1000">
          <svg
            className="w-8 h-8 text-white/40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>

        <div className="absolute top-40 right-20 animate-float animation-delay-2000">
          <svg
            className="w-6 h-6 text-white/40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>

        <div className="absolute bottom-40 left-20 animate-float animation-delay-3000">
          <svg
            className="w-10 h-10 text-white/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-32 animate-float animation-delay-1500">
          <svg
            className="w-7 h-7 text-white/35"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full pt-20">
        {/* Premium Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-10 border border-white/30 animate-fade-in-down">
          <div className="flex space-x-1 mr-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="text-yellow-400 text-sm sm:text-base animate-pulse"
                style={{ animationDelay: `${star * 0.1}s` }}
              >
                ⭐
              </span>
            ))}
          </div>
          <span className="text-white font-semibold text-sm sm:text-base">
            Premium Services
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
          <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Find Your Dream Home
          </span>

          <span className="block text-white text-2xl sm:text-3xl lg:text-4xl font-light drop-shadow-lg">
            in <span className="text-[#5be9ff] font-bold">Kalyan</span> –
            <span className="text-[#94ff9d] font-bold"> Dombivli</span> –
            <span className="text-[#7db7ff] font-bold"> Thane</span>
          </span>
        </h1>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow">
            <span className="font-semibold text-yellow-300">17+ years</span> of
            trusted real estate consultancy —
            <span className="text-[#5be9ff] font-medium"> Residential</span>,
            <span className="text-[#94ff9d] font-medium"> Commercial</span> &
            <span className="text-[#d7b0ff] font-medium"> Rentals</span> with
            end-to-end support.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in-up animation-delay-500">

          {/* ⭐ UPDATED BUTTON — ADDED ONLY onClick */}
          <button 
            onClick={() => setShowCertificate(true)} 
            className="group bg-[#FF7A00] hover:bg-[#E96A00] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">View Certificate →</span>
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/9987835035?text=Hello%20Mahalaxmi%20Enterprises%2C%20I%20am%20interested%20in%20your%20real%20estate%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 border border-[#FF7A00] text-white hover:bg-[#FF7A00]/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12a11.85 11.85 0 001.66 6.02L0 24l6.19-1.63A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.17-1.23-6.16-3.48-8.52zM12 22c-1.97 0-3.84-.57-5.47-1.63l-.39-.24-3.67.96.98-3.57-.25-.41A9.87 9.87 0 012 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.48 10-10 10zm5.11-7.53c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.91 1.09-.17.19-.34.21-.62.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.28.29-.47.1-.19.05-.36-.02-.51-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.46 0 1.45 1.02 2.85 1.16 3.05.14.19 2.01 3.2 4.88 4.49.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.06-.11-.25-.18-.53-.32z" />
            </svg>
            Connect on WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto animate-fade-in-up animation-delay-700">
          {[
            {
              number: "500+",
              label: "Properties",
              color: "from-orange-400 to-pink-500",
            },
            {
              number: "17+",
              label: "Years Experience",
              color: "from-cyan-400 to-blue-500",
            },
            {
              number: "98%",
              label: "Customer Satisfaction",
              color: "from-green-400 to-emerald-500",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div
                className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-white/85 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal ⭐ ADDED */}
      {showCertificate && (
        <CertificateModal onClose={() => setShowCertificate(false)} />
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease forwards;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}
