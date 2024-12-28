import { getData } from "@/utils";
import Link from "next/link";
import React from "react";
import { RiCircleFill } from "react-icons/ri";

const LatestGovtAdmitCard = async () => {
  const admitData = await getData("/jobupdate/get/admit-cards");
  const linkData = admitData?.rows;
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
                  href={`/admit-card?/slug=${item?.job?.slug}&&name=${item?.admitCardUrl}&&id=${item?.id}`}
                  target="_blank"
                  className="text-linkColor  hover:underline"
                >
                  {item?.admitCardUrl}
                </Link>
              </li>
            ))}
        </ul>
        <div className="flex justify-end mr-4 my-2">
          <Link
            className="text-base text-darkblue font-semibold lg:text-lg"
            href="#"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestGovtAdmitCard;
