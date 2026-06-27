import Oneproject from "./Oneproject";
import { useProject } from "../context/ProjectContext";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Project = () => {
  const { projects, isLoading } = useProject();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  if (isLoading) {
    return <div className="text-center py-10 text-orange-500">Loading projects...</div>;
  }

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="px-5 py-10 md:py-15 md:px-10 flex justify-center"
    >
      <div className="my-max-width w-full">
        <motion.div variants={item}>
          <p className="font-body font-semibold text-orange-400">
            Selected Projects
          </p>
          <h1 className="font-brand font-extrabold leading-tight text-4xl mt-3">
            Featured Projects
          </h1>
          <p className="mt-3 text-gray-400/70">A peek at what I've shipped.</p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-stretch">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div key={index} variants={item}>
              <Oneproject project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="flex justify-center">
          <NavLink
            to="/projectpage"
            className="flex w-40 p-1.5 rounded-xl border mt-7 justify-center"
          >
            View all projects <ArrowRight />
          </NavLink>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Project;