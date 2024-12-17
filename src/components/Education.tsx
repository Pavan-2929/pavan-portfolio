import React from "react";
import { educationData } from "@/data/education";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Education = () => {
  return (
    <div className="my-2 py-4 pr-4 pl-6 border rounded-md space-y-8">
      {educationData &&
        educationData.map((college, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 sm:gap-x-6"
          >
            {/* Avatar Section */}
            <div className="flex-shrink-0 self-center sm:self-start">
              <Avatar>
                <AvatarImage
                  src={college.logo}
                  className="bg-accent border p-1 w-14 h-14"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="text-[17px] font-semibold text-center sm:text-left">
                  <p>{college.name}</p>
                </div>
                <div className="text-muted-foreground flex justify-center sm:justify-end text-sm font-medium font-serif mt-1 sm:mt-0">
                  <p>{college.start}</p>
                  <p className="mx-1">-</p>
                  <p>{college.end}</p>
                </div>
              </div>

              <div className="text-sm text-muted-foreground font-medium flex flex-col sm:flex-row gap-x-3 gap-y-1 mt-2 text-center sm:text-left">
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
