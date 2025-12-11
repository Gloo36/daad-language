import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">
              <span className="text-gold">Daad</span> Language
            </h3>
            <p className="text-gray-300 text-sm">
              Learn Arabic & Quran with a certified online instructor
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <a
              href="https://wa.me/201128222152"
              className="flex items-center gap-2 hover:text-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>+20 112 822 2152</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>help@daaadlanguage.com</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <a href="#privacy" className="hover:text-gold transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gold transition-colors text-sm">
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="border-t border-dark-green-light pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} DaaadLanguage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
