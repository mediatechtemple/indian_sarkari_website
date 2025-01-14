"use client";
import Loading from "@/app/loading";
import { getData } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiCircleFill } from "react-icons/ri";

const LatestGovtVacancy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getData(`/job`);
        setData(response || []);
      } catch (error) {
        console.error("Error fetching LatestGovtVacancy data:", error);
      }
    })();
  }, []);

  const linkData = data?.rows?.slice(0, 10) || data;

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
            linkData?.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <RiCircleFill size={6} className="text-skyblue" />
                <Link
                  //href={`/home?/slug=${item.slug}&&name=${item.jobUrl}&&id=${item.id}`}
                  //href={`${item.slug}`}
                  href={`${item.Category.name}/${item.slug}/`}
                  target="_blank"
                  className="text-linkcolor  hover:underline"
                >
                  {item.jobUrl}
                </Link>
              </li>
            ))}
        </ul>
        <div className="flex justify-end mr-4 my-2">
          <Link
            className="text-base text-darkblue font-semibold lg:text-lg"
            href="latest-vacancy?type=jobs"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestGovtVacancy;
