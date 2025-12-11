import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";

const COURSES = [
  {
    id: "nahw",
    title: "Nahw",
    arabicTitle: "النحو",
    description: "Master Arabic grammar fundamentals and advanced grammatical structures. Learn sentence construction, verb conjugation, and syntax rules.",
  },
  {
    id: "balagha",
    title: "Balagha",
    arabicTitle: "بلاغة",
    description: "Explore Arabic rhetoric, literary expressions, and eloquence. Understand metaphors, similes, and stylistic devices in Arabic literature.",
  },
  {
    id: "sarf",
    title: "Sarf",
    arabicTitle: "الصرف",
    description: "Learn word formation and morphology. Understand root patterns, derivations, and how words are constructed in Arabic.",
  },
  {
    id: "quran",
    title: "Quran Recitation",
    arabicTitle: "تجويد القرآن",
    description: "Master the proper recitation of the Quran with tajweed rules. Learn correct pronunciation and Quranic Arabic.",
  },
  {
    id: "tafseer",
    title: "Tafseer",
    arabicTitle: "التفسير",
    description: "Understand the meaning and interpretation of Quranic verses. Explore historical context and classical scholarly approaches.",
  },
  {
    id: "hadith",
    title: "Hadith & Sunnah",
    arabicTitle: "الحديث والسنة",
    description: "Study the traditions and teachings of Prophet Muhammad. Learn authentic hadith collections and Islamic jurisprudence.",
  },
];

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-dark-green">Our</span>
            <span className="text-gold"> Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive Arabic language courses, designed to take you from beginner to advanced proficiency.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                arabicTitle={course.arabicTitle}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
