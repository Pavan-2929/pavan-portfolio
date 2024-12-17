import { hackathonesData } from "@/data/hackathones";
import React from "react";

const Hackathones = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-3xl sm:text-4xl font-bold font-serif">
            Hackathones
          </p>
        </div>
      </div>
      <div className="border rounded-md flex flex-col md:mt-10 mt-6 py-4 sm:py-6">
        {hackathonesData &&
          hackathonesData.map((event, index) => (
            <div
              key={index}
              className={`${
                index !== 0 ? "border-t pt-6" : "pb-6"
              } px-4 sm:px-6`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-2">
                {/* Event Name */}
                <p className="font-bold text-lg sm:text-xl">{event.name}</p>
                {/* Event Date */}
                <p className="font-serif text-sm sm:text-base">{event.date}</p>
              </div>

              {/* Event Description */}
              <div className="text-sm sm:text-base text-muted-foreground mt-2 sm:mt-0">
                <p>{event.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hackathones;
