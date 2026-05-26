import { div } from "framer-motion/client";
import React from "react";
import Oneproject from "./Oneproject";

function Project() {
  const binID = "6a074aefc0954111d82b1cd0";

  const [projects, setProjects] = useState([]);

  async function fetchProject() {
    try {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/6a074aefc0954111d82b1cd0",

        {
          headers: {
            "X-Master-Key":
              "$2a$10$gKVeRpsyh9oru1uCjHlC4.cA.LEy08LDxqYiPDp4N1EQLuB2oFoMu",
          },
        },
      );

      const data = await response.json();

      setProjects(data);

      console.log(data);

    } catch (error) {

      console.log(error);

    }
  }

  fetchProject();

  return (
    <section>
      <h1>In progress</h1>
      {projects.slice(0, 2).map((project, index) => (
        <Oneproject
          key={index}
          name={project.name}
          description={project.description}
          image={project.image}
        />
      ))}
    </section>
  );
}

export default Project;
