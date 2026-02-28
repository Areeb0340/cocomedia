import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Brand Commercial Video",
    description: "High-impact commercial video production with cinematic editing, color grading, and sound design for major brands.",
    tags: ["Video Editing", "Color Grading", "Sound Design"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "3D Product Animation",
    description: "Photorealistic 3D product visualization and animation for e-commerce and marketing campaigns.",
    tags: ["3D Animation", "Modeling", "Rendering"],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Animated Explainer Series",
    description: "A series of 2D animated explainer videos with custom character design and engaging storytelling.",
    tags: ["2D Animation", "Illustration", "Storyboarding"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 text-center">Portfolio</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary/50 text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-2 rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
