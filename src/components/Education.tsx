import { educationData } from "@/data/education";
import Image from "next/image";

const Education = () => {
  return (
    <div className="my-2 space-y-8 rounded-md border py-5 pl-5 pr-4 md:p-6">
      {educationData.map((college, index) => (
        <div key={index} className="flex flex-col gap-4 sm:flex-row sm:gap-x-6">
          {/* Institution Logo */}
          <div className="flex shrink-0 items-center justify-center self-center sm:self-start">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border bg-white p-2">
              <Image
                src={college.logo}
                alt={`${college.name} logo`}
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Institution Details */}
          <div className="w-full">
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <h3 className="text-center text-[17px] font-semibold sm:text-left">
                {college.name}
              </h3>

              <p className="mt-1 text-center font-serif text-sm font-medium text-muted-foreground sm:mt-0 sm:text-right">
                {college.start} – {college.end}
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-x-3 gap-y-1 text-center text-sm font-medium text-muted-foreground sm:flex-row sm:text-left">
              <p>{college.degree}</p>
              <p>{college.percentage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
