import {
  BookOpen,
  Bus,
  ClipboardList,
  DollarSign,
  GraduationCap,
  MessageSquare,
  Users,
} from "lucide-react";
import SectionHeader from "./section-header";
import Image from "next/image";

const featureSection = [
  {
    title: "Student Information System",
    description:
      "Centralized student data management with digital enrollment, profile tracking and academic records in one secure location.",
    icon: Users,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Academic Excellence Suite",
    description:
      "Comprehensive tools for curiculum planning, examination management, and automated grading with detailed performance analytics.",
    icon: GraduationCap,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Smart Communitacion Hub",
    description:
      "Multi channel messaging platform connecting students, teachers, and parents withh real-time updates and notifications.",
    icon: MessageSquare,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Financial Management Center",
    description:
      "Streamlined fee collection, automated billing, and comprehensive financial reporting with secure payment processing.",
    icon: DollarSign,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Staff & HR Management",
    description:
      "Complete staff administration with attendance tracking, performance management, and automated payroll processing.",
    icon: ClipboardList,
    image: "/images/placeholder.jpg",
  },

  {
    title: "Transport & Safety Control",
    description:
      "Real-time fleet tracking, route optimization, and automated parent notfications for secure student transportation.",
    icon: Bus,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Resource & Facilityy Manager",
    description:
      "Digital library system, inventory tracking, and smart scheduling tools form optima resource utilization.",
    icon: BookOpen,
    image: "/images/placeholder.jpg",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <SectionHeader
          title="Features"
          heading="All-in-one Digital School Management System"
          description="Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions."
        />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Video Editing */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {featureSection[0].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {featureSection[0].description}
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <div className="bg-gray-100 border-b border-gray-200 p-3">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700">
                      AI Video Editing
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-100 border-r border-gray-200 flex flex-col items-center py-2 space-y-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                      >
                        <span className="text-xs text-gray-500">{i}</span>
                      </div>
                    ))}
                  </div>
                  <Image
                    src={featureSection[0].image}
                    width={600}
                    height={400}
                    alt={featureSection[0].title}
                    className="rounded ml-16"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* AI Video Generation */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {featureSection[1].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {featureSection[1].description}
              </p>
              <div className="">
                <Image
                  src={featureSection[1].image}
                  width={600}
                  height={400}
                  alt={featureSection[1].title}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Intuitive Dashboard */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Intuitive Dashboard
              </h3>
              <p className="text-gray-600 mb-6">
                Access all video editing tools and features through a
                user-friendly, customizable interface.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <div className="bg-gray-100 border-b border-gray-200 p-3">
                  <p className="text-sm font-medium text-gray-700">
                    Welcome Thaer,
                  </p>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">
                      Generate AI Video from Text
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      Input your text, and generate a video with our advanced
                      AI.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-100 rounded p-2 text-center">
                        <span className="text-xs">AI Video Editor</span>
                      </div>
                      <div className="bg-gray-100 rounded p-2 text-center">
                        <span className="text-xs">AI Music Generator</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">
                      Start From a Template
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-200 rounded h-16"></div>
                      <div className="bg-gray-200 rounded h-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template Library */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Template Library
              </h3>
              <p className="text-gray-600 mb-6">
                Provide a range of customizable templates for different video
                genres (e.g., social media, ads, tutorials).
              </p>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm font-medium">Start From a Template</p>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {["YouTube", "TikTok", "Instagram", "Twitter"].map(
                    (platform) => (
                      <div
                        key={platform}
                        className="bg-gray-200 rounded-lg h-12"
                      ></div>
                    )
                  )}
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm font-medium">YouTube Templates</p>
                </div>
                <div className="flex items-center bg-white rounded-lg border border-gray-200 px-3 py-2">
                  <svg
                    className="w-4 h-4 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search YouTube templates"
                    className="text-sm border-none outline-none bg-transparent w-full"
                  />
                  <button className="text-xs bg-gray-100 px-2 py-1 rounded">
                    Search
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {["Gaming", "Tech", "Podcast", "Beauty"].map((category) => (
                    <div
                      key={category}
                      className="relative bg-gray-800 rounded-lg h-16 flex items-center justify-center"
                    >
                      <span className="text-xs text-white font-medium">
                        {category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
