import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Category = () => {
  return (
    <div className="border border-borderColor">
      <h2 className="text-sm p-4 md:py-4 md:text-sm lg:text-lg bg-skyblue font-semibold text-white">
        Category
      </h2>
      <div className="flex flex-col">
        {[
          "Govt. Jobs",
          "Railway Jobs",
          "Bank Job",
          "Defence Jobs",
          "Postal Jobs",
          "Judicial Jobs",
          "Teaching Jobs",
          "Engineering",
          "Clerical Jobs",
          "Medical Jobs",
        ].map((category, idx) => (
          <Link
            key={idx}
            href="#"
            className="flex justify-between text-xs sm:text-sm border-b border-borderColor items-center lg:text-base p-3 lg:p-4 text-darkblue font-medium"
          >
            {category}
            <RiArrowRightSLine />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
