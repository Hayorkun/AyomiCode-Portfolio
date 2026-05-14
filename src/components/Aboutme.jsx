import { NavLink } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="p-5 md:p-10  md:flex-col">
      <div className=" md:items-center py-7  block md:flex md:gap-6">
        <div className="w-full md:w-[62.5%]">
          <h3 className="text-orange-400 ">WHO I AM</h3>

          <h2 className="text-4xl font-bold mt-3 ">
            Building things for the web
          </h2>
          <p className="mt-3">
            A frontend developer who loves turning ideas into polished,
            interactive experiences.
          </p>
          <p className="my-4">
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
              className="border-1 px-6 py-3 rounded-md mt-5 text-xs bg-orange-400 border-none items-center hover:-translate-y-0.5 hover:bg-white hover:text-black transform-gpu transition"
            >
              See my projects <i class="fa-solid fa-right-long"></i>
            </NavLink>
            <NavLink
              to="/contact"
              className="border-1 px-6 py-3 rounded-md mt-5 text-xs border-white-100 hover:border-orange-500 hover:text-orange-500 hover:-translate-y-0.5 transform-gpu transition"
            >
              Get in touch
            </NavLink>
          </div>
        </div>
        <div className="mt-10 w-full md:w-[37.5%]  w-full border-1 border-orange-300/30 bg-orange-300/10 px-8 py-4 flex justify-between rounded-xl">
          <div className="w-full">
            <div className="w-full flex justify-between mb-1 border-b-1 border-orange-400/50 pb-1.5">
              <p className="text-xs">Location</p>
              <h4>Oyo, Nigeria</h4>
            </div>
            <div className="w-full flex justify-between mb-1 border-b-1 border-orange-400/50 py-1">
              <p className="text-xs">Experience</p>
              <h4>1+ years</h4>
            </div>
            <div className="w-full flex justify-between mb-1 border-b-1 border-orange-400/50 py-1">
              <p className="text-xs">Availability</p>
              <h4 className="text-green-500">Open to work</h4>
            </div>
            <div className="w-full flex justify-between mb-1 border-b-1 border-orange-400/50 py-1">
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
    </section>
  );
};

export default AboutMe;
