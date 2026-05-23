import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      className="px-5 md:px-10  md:flex-col mb-5"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ type: "tween", stiffness: 300, duration: 0.8 }}
    >
      <div className=" md:items-center py-5  block md:flex md:gap-6">
        <div className="w-full md:w-[62.5%]">
          <h3 className="text-orange-400 font-brand leading-tight">WHO I AM</h3>

          <h2 className="text-4xl font-brand font-extrabold mt-3 leading-tight">
            Building things for the web
          </h2>
          <p className="mt-3 font-body leading-relaxed">
            A frontend developer who loves turning ideas into polished,
            interactive experiences.
          </p>
          <p className="my-4 font-body leading-relaxed">
            I'm <span className="font-bold text-white">Ayomide Yerokun</span>, a
            frontend developer with 1+ year of experience building responsive,
            accessible, and high-performance web applications. I specialise in
            the React ecosystem and have a deep appreciation for great design. I
            believe the best interfaces are invisible — they just work. I care
            about every detail, from loading states and keyboard navigation to
            the exact easing curve on a hover transition. When I'm not writing
            code, I'm exploring new design trends, contributing to open-source
            projects, or sketching UI concepts in Figma.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <NavLink
              to="/project"
              className="px-6 py-3 rounded-md mt-5 text-xs bg-orange-400 border-none items-center hover:-translate-y-0.5 hover:bg-white hover:text-black transform-gpu transition"
            >
              See my projects <i class="fa-solid fa-right-long"></i>
            </NavLink>
            <NavLink
              to="/contact"
              className="border px-6 py-3 rounded-md mt-5 text-xs border-white-100 hover:border-orange-500 hover:text-orange-500 hover:-translate-y-0.5 transform-gpu transition"
            >
              Get in touch
            </NavLink>
          </div>
        </div>
        <div className="mt-10 md:w-[37.5%]  w-full border border-orange-300/30 bg-orange-300/10 px-8 py-4 flex justify-between rounded-xl">
          <div className="w-full">
            <div className="w-full flex justify-between mb-1 border-b border-orange-400/50 pb-1.5">
              <p className="text-xs">Location</p>
              <h4>Oyo, Nigeria</h4>
            </div>
            <div className="w-full flex justify-between mb-1 border-b border-orange-400/50 py-1">
              <p className="text-xs">Experience</p>
              <h4>1+ years</h4>
            </div>
            <div className="w-full flex justify-between mb-1 border-b border-orange-400/50 py-1">
              <p className="text-xs">Availability</p>
              <h4 className="text-green-500">Open to work</h4>
            </div>
            <div className="w-full flex justify-between mb-1 border-b border-orange-400/50 py-1">
              <p className="text-xs">Focus</p>
              <h4>React, Next.js, UI</h4>
            </div>
            <div className="w-full flex justify-between mb-1 py-1">
              <p className="text-xs">Language</p>
              <h4>English</h4>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
