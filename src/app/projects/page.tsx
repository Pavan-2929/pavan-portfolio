import { projectsData } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, Github, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <main className="my-10 mb-20 sm:my-14">
      {/* Page heading */}
      <header className="mb-10 sm:mb-12">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back home
        </Link>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Here&apos;s what I&apos;ve built{" "}
          </p>

          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Projects<span className="text-muted-foreground">.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            A collection of developer tools, web applications, and experiments
            built while exploring software engineering and solving practical
            problems.
          </p>
        </div>
      </header>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
        {projectsData.map((project, index) => {
          const github =
            "gitHub" in project
              ? project.gitHub
              : "github" in project
                ? project.github
                : "";

          const liveUrl = project.url || "";
          const npmUrl = "npm" in project ? project.npm : "";
          const imageSrc = project.img.startsWith("./")
            ? project.img.replace("./", "/")
            : project.img;

          const preview = (
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border bg-muted/30">
              <Image
                src={imageSrc}
                alt={`${project.name} preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              {liveUrl && (
                <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full border bg-background/90 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </span>
              )}
            </div>
          );

          return (
            <article
              key={project.name}
              className="group min-w-0"
              style={{
                animation: "project-card-enter 500ms ease-out both",
                animationDelay: `${Math.min(index, 5) * 70}ms`,
              }}
            >
              {/* Project image */}
              {liveUrl ? (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className="mb-5 block"
                >
                  {preview}
                </Link>
              ) : (
                <div className="mb-5">{preview}</div>
              )}

              {/* Project information */}
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    {index === 0 && (
                      <div className="mb-2">
                        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-500">
                          Featured · Open source
                        </span>
                      </div>
                    )}

                    <h2 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-foreground sm:text-xl">
                      {project.name}
                    </h2>
                  </div>

                  <span className="shrink-0 pt-1 font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.techStack?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-accent/70 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                {/* Available project links */}
                {(liveUrl || github || npmUrl) && (
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t pt-4">
                    {liveUrl && (
                      <Link
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-primary"
                      >
                        Live project
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    )}

                    {github && (
                      <Link
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="size-3.5" />
                        GitHub
                        <ArrowUpRight className="size-3" />
                      </Link>
                    )}

                    {npmUrl && (
                      <Link
                        href={npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Package className="size-3.5" />
                        npm
                        <ArrowUpRight className="size-3" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default ProjectsPage;
