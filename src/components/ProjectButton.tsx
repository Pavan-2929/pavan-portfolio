"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProjectButton = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      {pathName === "/" ? (
        <Link
          href="/projects"
          className="flex text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <p>View More</p>
          <ArrowRight className="w-5 pt-[2px] ml-1" />
        </Link>
      ) : (
        <Link
          href="/"
          className="flex text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <p>Go back</p>
          <ArrowRight className="w-5 pt-[2px] ml-1" />
        </Link>
      )}
    </>
  );
};

export default ProjectButton;
