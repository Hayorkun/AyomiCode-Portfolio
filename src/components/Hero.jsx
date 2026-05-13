import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="px-5 py-10 flex flex-col justify-center text-center">
      <div className="flex items-center self-center gap-1 bg-orange-400 border border-orange-600 text-white rounded-full p-1 text-xs w-fit mb-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/60 opacity-90"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
        </span>
        Available for work
      </div>

      <h2 className="text-4xl md:text-6xl font-bold">
        Hi, I'm <span className="text-orange-400">Ayomide</span>
      </h2>
      <h2 className="text-4xl md:text-6xl font-bold mb-2">
        Frontend Developer
      </h2>
      <p className="text-sm md:text-base text-center md:w-auto mb-5">
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

      <div className="mt-7 font-semibold w-fit flex gap-5 items-center self-center">
        <div className="m-0">
          <h2 className="text-4xl text-orange-400 font-serif ">3+</h2>
          <p className="text-xs mt-0">Projects</p>
        </div>
        <div className="m-0">
          <h2 className="text-4xl text-orange-400 font-serif">1+</h2>
          <p className="text-xs mt-0"> Years exp.</p>
        </div>
        <div className="m-0">
          <h2 className="text-4xl text-orange-400 font-serif">5+</h2>
          <p className="text-xs mt-0">clients</p>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap  gap-3 mt-3 justify-center p-1">
        <div className="p-1 border-1 border-orange-400/50 text-gray-100/50">
          JavaScript
        </div>
        <div className="p-1 border-1 border-orange-400/50 text-gray-100/50">
          React
        </div>
        <div className="p-1 border-1 border-orange-400/50 text-gray-100/50">
          Node.js
        </div>
        <div className="p-1 border-1 border-orange-400/50 text-gray-100/50">
          TypeScript
        </div>
        <div className="p-1 border-1 border-orange-400/50 text-gray-100/50">
          Tailwind CSS
        </div>
        <div className="p-1 border-1 border-orange-400/50 text-gray-100/50">
          Git
        </div>
        <div className="p-1 border-1 border-orange-400/50 text-gray-100/50">
          Figma
        </div>
        <div className="p-1 border-1 border-orange-400/50 text-gray-100/50">
          Next.js
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
