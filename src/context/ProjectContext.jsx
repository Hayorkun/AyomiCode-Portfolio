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
            import.meta.env.VITE_JSONBIN_URL,
        {
          headers: {
            "X-Master-Key": import.meta.env.VITE_JSONBIN_MASTER_KEY,
          },
        },
      );
      const data = response.data.record.projects
      setProjects(data);
      console.log(data);

      } catch (error) {
        ("Error fetching data", error)
      }
    }

    fetchProjects() 
  }, [])

  return <ProjectContext.Provider value={{ projects }}>{children}</ProjectContext.Provider>;
};

export const useProject = () => {
  return useContext(ProjectContext);
};
