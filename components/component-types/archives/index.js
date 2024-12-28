import Link from "next/link";
import React from "react";

const Archives = () => {
  return (
    <div className="border border-borderColor">
      <h2 className="text-sm p-4 md:py-4 md:text-sm lg:text-lg bg-skyblue font-semibold text-white">
        Archives
      </h2>
      <div className="flex flex-col">
        {[
          "February 2024",
          "January 2024",
          "December 2023",
          "November 2023",
          "October 2023",
          "September 2023",
          "August 2023",
          "July 2023",
          "June 2023",
          "May 2023",
          "April 2023",
        ].map((archive, idx) => (
          <Link
            key={idx}
            href="#"
            className="flex justify-between text-xs sm:text-sm border-b border-borderColor items-center lg:text-base p-3 lg:p-4 text-darkblue font-medium"
          >
            {archive}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Archives;
