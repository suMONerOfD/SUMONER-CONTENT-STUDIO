import { Rocket, Target, Zap, TrendingUp, Palette, Code } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Growth Strategy",
    description: "Data-driven strategies that accelerate your market position and drive sustainable revenue growth.",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Bold visual identities that capture attention and create lasting impressions in crowded markets.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance websites engineered for speed, conversion, and seamless user experiences.",
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description: "Precision-targeted campaigns that reach your ideal customers and maximize ROI.",
  },
  {
    icon: TrendingUp,
    title: "CRO Optimization",
    description: "Turn more visitors into paying customers with data-backed conversion strategies.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline operations and scale efficiently with intelligent business automation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Services That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We don't just build—we engineer growth. Every service is designed to move the needle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
