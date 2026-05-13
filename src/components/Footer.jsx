import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="px-5 py-3 md:py-5 md:px-10 border-t-1 border-orange-300/50">
      <div className="md:flex justify-around">
        <div className=" flex flex-col justify-center">
          <div className=" self-center">
            <h2 className="flex justify-center text-4xl text-orange-400 font-syne font-bold mb-2">
              AyomiCode
            </h2>
            <p className="text-center text-sm text-gray-400 w-xs md:w-md text-wrap mb-2">
              Frontend developer crafting fast, beautiful, and accessible web
              experiences with React and modern CSS.
            </p>
          </div>
          <div className="flex items-center self-center gap-1 bg-orange-400 border border-orange-600 text-white rounded-xl p-2 text-xs w-fit mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/60 opacity-90"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            Available for work
          </div>
          <div className="w-50 flex justify-between self-center p-1">
            <span className="border-1 border-orange-300/40 rounded-lg p-1">
              GH
            </span>
            <span className="border-1 border-orange-300/40 rounded-lg p-1">
              LI
            </span>
            <span className="border-1 border-orange-300/40 rounded-lg p-1">
              X
            </span>
            <span className="border-1 border-orange-300/40 rounded-lg p-1">
              ✉️
            </span>
          </div>
        </div>
        <div className="flex md:gap-10 justify-around item mt-3">
          <div className="flex flex-col gap-1 ">
            <h2 className="mb-2 text-orange-300">Pages</h2>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Contact</NavLink>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="mb-2 text-orange-300">PROJECTS</h2>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Contact</NavLink>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="mb-2 text-orange-300">CONNECT</h2>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        </div>
      </div>
      <div className="mt-3 ">
        <p className="text-xs text-center">
          &copy; 2026 Ayomide Yerokun. All rights reserved
        </p>
        <p className="text-xs text-center mt-1">
          Built with <span className="text-orange-400">REACT</span>~
          <span className="text-orange-400">TAILWINS CSS</span> 🧡
        </p>
      </div>
    </section>
  );
};
export default Footer;
