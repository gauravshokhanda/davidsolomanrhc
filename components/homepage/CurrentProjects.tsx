import Link from "next/link";
import { Map, Library, MapPin, ArrowRight } from "lucide-react";

export default function CurrentProjects() {
  const projects = [
    {
      icon: <Map size={32} className="text-velvet-purple" />,
      title: "Network Map",
      description:
        "Interactive directory connecting people, projects, and places across bioregions.",
      status: "Active",
    },
    {
      icon: <Library size={32} className="text-velvet-purple" />,
      title: "Skill-Share Library",
      description:
        "Curated collection of practical knowledge for sustainable community building.",
      status: "Beta",
    },
    {
      icon: <MapPin size={32} className="text-velvet-purple" />,
      title: "Pilot Sites",
      description:
        "Demonstration projects testing regenerative practices in real communities.",
      status: "Growing",
    },
  ];

  return (
    <section className="py-20 bg-light-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Current projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re actively developing tools and resources to support
            resilient communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-light-purple rounded-lg group-hover:scale-105 transition-transform duration-300">
                  {project.icon}
                </div>
                <span className="text-sm font-medium text-velvet-purple bg-light-purple px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <Link
                href="/our-work"
                className="text-velvet-purple hover:text-velvet-purple/80 font-medium inline-flex items-center transition-colors duration-200"
              >
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
