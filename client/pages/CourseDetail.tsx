import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, ArrowLeft } from "lucide-react";

export default function CourseDetail() {
  const { courseId } = useParams();

  const COURSE_NAMES: Record<string, { name: string; arabic: string }> = {
    nahw: { name: "Nahw (Grammar)", arabic: "النحو" },
    balagha: { name: "Balagha (Rhetoric)", arabic: "بلاغة" },
    sarf: { name: "Sarf (Morphology)", arabic: "الصرف" },
    quran: { name: "Quran Recitation", arabic: "تجويد القرآن" },
    tafseer: { name: "Tafseer (Exegesis)", arabic: "التفسير" },
    hadith: { name: "Hadith & Sunnah", arabic: "الحديث والسنة" },
  };

  const course = COURSE_NAMES[courseId || ""];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/courses" className="inline-flex items-center gap-2 text-dark-green hover:text-gold transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gold/10 to-dark-green/10 rounded-2xl p-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-dark-green">{course?.name || "Course"}</span>
              <br />
              <span className="text-gold">{course?.arabic}</span>
            </h1>

            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
              This course is currently being developed. Subscribe now to be among the first students with a special discount!
            </p>

            {/* CTA Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-dark-green mb-6">Be the First to Know</h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/201128222152"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp: +20 112 822 2152
                </a>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all">
                  <Mail className="w-5 h-5" />
                  Get Notified
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-gold text-3xl font-bold mb-2">🎯</div>
                <h3 className="text-lg font-semibold text-dark-green mb-2">Structured Learning</h3>
                <p className="text-gray-600">Clear progression from basics to advanced concepts</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-gold text-3xl font-bold mb-2">👨‍🏫</div>
                <h3 className="text-lg font-semibold text-dark-green mb-2">Expert Instruction</h3>
                <p className="text-gray-600">Learn from a certified, experienced instructor</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-gold text-3xl font-bold mb-2">🎓</div>
                <h3 className="text-lg font-semibold text-dark-green mb-2">Personalized Path</h3>
                <p className="text-gray-600">Curriculum tailored to your learning pace and goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
