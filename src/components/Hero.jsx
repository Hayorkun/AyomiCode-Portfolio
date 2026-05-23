import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {

  



  return (
    <motion.section className="h-screen px-5 py-7 flex flex-col justify-center text-center ">
      <div className="flex items-center self-center gap-1 bg-orange-400 border border-orange-600 text-white rounded-full p-1 text-sm w-fit mb-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/60 opacity-90"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
        </span>
        Available for work
      </div>

      <h2 className="text-4xl md:text-5xl w-full md:w-3xl self-center font-brand leading-tight font-extrabold mb-3">
        Hi, I'm <span className="text-orange-400">Ayomide</span>
        <span> Frontend Developer</span>
      </h2>
      <p className="text-sm md:text-base font-body leading-relaxed text-center md:w-auto mb-5">
        I build beautiful, fast, and accessible web experiences using React,
        modern CSS, and clean code.
      </p>
      <div className="flex items-center justify-center gap-5 ">
        <NavLink
          to="/project"
          className="border border-orange-400/50 px-4 py-2 rounded-full text-sm hover:bg-orange-400/70 transition"
        >
          View my work
        </NavLink>
        <NavLink
          to="/project"
          className="border border-orange-400/50 px-4 py-2 rounded-full text-sm hover:bg-orange-400/70 transition"
        >
          Download CV
        </NavLink>
      </div>

      <div className="mt-3 font-semibold w-fit flex gap-3 items-center self-center">
        <div className="m-0">
          <h2 className="text-4xl text-orange-400 font-extrabold font-brand leading-tight">3+</h2>
          <p className="text-sm mt-0 font-body leading-relaxed">Projects</p>
        </div>
        <div className="m-0">
          <h2 className="text-4xl text-orange-400 font-extrabold font-brand leading-tight">1+</h2>
          <p className="text-sm mt-0 font-body leading-relaxed"> Years exp.</p>
        </div>
        <div className="m-0">
          <h2 className="text-4xl text-orange-400 font-extrabold font-brand leading-tight">1+</h2>
          <p className="text-sm mt-0 font-body leading-relaxed">clients</p>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4 justify-center p-1">
        <div className="p-1 rounded-lg border border-orange-400/50 text-gray-100/50">
          JavaScript
        </div>
        <div className="p-1 rounded-lg border border-orange-400/50 text-gray-100/50">
          React
        </div>
        <div className="p-1 rounded-lg border border-orange-400/50 text-gray-100/50">
          Node.js
        </div>
        <div className="p-1 rounded-lg border border-orange-400/50 text-gray-100/50">
          TypeScript
        </div>
        <div className="p-1 rounded-lg border border-orange-400/50 text-gray-100/50">
          Tailwind CSS
        </div>
        <div className="p-1 rounded-lg border border-orange-400/50 text-gray-100/50">
          Git
        </div>
        <div className="p-1 rounded-lg border border-orange-400/50 text-gray-100/50">
          Figma
        </div>
        <div className="p-1 rounded-lg border border-orange-400/50 text-gray-100/50">
          Next.js
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
