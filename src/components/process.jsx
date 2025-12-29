"use client";
import React from "react";
import { 
  Users, 
  Home, 
  FileText, 
  FileCheck, 
  ClipboardCheck, 
  BadgeCheck, 
  Key 
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Client Consultation",
      description: "Understanding your requirements, budget, and preferences",
      icon: <Users className="w-6 h-6" />,
      color: "blue"
    },
    {
      id: 2,
      title: "Property Selection",
      description: "Shortlisting properties that match your criteria",
      icon: <Home className="w-6 h-6" />,
      color: "green"
    },
    {
      id: 3,
      title: "Site Visits",
      description: "Arranging property visits and providing expert guidance",
      icon: <FileText className="w-6 h-6" />,
      color: "purple"
    },
    {
      id: 4,
      title: "Documentation",
      description: "Handling all paperwork and legal documentation",
      icon: <FileCheck className="w-6 h-6" />,
      color: "orange"
    },
    {
      id: 5,
      title: "Loan Processing",
      description: "Assisting with home loan approval and processing",
      icon: <ClipboardCheck className="w-6 h-6" />,
      color: "red"
    },
    {
      id: 6,
      title: "Registration",
      description: "Completing property registration and legal formalities",
      icon: <BadgeCheck className="w-6 h-6" />,
      color: "indigo"
    },
    {
      id: 7,
      title: "Handover",
      description: "Final property handover with all necessary documents",
      icon: <Key className="w-6 h-6" />,
      color: "emerald"
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-500",
        light: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-500",
        light: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200"
      },
      purple: {
        bg: "bg-purple-500",
        light: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200"
      },
      orange: {
        bg: "bg-orange-500",
        light: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200"
      },
      red: {
        bg: "bg-red-500",
        light: "bg-red-50",
        text: "text-red-700",
        border: "border-red-200"
      },
      indigo: {
        bg: "bg-indigo-500",
        light: "bg-indigo-50",
        text: "text-indigo-700",
        border: "border-indigo-200"
      },
      emerald: {
        bg: "bg-emerald-500",
        light: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and efficient - our 7-step process ensures a smooth real estate journey
          </p>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const colorClasses = getColorClasses(step.color);
            
            return (
              <div 
                key={step.id}
                className={`flex items-start gap-4 p-6 rounded-xl ${colorClasses.light} border ${colorClasses.border} shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-full ${colorClasses.bg} text-white flex items-center justify-center flex-shrink-0`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className={`text-lg font-bold ${colorClasses.text} mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop/Tablet View - Vertical Timeline */}
        <div className="hidden md:block relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 rounded-full"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const colorClasses = getColorClasses(step.color);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.id}
                  className={`flex items-center gap-8 ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
                    <div className={`inline-block p-6 rounded-2xl ${
                      colorClasses.light
                    } border ${
                      colorClasses.border
                    } shadow-sm hover:shadow-md transition-all duration-300 max-w-md`}>
                      <h3 className={`text-xl font-bold ${
                        colorClasses.text
                      } mb-2`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Icon Only - No Numbers */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full ${
                      colorClasses.bg
                    } text-white flex items-center justify-center relative z-10 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1"></div>
                </div>
              );
            })}
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
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </section>
  );
};

export default Process;