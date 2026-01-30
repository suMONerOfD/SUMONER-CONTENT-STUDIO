import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't just redesign our website—they transformed our entire business. Revenue doubled in 6 months.",
    name: "Sarah Chen",
    title: "CEO, TechVenture Inc",
    result: "2X Revenue Growth",
  },
  {
    quote: "The breakthrough came when they identified the bottleneck in our funnel. Conversion went from 2% to 12% overnight.",
    name: "Marcus Johnson",
    title: "Founder, ScaleUp Labs",
    result: "500% Conversion Lift",
  },
  {
    quote: "Finally, a team that gets it. No fluff, no BS—just pure execution that moves the needle.",
    name: "Elena Rodriguez",
    title: "CMO, GrowthStack",
    result: "$5M Pipeline Growth",
  },
  {
    quote: "We went from unknown to industry leader. Their brand strategy positioned us perfectly in a crowded market.",
    name: "David Park",
    title: "Co-founder, NexGen AI",
    result: "Category Leader",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Wall of Love</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Client <span className="text-gradient">Breakthroughs</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg leading-relaxed mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <span className="font-display font-bold text-lg text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
