"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  User,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    // Send Email (Next.js API)
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }

    setLoading(false);
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-orange-600" />,
      title: "Call Us",
      detail: "+91 7208814876",
      subtitle: "Mon-Sun: 9AM - 8PM",
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-600" />,
      title: "Email Us",
      detail: "sarthakmore0803@gmail.com",
      subtitle: "We'll respond quickly",
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-600" />,
      title: "Visit Office",
      detail:
        "Shop No. 21, Jeevan Jyot CHSL, Sai Jyot Apartment, Nr. Apollo Chemist, Gupte Road, Dombivli (W)",
      subtitle: "Dombivli 421202",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200 mb-6">
            <MessageCircle className="w-5 h-5 text-orange-600" />
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to find your dream property? Get in touch with our expert team
            for personalized guidance and support.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                Quick Response
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <User className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">
                Expert Consultation
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Send className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Free Service
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-800 font-medium">{info.detail}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
                    outline-none transition-all duration-300 cursor-text
                    text-gray-900 bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
                    outline-none transition-all duration-300 cursor-text
                    text-gray-900 bg-white"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
                    outline-none transition-all duration-300 cursor-text
                    text-gray-900 bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
                    outline-none transition-all duration-300 resize-none h-40 cursor-text
                    text-gray-900 bg-white"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>

              {/* Form Status - FIXED: Using div instead of p to avoid nesting div inside p */}
              <div className="mt-6">
                {status === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <div className="text-green-700 font-medium flex items-center justify-center gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-1 border-b-2 border-r-2 border-white transform rotate-45 -translate-y-0.5"></div>
                      </div>
                      Message sent successfully! Our team will contact you soon.
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                    <div className="text-red-700 font-medium flex items-center justify-center gap-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        !
                      </div>
                      Something went wrong. Please try again.
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}