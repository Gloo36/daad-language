import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  icon?: React.ReactNode;
}

export default function CourseCard({
  id,
  title,
  arabicTitle,
  description,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
      {/* Card Header with gradient */}
      <div className="bg-gradient-to-r from-gold to-dark-green p-6 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gold-light text-lg">{arabicTitle}</p>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Button */}
        <Link
          to={`/course/${id}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark-green text-white font-semibold rounded-lg hover:bg-dark-green-dark transition-all shadow-md hover:shadow-lg group"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
