import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MatchForgeShowcase from "./project/MatchForgeShowcase";

const Projects = () => {
  return (
    <section className="mb-20 w-full">
      <div className="mb-7 flex items-center justify-between">
        <p className="font-bold uppercase tracking-[0.18em] text-muted-foreground">
          I&apos;m currently building...{" "}
        </p>

        <Link
          href="/projects"
          className="group flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          More projects
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <MatchForgeShowcase />
    </section>
  );
};

export default Projects;
