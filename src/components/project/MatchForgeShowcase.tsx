import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Github, Package } from "lucide-react";

const projectLinks = [
  {
    label: "Documentation",
    href: "https://match-forge-docs.vercel.app",
    icon: ArrowUpRight,
  },
  {
    label: "GitHub",
    href: "https://github.com/Pavan-2929/MatchForge",
    icon: Github,
  },
  {
    label: "npm package",
    href: "https://www.npmjs.com/package/@matchforge/core",
    icon: Package,
  },
];

const capabilities = [
  "String similarity",
  "Text preprocessing",
  "Multi-field matching",
  "Blocking",
  "CSV matching",
  "Dataset deduplication",
  "Evaluation metrics",
];

const technologies = [
  "TypeScript",
  "Node.js",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Vitest",
];

const MatchForgeShowcase = () => {
  return (
    <article className="mf-project space-y-7">
      {/* Project introduction */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-4xl">
                MatchForge<span className="text-muted-foreground">.</span>
              </h2>

              <span className="font-mono text-xs text-muted-foreground">
                @matchforge/core
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-500 mt-5 mr-5">
              <CheckCircle2 className="size-3.5" />
              Published on npm
            </span>

            <span className="rounded-full border px-3 py-1.5 text-xs text-muted-foreground">
              Open source
            </span>
          </div>

          <p className="mt-3 text-base text-muted-foreground font-medium">
            An Entity Resolution Toolkit for JavaScript and TypeScript.
          </p>
        </div>

        <p className="max-w-3xl text-sm leading-7 font-medium text-muted-foreground sm:text-[15px]">
          I designed and published{" "}
          <span className="font-semibold text-foreground">
            @matchforge/core
          </span>
          , a reusable TypeScript package for string similarity, record
          matching, and entity resolution. It combines similarity algorithms,
          configurable preprocessing, weighted multi-field matching,
          blocking-based candidate generation, and practical dataset workflows.
        </p>

        {/* Project links */}
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4 pt-1">
          {projectLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-4" />
              {label}
              <ArrowUpRight className="size-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Product screenshot */}
      <Link
        href="https://match-forge-docs.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit MatchForge documentation"
        className="mf-project-preview group relative block overflow-hidden rounded-xl border bg-[#101410]"
      >
        <div className="relative aspect-[16/8] w-full sm:aspect-[16/7]">
          <Image
            src="/matchforge.png"
            alt="MatchForge documentation and interactive playground"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.015]"
          />
        </div>

        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/75 px-4 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          Explore MatchForge
          <ArrowUpRight className="size-3.5" />
        </span>
      </Link>

      {/* Capabilities */}
      <div className="border-t border-border pt-5">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Capabilities
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-3 font-medium">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {capability}
            </span>
          ))}
        </div>
      </div>

      {/* Technology stack */}
      <div className="flex flex-wrap items-center gap-2 font-medium">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-accent/70 px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
};

export default MatchForgeShowcase;
