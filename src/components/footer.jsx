// Footer.jsx
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaHandshake,
  FaBuilding,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND SECTION */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500">
              Mahalaxmmi Enterprises
            </h3>
            <p className="text-gray-400 text-sm mt-1 mb-4">
              Real Estate Agency
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Trusted Real Estate Consultants with 17+ years of experience in
              Residential, Commercial, Rentals & New Construction.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Serving Kalyan – Dombivli – Thane with transparency & honesty.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-md p-3 inline-flex items-center gap-2">
              <FaCheckCircle className="text-orange-500" />
              <p className="text-orange-500 text-sm font-medium">
                MahaRERA Registered: A011332500959
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { name: "Home", url: "#" },
                { name: "About Us", url: "#about" },
                { name: "Services", url: "#services" },
                { name: "Process", url: "#process" },
                { name: "Map", url: "#location" },
                { name: "Authorized Partners", url: "#partners" },
                { name: "Listed Banks", url: "#banks"},
                { name: "Contact Us", url: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-orange-500 transition-all duration-200 flex items-center group"
                  >
                    <FaArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFORMATION */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Contact Information
            </h4>

            <div className="space-y-4 text-sm">
              {/* ADDRESS */}
              <div>
                <h5 className="text-gray-400 font-medium mb-1">Office Address</h5>
                <p className="text-gray-300 leading-relaxed">
                  Shop No. 21, Jeevan Jyot CHSL, <br />
                  Sai Jyot Apartment, Nr. Apollo Chemist, <br />
                  Gupte Road, Dombivli (W) – 421202
                </p>
              </div>

              {/* PHONES */}
              <div>
                <h5 className="text-gray-400 font-medium mb-1">Phone Numbers</h5>
                {[
                  { number: "72088 14876", tel: "tel:+917208814876" },
                  { number: "81082 66910", tel: "tel:+918108266910" },
                  { number: "91364 20488", tel: "tel:+917208814876" }
                ].map((phone) => (
                  <a 
                    href={phone.tel} 
                    key={phone.number}
                    className="text-gray-300 flex items-center gap-2 hover:text-orange-500 transition-colors"
                  >
                    <FaPhoneAlt className="text-orange-500" /> {phone.number}
                  </a>
                ))}
                <a 
                  href="https://wa.me/919987835035" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 flex items-center gap-2 hover:text-green-500 transition-colors"
                >
                  <FaWhatsapp className="text-green-500" /> WhatsApp: 9987835035
                </a>
              </div>

              {/* EMAIL */}
              <div>
                <h5 className="text-gray-400 font-medium mb-1">Email</h5>
                <a 
                  href="mailto:sarthakmore0803@gmail.com"
                  className="text-gray-300 flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <FaEnvelope className="text-blue-400" /> sarthakmore0803@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* SOCIAL + TRUST BADGES */}
          <div>
            {/* SOCIAL LINKS */}
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Follow Us
            </h4>

            <div className="flex space-x-4 mb-8">
              {[
                { 
                  icon: <FaInstagram />, 
                  url: "https://instagram.com/shree_mahalaxmi_estate_agency", 
                  label: "Instagram" 
                },
                { 
                  icon: <FaFacebook />, 
                  url: "https://facebook.com/anushka.more.908", 
                  label: "Facebook" 
                },
                { 
                  icon: <FaWhatsapp />, 
                  url: "https://wa.me/919987835035", 
                  label: "WhatsApp" 
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* TRUST BADGES */}
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Why Choose Us
            </h4>

            <div className="space-y-3">
              {[
                { text: "17+ Years Experience", icon: <FaStar /> },
                { text: "RERA Registered", icon: <FaCheckCircle /> },
                { text: "Member of NAR India", icon: <FaHandshake /> },
                { text: "Kalyan–Dombivli Realtor Association", icon: <FaBuilding /> },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#141414] border border-gray-800 rounded-full px-4 py-2 text-center text-sm text-gray-300 hover:border-orange-500 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-gray-500 text-sm">
          <p>© 2025 Mahalaxmi Enterprises. All Rights Reserved.</p>
          <p className="mt-1">Designed & Developed by Innovox Software Solutions.</p>
        </div>
      </div>
    </footer>
  );
}