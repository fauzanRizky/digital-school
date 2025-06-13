import { ArrowRight } from "lucide-react";
import SmallTitle from "./small-title";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] w-full bg-gray-50 flex items-center justify-center px-4">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-10">
        {/* Welcome Badge */}
        <SmallTitle title="Welcome to Digital School" />

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
          <Button className="inline-flex items-center gap-2 px-6 py-3  rounded-full font-medium hover:bg-gray-800 transition-colors">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="inline-flex items-center gap-2 px-6 py-3  rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            See All Features
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
