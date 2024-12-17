import { workData } from "@/data/work";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Link from "next/link";

export default function Work() {
  return (
    <div className="my-2 py-4 pr-4 md:pl-6 pl-4 border rounded-md">
      {workData &&
        workData.map((work, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 mb-6 sm:gap-x-6"
          >
            <div className="self-center sm:self-start">
              <Avatar>
                <AvatarImage
                  src={work.logo}
                  className="bg-accent border p-1 w-14 h-14"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="text-[17px] font-semibold text-center sm:text-left">
                  <p>{work.name}</p>
                </div>
                <div className="text-muted-foreground flex justify-center sm:justify-end text-sm font-medium font-serif mt-1 sm:mt-0">
                  <p>{work.start}</p>
                  <p className="mx-1">-</p>
                  <p>{work.end}</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground font-medium mt-2 text-center sm:text-left">
                <p>{work.heading}</p>
              </div>
              <div className="space-y-7 mt-7 md:space-y-4 md:mt-4">
                {work.projects.map((project, projIndex) => (
                  <div key={projIndex}>
                    <Link
                      target="_blank"
                      className="block text-base text-foreground/90 underline decoration-foreground/50 hover:decoration-foreground/90 text-center sm:text-left"
                      href={project.href}
                    >
                      {project.name}
                    </Link>
                    <ul className="list-disc text-[15px] leading-6 text-muted-foreground pl-6 mt-2">
                      {project.description.map((line, lineIndex) => (
                        <li key={lineIndex}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
