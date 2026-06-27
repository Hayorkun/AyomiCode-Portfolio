import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const URL = import.meta.env.VITE_JSONBIN_URL;
      const KEY = import.meta.env.VITE_JSONBIN_MASTER_KEY;

      if (!URL || !KEY) {
        console.error("Missing JSONBin environment variables.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const response = await axios.get(URL, {
          headers: {
            "X-Master-Key": KEY,
          },
        });

        const data = response.data.record.projects;
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data", error.response?.status);
        console.error("Error message", error.response?.data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, isLoading }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  return useContext(ProjectContext);
};
