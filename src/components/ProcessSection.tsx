import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Palette, Film, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description: "We discuss your vision, goals, and project requirements to understand exactly what you need.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Concept & Design",
    description: "Our team creates stunning concepts, storyboards, and design mockups for your approval.",
  },
  {
    icon: Film,
    step: "03",
    title: "Production",
    description: "We bring the concept to life with expert editing, animation, and visual effects.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Delivery",
    description: "Final review, revisions, and delivery of your polished, ready-to-publish content.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">How We Work</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A streamlined workflow designed to deliver exceptional results every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, type: "spring" }}
                className="group relative text-center"
              >
                <div className="relative mx-auto mb-6 w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-heading">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
