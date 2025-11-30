"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle, FileCheck, MapPin, Handshake } from "lucide-react";

import { seoConfig } from '@/app/seo-config';

export async function generateMetadata() {
  return seoConfig.generatePageMetadata('about');
}
export default function About() {
  const features = [
    {
      icon: <FileCheck className="w-6 h-6 text-purple-600" />,
      text: "MahaRERA Registered – A011332500959"
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-600" />,
      text: "Deep expertise in Kalyan–Dombivli–Thane region"
    },
    {
      icon: <Handshake className="w-6 h-6 text-emerald-600" />,
      text: "Strong network with all major developers"
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.png"
                alt="Mahalaxmmi Enterprises - Trusted Real Estate Consultancy"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="animate-fade-in-right space-y-8">
            
            {/* Centered Header: Icon + "About Us" + Line */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c6 6.75 6 11.25 6 15 0 0 0 0 0 0m0 0h1.5A5.97 5.97 0 0121 12c0-1.29-.54-2.51-1.38-3.35a6.001 6.001 0 00-7.62-7.62C9.54 1.5 8.32 2.04 7.5 3.042m1.5 0h1.5" />
                  </svg>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">About Us</h2>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                <span className="font-semibold text-blue-600">Mahalaxmmi Enterprises</span> is a trusted real estate consultancy working since 2011, backed by <span className="font-semibold">17+ years</span> of industry experience.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                We specialize in <span className="font-semibold text-green-600">Residential</span>, <span className="font-semibold text-purple-600">Commercial</span> & <span className="font-semibold text-orange-600">Rental</span> services across Kalyan, Dombivli & Thane, offering customers 100% transparent, reliable and stress-free property solutions.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                From property search to final registration, we guide you through every step with <span className="font-semibold">professionalism, honesty and deep local expertise</span>.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 font-medium text-sm sm:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Since 2011
              </div>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                RERA Certified
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Trusted Partner
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}