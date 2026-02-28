import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Box, Palette, Sparkles, Layers, PenTool } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional video editing for commercials, social media, YouTube, and corporate content with seamless transitions and color grading.",
  },
  {
    icon: Box,
    title: "3D Animation",
    description: "Stunning 3D animations, product visualizations, and motion graphics that bring your concepts to life.",
  },
  {
    icon: Layers,
    title: "2D Animation",
    description: "Engaging 2D animations, explainer videos, and character animations crafted with precision and creativity.",
  },
  {
    icon: Palette,
    title: "Design & Illustration",
    description: "Custom illustrations, brand identity design, and visual assets that make your brand stand out.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Eye-catching motion graphics for intros, titles, infographics, and promotional content.",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description: "Complete brand identity packages including logos, style guides, and visual systems.",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 text-center">Services</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-16">
            What We <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
