import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Rocket, Star } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[120px] animate-pulse" />

      <div className="max-w-5xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium tracking-wide">Why Choose Us</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We Don't Just Create.
            <br />
            <span className="text-gradient">We Ignite.</span>
          </h2>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-16">
            Every pixel, every frame, every animation — crafted to make your brand unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, number: "500+", label: "Projects Delivered", delay: 0.2 },
            { icon: Star, number: "50+", label: "Happy Clients", delay: 0.3 },
            { icon: Rocket, number: "3+", label: "Years Experience", delay: 0.4 },
            { icon: Sparkles, number: "100%", label: "Client Satisfaction", delay: 0.5 },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: item.delay, duration: 0.6, type: "spring" }}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-heading text-4xl font-bold text-primary mb-2">{item.number}</p>
              <p className="text-muted-foreground text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="mailto:hello@cocobinomedia.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-lg hover:opacity-90 transition-opacity glow"
          >
            <Rocket className="w-5 h-5" />
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
