"use client";
import React from "react";
import {
  Home,
  Building2,
  Building,
  Landmark,
  FileCheck,
  KeyRound,
  Wallet,
  HandCoins,
} from "lucide-react";
import { seoConfig } from '@/app/seo-config';

export async function generateMetadata() {
  return seoConfig.generatePageMetadata('services');
}

export default function Services() {
  const services = [
    {
      title: "Buying & Selling",
      icon: <Home className="w-12 h-12 text-blue-600" />,
      desc: "Resale + New Properties - 1RK, 1BHK, 2BHK, 3BHK, 4BHK & 5BHK Flats with complete assistance.",
      color: "blue",
    },
    {
      title: "Flats & Apartments",
      icon: <Building2 className="w-12 h-12 text-green-600" />,
      desc: "Resale & new launch flats with verified listings and hassle-free site visit arrangements.",
      color: "green",
    },
    {
      title: "Commercial Properties",
      icon: <Building className="w-12 h-12 text-purple-600" />,
      desc: "Shops, offices, galas - commercial buy, sell & rental services for all business needs.",
      color: "purple",
    },
    {
      title: "Plots, Bungalows & Villas",
      icon: <Landmark className="w-12 h-12 text-orange-600" />,
      desc: "Open plots, row houses, bungalows and luxury villas available across prime locations.",
      color: "orange",
    },
    {
      title: "New Construction – NO BROKERAGE",
      icon: <HandCoins className="w-12 h-12 text-emerald-600" />,
      desc: "Zero brokerage for all new construction bookings. Free site visits and all builder tie-ups.",
      color: "emerald",
    },
    {
      title: "Rental & Agreement Services",
      icon: <KeyRound className="w-12 h-12 text-cyan-600" />,
      desc: "Rental flats, shops, offices with leave & license agreements and e-registration support.",
      color: "cyan",
    },
    {
      title: "Documentation & Registration",
      icon: <FileCheck className="w-12 h-12 text-pink-600" />,
      desc: "Sale agreements, NOC, registry, Index II, clearance — complete legal documentation help.",
      color: "pink",
    },
    {
      title: "Loans & Financial Services",
      icon: <Wallet className="w-12 h-12 text-indigo-600" />,
      desc: "Housing, mortgage & project loans with top banks — balance transfer & top-up support.",
      color: "indigo",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        hover: "hover:border-blue-400",
        iconBg: "bg-blue-100"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        hover: "hover:border-green-400",
        iconBg: "bg-green-100"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        hover: "hover:border-purple-400",
        iconBg: "bg-purple-100"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        hover: "hover:border-orange-400",
        iconBg: "bg-orange-100"
      },
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        hover: "hover:border-emerald-400",
        iconBg: "bg-emerald-100"
      },
      cyan: {
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        hover: "hover:border-cyan-400",
        iconBg: "bg-cyan-100"
      },
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-200",
        hover: "hover:border-pink-400",
        iconBg: "bg-pink-100"
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        hover: "hover:border-indigo-400",
        iconBg: "bg-indigo-100"
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 mx-auto">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete real estate solutions for <span className="font-semibold text-blue-600">Residential</span>,{" "}
            <span className="font-semibold text-green-600">Commercial</span> &{" "}
            <span className="font-semibold text-purple-600">Investment</span> properties
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`relative rounded-2xl border-2 ${colorClasses.border} ${colorClasses.bg} ${colorClasses.hover} p-8 shadow-lg transition-all duration-300 hover:shadow-xl group animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`flex justify-center mb-6 p-4 rounded-2xl ${colorClasses.iconBg} transition-all duration-300 group-hover:scale-110`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed text-center">
                  {service.desc}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current group-hover:opacity-20 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        
      </div>

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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}