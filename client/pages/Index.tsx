import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructorSection";
import CourseCard from "@/components/CourseCard";
import { Link } from "react-router-dom";

const FEATURED_COURSES = [
  {
    id: "nahw",
    title: "Nahw",
    arabicTitle: "النحو",
    description: "Master Arabic grammar fundamentals and advanced grammatical structures.",
  },
  {
    id: "balagha",
    title: "Balagha",
    arabicTitle: "بلاغة",
    description: "Explore Arabic rhetoric, literary expressions, and eloquence.",
  },
  {
    id: "sarf",
    title: "Sarf",
    arabicTitle: "الصرف",
    description: "Learn word formation and morphology in Arabic.",
  },
  {
    id: "quran",
    title: "Quran Recitation",
    arabicTitle: "تجويد القرآن",
    description: "Master proper Quranic recitation with tajweed rules.",
  },
  {
    id: "tafseer",
    title: "Tafseer",
    arabicTitle: "التفسير",
    description: "Understand Quranic meanings and classical interpretations.",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Instructor Section */}
      <InstructorSection />

      {/* Featured Courses Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-dark-green">Featured</span>
              <span className="text-gold"> Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive selection of Arabic language courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {FEATURED_COURSES.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                arabicTitle={course.arabicTitle}
                description={course.description}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              className="inline-block px-8 py-4 bg-dark-green text-white font-semibold rounded-lg hover:bg-dark-green-dark transition-all shadow-lg hover:shadow-xl"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-dark-green">Ready to Start Your</span>
            <br />
            <span className="text-gold">Arabic Learning Journey?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe now and be among the first students when courses launch, with special early-bird discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 border-2 border-dark-green text-dark-green font-semibold rounded-lg hover:bg-dark-green hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
