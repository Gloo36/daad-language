import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", course: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const courses = [
    "Nahw (Grammar)",
    "Balagha (Rhetoric)",
    "Sarf (Morphology)",
    "Quran Recitation",
    "Tafseer (Exegesis)",
    "Hadith & Sunnah",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-dark-green">Get in</span>
            <span className="text-gold"> Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-gold to-gold-dark rounded-xl shadow-lg p-8 text-white text-center">
              <div className="flex justify-center mb-4">
                <MessageCircle className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/201128222152"
                className="hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                +20 112 822 2152
              </a>
              <p className="text-sm mt-2 opacity-90">Quick messages & support</p>
            </div>

            <div className="bg-gradient-to-br from-dark-green to-dark-green-dark rounded-xl shadow-lg p-8 text-white text-center opacity-60">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="break-all">help@daaadlanguage.com</p>
              <p className="text-sm mt-2">Temporarily unavailable</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg p-8 text-white text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p>Online Classes</p>
              <p className="text-sm mt-2">Available worldwide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-dark-green mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-2">
                    Interested Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    placeholder="Tell us about your interest in learning Arabic..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-dark-green">Frequently Asked Questions</h2>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-dark-green mb-2">When do courses start?</h3>
                <p className="text-gray-600">
                  Courses are developed to launch soon. Subscribe to get notified when they become available with special early-bird pricing.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-dark-green mb-2">What's your teaching method?</h3>
                <p className="text-gray-600">
                  I use a structured, personalized curriculum that takes you from beginner to advanced at your own pace, with lessons tailored to your learning style.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-dark-green mb-2">Do you offer one-on-one lessons?</h3>
                <p className="text-gray-600">
                  Yes! All courses are conducted online with personalized attention. Contact us to discuss your specific learning goals.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-dark-green mb-2">Can I learn if I speak no Arabic?</h3>
                <p className="text-gray-600">
                  Absolutely! I specialize in teaching non-native speakers. I'm fluent in both Arabic and English and can teach in either language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
