export default function InstructorSection() {
  const instructorImg = `${import.meta.env.BASE_URL}Jalal_Arabic_instructor.jpg`;
  
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-dark-green rounded-2xl blur-3xl opacity-20"></div>
              <img
                src={instructorImg}
                alt="Jalal Ali - Certified Arabic Instructor"
                className="relative w-full max-w-md rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-dark-green">About Your</span>
                <br />
                <span className="text-gold">Instructor</span>
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-dark-green">
                Jalal Ali
              </h3>
              <p className="text-lg">
                <strong>Certified Online Arabic Instructor</strong> (HSD Arabic 78.5/80)
              </p>

              <p>
                I specialize in helping non-Arabic speakers master the language through a structured, customized curriculum. My teaching approach breaks down complex concepts into manageable lessons, guiding you from beginner to advanced proficiency at your own pace.
              </p>

              <p>
                <strong>My Expertise:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span><strong>Nahw (Grammar)</strong> - Master Arabic grammatical structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span><strong>Balagha (Rhetoric)</strong> - Understand Arabic literary expressions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span><strong>Sarf (Morphology)</strong> - Learn word formation and patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span><strong>Quran Recitation & Tafseer</strong> - Recite and understand the Quran</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span><strong>Arabic Literature</strong> - Explore classical and modern works</span>
                </li>
              </ul>

              <p className="pt-2">
                <strong>Languages:</strong> TOEFL iBT certified | Fluent in Arabic & English
              </p>

              <p className="italic text-gray-600 pt-4">
                "I believe that learning Arabic should be personalized, practical, and enjoyable. I work with each student to create a clear path to fluency."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
