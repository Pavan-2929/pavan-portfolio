import { workData } from "@/data/work";
import Image from "next/image";

export default function Work() {
  return (
    <div className="my-2 rounded-md border py-5 pl-5 pr-4 md:p-6">
      {workData.map((work, index) => (
        <div key={index} className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {/* Company Logo */}
          <div className="flex shrink-0 items-center justify-center self-center sm:self-start">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border bg-white p-2">
              <Image
                src="/sicuaura.png"
                alt={`${work.name} logo`}
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Experience Details */}
          <div className="w-full">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-[17px] font-semibold text-foreground">
                {work.name}
              </h3>

              <p className="text-sm font-medium text-muted-foreground">
                {work.start} – {work.end}
              </p>
            </div>

            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {work.heading}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-6 text-muted-foreground marker:text-muted-foreground/70">
              {work.description.map((point, pointIndex) => (
                <li key={pointIndex} className="pl-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
