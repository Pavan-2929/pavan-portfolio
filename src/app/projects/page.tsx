import { projectsData } from "@/data/projects";
import { Github, Network } from "lucide-react";
import React from "react";
import Link from "next/link";
import ProjectButton from "@/components/ProjectButton";

const Projects = () => {
  return (
    <div className="my-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-4">
        <div>
          <p className="text-3xl sm:text-4xl font-bold font-serif">
            My Projects
          </p>
        </div>
        <ProjectButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
        {projectsData &&
          projectsData.map((project, index) => (
            <div
              key={index}
              className="border px-4 sm:px-6 py-4 sm:py-6 rounded-md"
            >
              <Link href={project.url}>
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-[180px] sm:h-[200px] object-cover rounded-md"
                />
              </Link>
              <p className="text-lg pt-4 font-semibold">{project.name}</p>
              <p className="text-sm sm:text-[14px] leading-[22px] pt-2 text-muted-foreground">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap pt-4">
                {project.techStack.map((tech, i) => (
                  <div key={i}>
                    <p className="bg-accent text-xs rounded-md w-fit px-2 py-1">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href={project.url}
                  className="flex items-center bg-accent-foreground text-primary-foreground px-2 py-1 rounded-md font-semibold mt-4 text-[13px] gap-x-1"
                >
                  <Network className="h-4 w-4" /> Live
                </Link>
                {project.gitHub && (
                  <Link
                    href={project.gitHub}
                    className="flex items-center bg-accent-foreground text-primary-foreground px-2 py-1 rounded-md font-semibold mt-4 text-[13px] gap-x-1"
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
