import { projectsData } from "@/data/projects";
import { Github, Network } from "lucide-react";
import React from "react";
import Link from "next/link";
import ProjectButton from "./ProjectButton";

const Projects = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-3xl sm:text-4xl font-bold font-serif">
            Featured Projects
          </p>
        </div>
        <div className="mt-2 md:mt-0">
          <ProjectButton />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pt-10 pt-6">
        {projectsData &&
          projectsData.slice(0, 2).map((project, index) => (
            <div key={index} className="border px-4 sm:px-6 py-6 rounded-md">
              <Link href={project.url}>
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-[180px] sm:h-[200px] rounded-md"
                />
              </Link>
              <p className="text-lg pt-5 font-semibold">{project.name}</p>
              <p className="text-[14px] leading-[22px] pt-2 text-muted-foreground">
                {project.description}
              </p>
              <div className="flex gap-x-2 flex-wrap pt-5 gap-y-2">
                {project.techStack.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <p className="bg-accent text-xs rounded-md w-fit px-2 py-1">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center space-x-4 gap-y-2">
                <Link
                  href={project.url}
                  target="_blank"
                  className="flex items-center bg-accent-foreground w-fit text-primary-foreground px-2 py-[4px] rounded-md font-semibold mt-4 text-[13px] gap-x-1"
                >
                  <Network className="h-4 w-4" /> Live
                </Link>
                {project.gitHub && (
                  <Link
                    target="_blank"
                    href={project.gitHub}
                    className="flex items-center bg-accent-foreground w-fit text-primary-foreground px-2 py-[4px] rounded-md font-semibold mt-4 text-[13px] gap-x-1"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
