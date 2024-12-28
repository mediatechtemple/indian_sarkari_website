import Link from "next/link";
import React from "react";
import { RiTestTubeLine } from "react-icons/ri";

const MockTest = () => {
  return (
    <div className="border border-borderColor text-center">
      <h2 className="text-xs py-3 lg:text-lg bg-skyblue font-semibold mb-4 text-white">
        Mock Test
      </h2>
      <div className="flex flex-col gap-3">
        {["SCC", "Banking", "Teaching"].map((item, idx) => (
          <Link
            key={idx}
            href="#"
            className="flex text-xs sm:text-sm shadow-sm items-center lg:text-base gap-3 p-2 hover:bg-skyblue text-darkblue font-medium hover:text-white transition duration-500"
          >
            <RiTestTubeLine className="w-3" />
            {item}
          </Link>
        ))}
      </div>
      <div className="flex justify-end mr-2 mt-5 mb-2">
        <Link
          href="#"
          className="text-xs text-darkblue font-semibold lg:text-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default MockTest;
