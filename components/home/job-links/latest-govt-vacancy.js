import { getData } from "@/utils";
import Link from "next/link";
import React from "react";
import { RiCircleFill } from "react-icons/ri";

const LatestGovtVacancy = async () => {
  const jobData = await getData("/job");
  const linkData = jobData.rows;
  return (
    <div className="lg:p-4 sm:p-4 p-2">
      {" "}
      {/* Responsive padding */}
      <div className="relative p-6 text-white text-center rounded-tl-xl rounded-br-xl min-h-10 lg:text-lg text-xs lg:min-h-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="relative text-sm font-medium z-10 lg:text-xl lg:font-medium">
            Latest Govt. Vacancy
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-2/4 bg-skyblue transform skew-x-[-20deg]"></div>
        <div className="absolute bottom-0 left-0 w-full h-2/4 bg-skyblue transform skew-x-[20deg]"></div>
      </div>
      <div className="p-2 border border-skyblue ml-1 w-full">
        <ul className="space-y-3 text-xs lg:text-base">
          {linkData &&
            linkData?.length > 0 &&
            linkData?.length < 20 &&
            linkData?.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <RiCircleFill size={6} className="text-skyblue" />
                <Link
                  href={`/job?/slug=${item.slug}&&name=${item.jobUrl}&&id=${item.id}`}
                  target="_blank"
                  className="text-linkColor  hover:underline"
                >
                  {item.jobUrl}
                </Link>
              </li>
            ))}
        </ul>
        <div className="flex justify-end mr-4 my-2">
          <Link
            className="text-base text-darkblue font-semibold lg:text-lg"
            href="all-job"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestGovtVacancy;
