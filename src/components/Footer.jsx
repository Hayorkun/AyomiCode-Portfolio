import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      className="px-5 py-6 md:py-5 md:px-10 border-t border-orange-300/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="items-top md:flex justify-around mb-6">
        <div className="flex flex-col justify-center md:flex-">
          <div className=" self-center md:block">
            <h2 className="flex justify-center md:block text-4xl text-orange-400 font-serif font-bold mb-5">
              AyomiCode
            </h2>
            <p className="text-center text-wrap md:text-start text-base text-gray-400 w-xs md:w-md mb-3">
              Frontend developer crafting fast, beautiful, and accessible web
              experiences with React and modern CSS.
            </p>
            <div className="flex flex-col md:block">
              <div className="flex items-center self-center gap-1 bg-orange-400 border border-orange-600 text-white rounded-xl p-1 text-xs w-fit mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/60 opacity-90"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                </span>
                Available for work
              </div>
              <div className="w-50 flex justify-between self-center p-1 ">
                <span className="border border-orange-300/40 rounded-lg p-1">
                  GH
                </span>
                <span className="border border-orange-300/40 rounded-lg p-1">
                  LI
                </span>
                <span className="border border-orange-300/40 rounded-lg p-1">
                  X
                </span>
                <span className="border border-orange-300/40 rounded-lg p-1">
                  ✉️
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-1/2 justify-around mt-3 md:mt-0 ">
          <div className="flex flex-col gap-1 ">
            <h2 className="mb-2 text-orange-300 font-bold">PAGES</h2>
            <div className="flex flex-col self-center md:self-start">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="mb-2 text-orange-300 font-bold">PROJECTS</h2>
            <div className="flex flex-col self-center md:self-start">
              <NavLink>Home</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Projects</NavLink>
              <NavLink>Skills</NavLink>
              <NavLink>Contact</NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="mb-2 text-orange-300 font-bold">CONNECTS</h2>
            <div className="flex flex-col self-center md:self-start">
              <span>GitHub</span>
              <span>Linkedin</span>
              <span>X</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs text-center">
          &copy; 2026 Ayomide Yerokun. All rights reserved
        </p>
        <p className="text-xs text-center mt-1">
          Built with <span className="text-orange-400">REACT</span>~
          <span className="text-orange-400">TAILWIND CSS</span> 🧡
        </p>
      </div>
    </motion.section>
  );
};
export default Footer;
