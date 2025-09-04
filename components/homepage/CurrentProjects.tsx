import Link from "next/link";
import { Map, Library, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CurrentProjects() {
  const projects = [
    {
      icon: <Map size={32} className="text-white" />,
      title: "Network Map",
      description:
        "Interactive directory connecting people, projects, and places across bioregions.",
      status: "Active",
      backgroundImage: "/projects/network.png",
    },
    {
      icon: <Library size={32} className="text-white" />,
      title: "Skill-Share Library",
      description:
        "Curated collection of practical knowledge for sustainable community building.",
      status: "Beta",
      backgroundImage: "/projects/library.png",
    },
    {
      icon: <MapPin size={32} className="text-white" />,
      title: "Pilot Sites",
      description:
        "Demonstration projects testing regenerative practices in real communities.",
      status: "Growing",
      backgroundImage: "/projects/slites.png",
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
              className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group h-80"
            >
              {/* Background Image */}
              <Image
                src={project.backgroundImage}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-space-grotesk text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/90 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <Link
                  href="/our-work"
                  className="text-white hover:text-white/80 font-medium inline-flex items-center transition-colors duration-200 self-start"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
