import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About Us</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Crafting <span className="text-gradient">visual stories</span> that inspire
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cocobino Media is a creative studio specializing in video editing, 2D/3D animation,
                and design illustration. We bring brands and ideas to life through stunning visuals.
              </p>
              <p>
                Our team combines artistic vision with technical expertise to deliver
                high-quality content that captivates audiences and elevates your brand.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "5+", label: "Years Experience" },
              { num: "200+", label: "Projects Delivered" },
              { num: "50+", label: "Happy Clients" },
              { num: "3", label: "Core Services" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
              >
                <p className="font-heading text-3xl font-bold text-gradient">{stat.num}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
