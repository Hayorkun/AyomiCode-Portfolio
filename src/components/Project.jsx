import { div } from "framer-motion/client"
import { useProject } from "../context/ProjectContext"

const Project = () => {

  const { projects } = useProject(); 

  return (
    <section className="px-5 py-10 md:py-15 md:px-10">
        <div className="border">
          <div>
            <P></P>
            <h1 className="font-brand font-extrabold">Projects</h1>
          </div>
        </div>
    </section>
  );
}

export default Project;
