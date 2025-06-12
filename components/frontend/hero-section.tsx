import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Welcome Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-sm text-gray-600 font-medium">
            Welcome to Lucis
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          Simplify Your Video
          <br />
          Production With Lucis
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Lucis empowers you to create stunning videos with precision and ease,
          all within a sleek and intuitive interface.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            Try for free
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            See features
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
