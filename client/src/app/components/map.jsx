// components/Map.jsx
"use client";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

const Map = () => {
  const officeAddress = "Shop No. 21, Jeevan Jyot CHSL, Sai Jyot Apartment, Nr. Apollo Chemist, Gupte Road, Dombivli West - 421202";
  
  const openInGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Mahalaxmi+Enterprises+Gupte+Road+Dombivli+West", "_blank");
  };

  const openDirections = () => {
    window.open("https://maps.google.com/?daddr=Mahalaxmi+Enterprises+Gupte+Road+Dombivli+West", "_blank");
  };

  return (
    <section id="location" className="py-16 bg-[#FDF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5C3526]">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E06B23] to-[#8A4B2B]">
              Location
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C3526]/80">
            Visit our office in Dombivli West. We are easily accessible and always happy to welcome you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E06B23] to-[#8A4B2B] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-[#E9B23B]/30 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              
              {/* Map Header */}
              <div className="p-6 border-b border-[#E9B23B]/30 bg-gradient-to-r from-[#FFF6EE] to-white">
                <h3 className="text-xl font-bold text-[#5C3526] flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#E06B23]" />
                  Find Us on Map
                </h3>
                <p className="text-[#5C3526]/70 text-sm mt-1">
                  Mahalaxmi Enterprises, Dombivli West
                </p>
              </div>

              {/* Google Map Embed */}
              <div className="h-80 sm:h-96 md:h-[500px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.262332824959!2d73.08418817599615!3d19.216253247362343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7943b3c0a47a5%3A0x864bfd3d30b2c8b1!2sGupte%20Rd%2C%20Dombivli%2C%20Maharashtra%20421202!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahalaxmi Enterprises Office Location - Dombivli West"
                  style={{ border: 0 }}
                ></iframe>
              </div>

              {/* Map Actions */}
              <div className="p-4 bg-white border-t border-[#E9B23B]/30 flex flex-wrap gap-3 justify-center">
                <button
                  onClick={openInGoogleMaps}
                  className="px-6 py-3 bg-gradient-to-r from-[#E06B23] to-[#8A4B2B] text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:opacity-95 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                >
                  <FaMapMarkerAlt className="text-lg" />
                  Open in Google Maps
                </button>
                
                <button
                  onClick={openDirections}
                  className="px-6 py-3 bg-white border border-[#E9B23B] text-[#5C3526] rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base hover:bg-[#FFF6EE]"
                >
                  <FaDirections className="text-lg" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            
            {/* Office Address Card */}
            <div className="bg-white rounded-2xl border border-[#E9B23B]/30 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-[#5C3526] mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#E06B23]" />
                Office Address
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#E06B23] to-[#8A4B2B] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[#5C3526] font-semibold">Main Office</p>
                    <p className="text-[#5C3526]/70 text-sm mt-1 leading-relaxed">
                      {officeAddress}
                    </p>
                  </div>
                </div>

                <div className="bg-[#FFF6EE] rounded-lg p-4 border border-[#E9B23B]/30">
                  <h4 className="font-semibold text-[#5C3526] text-sm mb-2">Landmarks:</h4>
                  <ul className="text-[#5C3526]/70 text-sm space-y-1">
                    <li>• Near Apollo Chemist</li>
                    <li>• Gupte Road, Dombivli West</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation Info */}
            <div className="bg-white rounded-2xl border border-[#E9B23B]/30 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-[#5C3526] mb-4">How to Reach</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-[#FFF6EE] rounded-lg border border-[#E9B23B]/30">
                  <span className="text-[#5C3526] font-medium">From Dombivli Station</span>
                  <span className="text-[#E06B23] font-bold">10 min</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-[#FFF6EE] rounded-lg border border-[#E9B23B]/30">
                  <span className="text-[#5C3526] font-medium">From Kalyan Station</span>
                  <span className="text-[#E06B23] font-bold">15 min</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-[#FFF6EE] rounded-lg border border-[#E9B23B]/30">
                  <span className="text-[#5C3526] font-medium">From Thane Station</span>
                  <span className="text-[#E06B23] font-bold">25 min</span>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-gradient-to-r from-[#E06B23] to-[#8A4B2B] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Visitor Information</h3>
              <ul className="text-white/90 text-sm space-y-2">
                <li>✅ Free consultation</li>
                <li>✅ Site visit arrangements</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-[#E9B23B]/30 p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#E06B23] to-[#8A4B2B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#5C3526] mb-2">Prime Location</h4>
            <p className="text-[#5C3526]/70 text-sm">Centrally located in Dombivli West with easy access from all areas</p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E9B23B]/30 p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#E06B23] to-[#8A4B2B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDirections className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#5C3526] mb-2">Easy to Find</h4>
            <p className="text-[#5C3526]/70 text-sm">Well-known landmark with clear directions and signage</p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E9B23B]/30 p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#E06B23] to-[#8A4B2B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#5C3526] mb-2">Multiple Routes</h4>
            <p className="text-[#5C3526]/70 text-sm">Accessible via multiple transportation options and routes</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Map;