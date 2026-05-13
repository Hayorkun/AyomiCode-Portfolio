import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <div className="h-100 md:h-80 p-4 md:p-9">
        <div className="h-full w-full rounded-tl-4xl rounded-br-3xl bg-orange-400 p-10 flex flex-col justify-center items-center">
          <h2 className="px-2 w-2xs md:w-lg font-syne trackin-tight mb-3 font-extrabold text-4xl text-center">
            Let's build something great together
          </h2>

          <p className="px-3 w-xs md:w-md text-center">
            Have a project in mind or a role to fill? I'm open to freelance work
            and full-time opportunities.
          </p>

          <div className="mt-3 flex flex-col md:flex-row gap-3">
            <NavLink
              to="/contact"
              className=" px-4 py-2 rounded-lg bg-white text-black text-sm text-center hover:bg-orange-600/60 hover:text-white transition"
            >
              Start a projects
            </NavLink>
            <NavLink
              to="/project"
              className="border-1 px-4 py-2 text-sm text-center rounded-lg hover:text-white hover:bg-black hover:border-black transition"
            >
              View projects
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
