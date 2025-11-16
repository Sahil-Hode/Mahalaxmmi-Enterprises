"use client";
import React from "react";
import Image from "next/image";
import { Building2, ShieldCheck, Handshake } from "lucide-react";

export default function Banks() {
  const banks = [
    {
      name: "HDFC Bank",
      src: "/images/hdfc.jpg",
      category: "Home Loan Partner"
    },
    {
      name: "SBI – State Bank of India",
      src: "/images/sbi.png",
      category: "Government Bank"
    },
    {
      name: "ICICI Bank",
      src: "/images/icici.jpg",
      category: "Private Bank"
    },
    {
      name: "Aditya Birla Capital",
      src: "/images/aditya.jpg",
      category: "Financial Services"
    },
  ];

  return (
    <section id="banks" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-6 py-3 shadow-sm border border-gray-200 mb-6">
            <Building2 className="w-5 h-5 text-orange-600" />
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
              Banking Partners
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Listed Banking
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partnered with leading banks and financial institutions to provide you with the best home loan options and financial solutions
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Low Interest Rates</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Handshake className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Quick Approval</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Top Banks</span>
            </div>
          </div>
        </div>

        {/* Banks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm hover:shadow-lg hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Logo Container */}
              <div className="relative h-28 mb-6 flex items-center justify-center">
                <div className="relative w-full h-full max-w-36 mx-auto">
                  <Image
                    src={bank.src}
                    alt={`${bank.name} Logo`}
                    fill
                    className="object-contain object-center transition-all duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 144px, 160px"
                  />
                </div>
              </div>

              {/* Bank Info */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 text-lg mb-2 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                  {bank.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {bank.category}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 group-hover:opacity-50 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Loan Services Section */}
        
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
}