import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the investment for working with you?",
    answer: "Our projects typically range from $15K-$100K+ depending on scope and complexity. We focus on ROI—every dollar invested should return multiples. During our discovery call, we'll provide a custom quote based on your specific goals and requirements.",
  },
  {
    question: "What does your process look like?",
    answer: "We follow a proven 4-phase framework: Discovery (understanding your business), Strategy (mapping the solution), Execution (building with precision), and Optimization (continuous improvement). Every step is transparent, collaborative, and deadline-driven.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Most projects complete in 6-12 weeks. Quick-turn landing pages can be done in 2-3 weeks, while comprehensive rebrands or complex platforms may extend to 16+ weeks. We'll give you a precise timeline during our initial consultation.",
  },
  {
    question: "Do you work with startups or just established companies?",
    answer: "Both. We've helped pre-seed startups establish their market presence and scaled Fortune 500 initiatives. What matters isn't your size—it's your commitment to growth and willingness to execute.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "We stand behind our work with a satisfaction guarantee. If we don't deliver what we promised during the project scope, we'll work until it's right. Our 98% client satisfaction rate speaks to our commitment to excellence.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              Got <span className="text-gradient">Questions?</span>
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold py-6 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
