import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    result: "+340% User Engagement",
    size: "large",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    result: "$2.5M Revenue Increase",
    size: "small",
  },
  {
    title: "SaaS Landing Page",
    category: "Conversion Design",
    result: "12% Conversion Rate",
    size: "small",
  },
  {
    title: "Mobile Banking App",
    category: "Product Design",
    result: "4.9★ App Store Rating",
    size: "medium",
  },
  {
    title: "AI Startup Rebrand",
    category: "Brand Identity",
    result: "500K Brand Impressions",
    size: "medium",
  },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Work</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              Projects That <span className="text-gradient">Speak Results</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
          >
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                project.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              } ${project.size === "medium" ? "lg:col-span-1" : ""}`}
            >
              {/* Project Image Placeholder */}
              <div
                className={`bg-gradient-to-br from-secondary to-muted ${
                  project.size === "large" ? "h-[500px]" : "h-[300px]"
                } w-full transition-transform duration-500 group-hover:scale-105`}
              >
                {/* Abstract Pattern */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-primary/20 rounded-full group-hover:border-primary/40 transition-colors duration-300" />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold mt-1">{project.title}</h3>
                    <p className="text-muted-foreground mt-2">{project.result}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
