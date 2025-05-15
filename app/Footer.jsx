import React from "react";
import { Instagram, Linkedin, Facebook, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Icons */}
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://www.instagram.com/sagun_gautam_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-feminine-pink transition-colors duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>

              <a
                href="https://www.facebook.com/sagun.gautam.735"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-feminine-pink transition-colors duration-300 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Sagun Gautam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
