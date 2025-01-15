"use client";
import { getData } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiCircleFill } from "react-icons/ri";

const LatestGovtAdmitCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getData("/jobupdate/get/admit-cards");
        setData(response || []);
      } catch (error) {
        console.error("Error fetching LatestGovtVacancy data:", error);
      }
    })();
  }, []);
  const linkData = data?.rows?.slice(0, 10);
  console.log(data);

  return (
    <div className="lg:p-4 sm:p-4 p-2">
      {" "}
      {/* Responsive padding */}
      <div className="relative p-6 text-white text-center border-red-800 rounded-tl-xl rounded-br-xl min-h-10 lg:text-lg text-xs lg:min-h-20">
        {/* Title with layered background */}
        <div className="bg-skyblue absolute inset-0 flex items-center justify-center">
          <p className="relative text-sm font-medium z-10 lg:text-xl lg:font-medium">
            Latest Govt. Admit Card
          </p>
        </div>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-2 w-full h-2/4 bg-skyblue transform skew-x-[-20deg]"></div>
        <div className="absolute bottom-0 right-2 w-full h-2/4 bg-skyblue transform skew-x-[20deg]"></div>
        <div className="absolute top-0 left-2 w-full h-2/4 bg-skyblue transform skew-x-[20deg] -rotate-180"></div>
        <div className="absolute bottom-0 left-2 w-full h-2/4 bg-skyblue transform skew-x-[-20deg] -rotate-180"></div>
      </div>
      {/* Content section */}
      <div className="p-2 border border-skyblue w-full">
        <ul className="text-xs lg:text-base">
          {linkData &&
            linkData?.length > 0 &&
            linkData?.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <RiCircleFill size={6} className="text-skyblue" />
                <Link
                  // href={`${item?.job?.slug || item?.slug}`}
                  //href={`/admit-card?/slug=${item?.job?.slug}&&name=${item?.admitCardUrl}&&id=${item?.id}`}
                  href={`/${item?.Category?.name}/${
                    item?.job?.slug || item?.slug
                  }`}
                  target="_blank"
                  className="text-linkcolor  hover:underline"
                >
                  {item?.admitCardUrl}
                </Link>
              </li>
            ))}
        </ul>
        <div className="flex justify-end mr-4 my-2">
          <Link
            className="text-base text-darkblue font-semibold lg:text-lg"
            href="latest-vacancy?type=admitCards"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestGovtAdmitCard;
