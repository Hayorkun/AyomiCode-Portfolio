import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const fetchProjects = async() => {
      try {
           const response = await axios.get(
        "https://api.jsonbin.io/v3/b/6a074aefc0954111d82b1cd0",

        {
          headers: {
            "X-Master-Key":
              "$2a$10$gKVeRpsyh9oru1uCjHlC4.cA.LEy08LDxqYiPDp4N1EQLuB2oFoMu",
          },
        },
      );
      setProjects(response.data.record);

      } catch (error) {
        console.log("Error fetching data", error)
      }
    }

    fetchProjects() 
  }, [])

  return <ProjectContext.Provider value={{ projects }}>{children}</ProjectContext.Provider>;
};

export const useProject = () => {
  return useContext(ProjectContext);
};
