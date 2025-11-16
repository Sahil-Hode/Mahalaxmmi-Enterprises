// components/Member.jsx - Simple Single Image Version
"use client";
import React from "react";
import Image from "next/image";

export default function Member() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Our Accreditations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Authenticated with HATIDUAL & Association of REALTORS-TIDIA
          </p>
        </div>

        {/* Single Image Display */}
        <div className="flex justify-center">
          <div className="relative h-48 sm:h-56 w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/member.png" // Update with your actual image path
              alt="HATIDUAL and REALTORS-TIDIA Certification"
              fill
              className="object-contain object-center p-4"
              priority
            />
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 font-medium">
            Trusted Real Estate Services with Verified Credentials
          </p>
        </div>
      </div>
    </section>
  );
}