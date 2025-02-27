import React from "react";
import SectionHeader from "../../../components/ui/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projectsList } from "./projectsList";

const Projects = () => {
  return (
    <section
      id="/projects"
      className="min-h-svh flex flex-col items-center justify-center py-5 px-5 lg:px-16   "
    >
      <SectionHeader>Projects</SectionHeader>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2  xl:gap-24 ">
        {projectsList.map((project, id) => (
          <ProjectCard
            key={id}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
            tools={project.tools}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
