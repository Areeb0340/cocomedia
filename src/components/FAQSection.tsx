import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What services does Cocobino Media offer?",
    a: "We specialize in professional video editing, 2D/3D animation, motion graphics, design illustration, and brand visual identity creation.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity. A simple edit takes 2-3 days, while full animation projects may take 2-4 weeks. We always provide a timeline upfront.",
  },
  {
    q: "Do you offer revisions?",
    a: "Absolutely! Every project includes revision rounds to ensure the final product matches your vision perfectly.",
  },
  {
    q: "What file formats do you deliver?",
    a: "We deliver in all standard formats — MP4, MOV, GIF, PNG, SVG, and more. Just let us know your requirements.",
  },
  {
    q: "How do I get started?",
    a: "Simply reach out to us via email at hello@cocobinomedia.com. We'll schedule a discovery call to discuss your project!",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Got Questions?</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading font-semibold pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
