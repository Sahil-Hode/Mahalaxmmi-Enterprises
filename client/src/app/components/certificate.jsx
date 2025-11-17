"use client";
import React from "react";
import Image from "next/image";

export default function CertificateModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center"
      onClick={onClose} // Backdrop click closes modal
    >
      {/* Modal content container - stops propagation */}
      <div
        className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop close when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose} // Direct close handler
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white 
          w-10 h-10 rounded-full flex items-center justify-center 
          text-2xl font-bold z-50 transition cursor-pointer"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-white text-2xl font-bold mb-4 tracking-wide">
          RERA Certificate
        </h2>

        {/* Image wrapper */}
        <div className="relative w-full max-w-5xl h-[85vh]">
          <Image
            src="/images/Rera Certificate-More anushka.jpg"
            alt="RERA Certificate"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}