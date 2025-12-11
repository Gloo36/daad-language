import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('/background_at_top_of_page.jpg')",
          backgroundPosition: 'right center',
        }}
      />
      
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent"></div>

      {/* Content Container - 2 Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 backdrop-blur-sm bg-white/10 p-8 md:p-12 rounded-2xl shadow-2xl lg:text-left text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Learn Arabic & Quran with a Certified Online Instructor
            </h1>

            <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-md font-medium">
              Modern, structured, and personalized Arabic learning for non-Arabic speakers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 lg:justify-start justify-center">
              <Link
                to="/courses"
                className="inline-block px-8 py-4 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl text-center text-white hover:scale-105 transform duration-200"
                style={{ backgroundColor: '#C9A227' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B39120'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C9A227'}
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 border-2 font-semibold rounded-lg transition-all text-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white hover:scale-105 transform duration-200"
                style={{ borderColor: '#0B3D2E' }}
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-6 lg:justify-start justify-center">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C9A227' }}></div>
                <span className="text-white font-medium drop-shadow">Certified Instructor</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C9A227' }}></div>
                <span className="text-white font-medium drop-shadow">Personalized Learning</span>
              </div>
            </div>
          </div>

          {/* Right Column: Empty space for background image subjects */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
