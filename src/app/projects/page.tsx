import { projectsData } from "@/data/projects";
import { ArrowRight, Github, Network } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectButton from "@/components/ProjectButton";

const Projects = () => {
  return (
    <div className="my-12 ">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold font-serif">My Projects</p>
        </div>
        <ProjectButton />
      </div>
      <div className="grid grid-cols-2 gap-6 pt-10">
        {projectsData &&
          projectsData.map((project) => (
            <div className="border px-6 py-6 rounded-md">
              <Link href={project.url}>
                <img src={project.img} alt="" className="w-full h-[200px]" />
              </Link>
              <p className="text-lg pt-5 font-semibold">{project.name}</p>
              <p className="text-[14px] leading-[22px] pt-2 text-muted-foreground">
                {project.description}
              </p>
              <div className="flex gap-x-3 flex-wrap pt-5 gap-y-2">
                {project.techStack.map((tech) => (
                  <div>
                    <p className="bg-accent text-xs rounded-md w-fit px-2 py-1">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href={project.url}
                  className="flex items-center bg-accent-foreground w-fit text-primary-foreground px-2 py-[4px] rounded-md font-semibold mt-4 text-[13px] gap-x-1"
                >
                  <Network className="h-4 w-4" /> Live
                </Link>
                {project.gitHub && (
                  <Link
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
