"use client";

import { getData } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiCircleFill } from "react-icons/ri";

const LatestAnswerKeyVacancy = () => {
  // const answerData = await getData("/jobupdate/get/answer-keys");
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getData("/jobupdate/get/answer-keys");
        setData(response || []);
      } catch (error) {
        console.error("Error fetching LatestGovtVacancy data:", error);
      }
    })();
  }, []);

  return (
    <div className="lg:p-4 sm:p-4 p-2">
      {" "}
      {/* Responsive padding */}
      <div className="relative p-6 text-white text-center rounded-tl-xl rounded-br-xl min-h-10 lg:text-lg text-xs lg:min-h-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="relative text-sm font-medium z-10 lg:text-xl lg:font-medium">
            Answer Key
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-2/4 bg-skyblue transform skew-x-[-20deg]"></div>
        <div className="absolute bottom-0 left-0 w-full h-2/4 bg-skyblue transform skew-x-[20deg]"></div>
      </div>
      <div className="p-2 border border-skyblue ml-1 w-full">
        <ul className="space-y-3 text-xs lg:text-base">
          {data &&
            data?.length > 0 &&
            data?.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <RiCircleFill size={6} className="text-skyblue flex-shrink-0" />
                <Link
                  href={`/${item?.Category?.name.replace(/\s+/g, "-")}/${
                    item?.job?.slug || item?.slug
                  }`}
                  //href={`${item?.job?.slug || item?.slug}`}
                  //href={`/answer-key?/slug=${item.slug}&&name=${item.answerKeyUrl}&&id=${item.id}`}
                  target="_blank"
                  className="text-linkcolor  hover:underline"
                >
                  {item?.answerKeyUrl}
                </Link>
              </li>
            ))}
        </ul>
        <div className="flex justify-end mr-4 my-2">
          <Link
            className="text-base text-darkblue font-semibold lg:text-lg"
            href="latest-vacancy?type=answerKeys"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestAnswerKeyVacancy;
