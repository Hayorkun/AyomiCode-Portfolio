import Oneproject from "./Oneproject";
import { useProject } from "../context/ProjectContext";

const Project = () => {

  const {projects} = useProject()

  return (
    <section className="px-5 py-10 md:py-15 md:px-10">
        <div className="my-max-width w-full">
          <div>
            <p className="font-body font-semibold text-orange-400">Selected Projects</p>
            <h1 className="font-brand font-extrabold leading-tight text-4xl mt-3">Featured Projects</h1>
            <p className="mt-3 text-gray-400/70">A peek at what I've shipped.</p>
          </div>
          <div className="mt-10 grid gap-6">
           {projects.map((project, index) => (
            <Oneproject key={index} project={project}/>
           ))}
          </div>
        </div>
    </section>
  );
}

export default Project;
