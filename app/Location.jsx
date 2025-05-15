'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, X } from 'lucide-react';

const Contact = () => {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.fade-in-on-scroll').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const copyText = (text, label) => {
    navigator.clipboard.writeText(text);
    setToast(`${label} copied!`);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <section
      id="contact"
      className="bg-white py-10 px-6 sm:px-12 lg:px-20"
      aria-label="Contact Section"
    >
      <div className="max-w-6xl mx-auto text-center fade-in-on-scroll">
        <h2 className="text-4xl font-serif font-bold text-rose-600 tracking-wide mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          Whether you have a question, want to collaborate, or just say hello — I&apos;m here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto fade-in-on-scroll">
        {/* Email */}
        <div
          onClick={() => copyText('sagungautam546@gmail.com', 'Email')}
          className="cursor-pointer rounded-lg border border-rose-300 bg-rose-50 p-8 flex flex-col items-center text-rose-700 shadow-sm hover:shadow-md hover:bg-rose-100 transition"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && copyText('sagungautam546@gmail.com', 'Email')}
          aria-label="Copy email address"
        >
          <Mail className="w-10 h-10 mb-4" />
          <h3 className="font-semibold text-lg mb-1">Email</h3>
          <p className="text-sm font-mono break-words select-text">
            sagungautam546@gmail.com
          </p>
          <small className="mt-3 text-rose-400">Click to copy</small>
        </div>

        {/* Phone */}
        <div
          onClick={() => copyText('+977 9819189047, 9846765197', 'Phone Number')}
          className="cursor-pointer rounded-lg border border-rose-300 bg-rose-50 p-8 flex flex-col items-center text-rose-700 shadow-sm hover:shadow-md hover:bg-rose-100 transition"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && copyText('+977 9819189047, 9846765197', 'Phone Number')}
          aria-label="Copy phone numbers"
        >
          <Phone className="w-10 h-10 mb-4" />
          <h3 className="font-semibold text-lg mb-1">Phone</h3>
          <p className="text-sm font-mono break-words select-text">
            +977 9819189047, 9846765197
          </p>
          <small className="mt-3 text-rose-400">Click to copy</small>
        </div>

        {/* Location */}
        <div className="rounded-lg border border-rose-300 bg-rose-50 p-8 flex flex-col items-center text-rose-700 shadow-sm">
          <MapPin className="w-10 h-10 mb-4" />
          <h3 className="font-semibold text-lg mb-1">Location</h3>
          <p className="text-sm text-center">
            Malepatan-32, 33700 Pokhara
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-5xl mx-auto mt-20 rounded-xl overflow-hidden shadow-lg fade-in-on-scroll">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.0119775402804!2d84.10919847049823!3d28.114217572633414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995a30073d2b64d%3A0x82a99bb081547153!2sSagun%20home!5e0!3m2!1sen!2snp!4v1739279175152!5m2!1sen!2snp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-80 md:h-96"
          style={{ border: 0 }}
        />
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-toast z-50">
          <span>{toast}</span>
          <button
            aria-label="Close notification"
            onClick={() => setToast(null)}
            className="hover:text-rose-300 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes toastFade {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }
        .animate-toast {
          animation: toastFade 2.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
