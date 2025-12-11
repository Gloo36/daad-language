import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Book, Users, Award } from "lucide-react";

export default function About() {
  const instructorImg = `${import.meta.env.BASE_URL}Jalal_Arabic_instructor.jpg`;
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-dark-green">Meet Your</span>
            <br />
            <span className="text-gold">Arabic Instructor</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Instructor Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-dark-green rounded-2xl blur-3xl opacity-20"></div>
                <img
                  src={instructorImg}
                  alt="Jalal Ali - Arabic Instructor"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-dark-green mb-2">Jalal Ali</h2>
              <p className="text-xl text-gold font-semibold mb-6">Certified Online Arabic Instructor</p>
              <p className="text-lg font-semibold text-gray-700 mb-4">HSD Arabic Certification: 78.5/80</p>

              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  I'm passionate about helping non-Arabic speakers master one of the world's most beautiful languages. With specialized expertise in traditional Arabic studies combined with modern teaching methods, I guide students through a personalized learning journey.
                </p>

                <p className="leading-relaxed">
                  My teaching philosophy is simple: Arabic should be accessible, engaging, and personalized. Whether you're a complete beginner or advancing your proficiency, I create a curriculum tailored to your pace and goals.
                </p>
              </div>

              <div className="mt-8">
                <p className="font-semibold text-dark-green mb-4">Languages: Arabic • English (TOEFL iBT Certified)</p>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/201128222152"
                    className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-dark-green mb-8 text-center">Expertise & Specialization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-gold pl-6 py-4">
                <h3 className="text-xl font-bold text-dark-green mb-2">Nahw (Grammar)</h3>
                <p className="text-gray-600">
                  Master Arabic grammatical structures, sentence construction, verb conjugation, and syntax rules.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6 py-4">
                <h3 className="text-xl font-bold text-dark-green mb-2">Balagha (Rhetoric)</h3>
                <p className="text-gray-600">
                  Explore Arabic literary expressions, eloquence, metaphors, similes, and stylistic devices.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6 py-4">
                <h3 className="text-xl font-bold text-dark-green mb-2">Sarf (Morphology)</h3>
                <p className="text-gray-600">
                  Understand word formation, root patterns, derivations, and how words are constructed.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6 py-4">
                <h3 className="text-xl font-bold text-dark-green mb-2">Quran & Tafseer</h3>
                <p className="text-gray-600">
                  Learn proper Quranic recitation with tajweed rules and explore Quranic interpretation.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6 py-4">
                <h3 className="text-xl font-bold text-dark-green mb-2">Arabic Literature</h3>
                <p className="text-gray-600">
                  Study classical and modern Arabic literature with cultural and historical context.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6 py-4">
                <h3 className="text-xl font-bold text-dark-green mb-2">Hadith & Sunnah</h3>
                <p className="text-gray-600">
                  Explore authentic hadith collections and Islamic jurisprudence based on Sunnah.
                </p>
              </div>
            </div>
          </section>

          {/* Teaching Approach */}
          <section className="mb-16 bg-gradient-to-r from-gold/10 to-dark-green/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-dark-green mb-8 text-center">My Teaching Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-gold" />
                </div>
                <h3 className="font-bold text-dark-green mb-2">Certified & Experienced</h3>
                <p className="text-gray-600 text-sm">
                  HSD Arabic certified with proven teaching expertise.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-gold" />
                </div>
                <h3 className="font-bold text-dark-green mb-2">Personalized Curriculum</h3>
                <p className="text-gray-600 text-sm">
                  Each student gets a customized learning path.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Book className="w-12 h-12 text-gold" />
                </div>
                <h3 className="font-bold text-dark-green mb-2">Structured Learning</h3>
                <p className="text-gray-600 text-sm">
                  Clear progression from beginner to advanced.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-gold" />
                </div>
                <h3 className="font-bold text-dark-green mb-2">Bilingual Support</h3>
                <p className="text-gray-600 text-sm">
                  Teach in Arabic, English, or both as needed.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-dark-green mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join students worldwide who are mastering Arabic with a personalized, expert-led approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all"
              >
                Explore Courses
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-dark-green text-dark-green font-semibold rounded-lg hover:bg-dark-green hover:text-white transition-all"
              >
                Get in Touch
              </a>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
