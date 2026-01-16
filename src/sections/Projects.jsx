import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

const Projects = () => {
  const [preview, setPreview] = useState(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e) => {
    const offset = 20;
    const previewWidth = 320;  // w-80
    const previewHeight = 224; // h-56

    const maxX = window.innerWidth - previewWidth;
    const maxY = window.innerHeight - previewHeight;

    x.set(Math.min(e.clientX + offset, maxX));
    y.set(Math.min(e.clientY + offset, maxY));
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      <div className="mt-12 space-y-6">
        {myProjects.map((project) => (
          <Project
            key={project.id}
            {...project}
            setPreview={setPreview}
          />
        ))}
      </div>

      {/* Floating preview image */}
      <AnimatePresence>
        {preview && (
          <motion.img
            src={preview}
            alt="Project preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ x: springX, y: springY }}
            className="
              fixed top-0 left-0 z-50
              h-56 w-80
              rounded-lg shadow-2xl
              pointer-events-none
              object-contain
              bg-black/80
            "
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
