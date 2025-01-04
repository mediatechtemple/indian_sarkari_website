"use client";
import { getData } from "@/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  RiArrowRightSLine,
  RiBookLine,
  RiTestTubeLine,
  RiStickyNoteLine,
} from "react-icons/ri"; // Add necessary icons
import Loading from "../loading";

const AdmitCardLinksAndCategory = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const id = searchParams.get("id");
  console.log(id);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getData(`/jobupdate/admitCard/${id}`);

        setData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job data:", error);
        setError("Failed to load content.");
      }
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full flex justify-between gap-3 p-1 mt-5 lg:gap-8 md:gap-6 lg:mt-8">
      <div style={{ width: "70%" }}>
        <div className="sm:p-1">
          <h5 className="text-xs font-medium sm:text-base lg:text-xl text-gray-800 mt-2 lg:mt-4">
            <span className="text-xs sm:text-base lg:text-xl text-purple font-semibold">
              Name of Post:{" "}
            </span>
            {data?.job?.title}
          </h5>
          <h5 className="text-[11px] font-medium sm:text-base lg:text-xl text-gray-800 mt-2 lg:mt-4">
            <span className="text-xs sm:text-base lg:text-xl text-purple font-semibold">
              Post Date Update:{" "}
            </span>
            {data?.job?.created_at
              ? new Date(data.created_at).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
              : "No date available"}
          </h5>
          <h5 className="text-xs font-medium sm:text-sm lg:text-base text-gray-800 mt-2 lg:mt-4">
            <span className="text-xs sm:text-base lg:text-xl text-purple font-semibold">
              Short Information:{" "}
            </span>
            {data?.job?.description}
          </h5>
          <div
            className="responsive-content mt-4"
            dangerouslySetInnerHTML={{ __html: data?.job?.content || "" }}
          />
        </div>
      </div>
      <div style={{ width: "30%" }}>
        <div className="flex flex-col gap-8 mt-2">
          {/* Category */}
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

          {/* Archives */}
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

          {/* Box 1: Free Old Paper */}
          <div className="border border-borderColor text-center">
            <h2 className="text-xs py-3 lg:text-lg bg-skyblue font-semibold mb-4 text-white">
              Free Old Paper
            </h2>
            <div className="flex flex-col gap-3">
              {["SCC", "Banking", "Teaching"].map((item, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="flex text-xs sm:text-sm shadow-sm items-center lg:text-base gap-3 p-2 hover:bg-skyblue text-darkblue font-medium hover:text-white transition duration-500"
                >
                  <RiBookLine className="w-3" />
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

          {/* Box 2: Mock Test */}
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

          {/* Box 3: Free Books */}
          <div className="border border-borderColor text-center">
            <h2 className="text-xs py-3 lg:text-lg bg-skyblue font-semibold mb-4 text-white">
              Free Books
            </h2>
            <div className="flex flex-col gap-3">
              {["SCC", "Banking", "Teaching"].map((item, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="flex text-xs sm:text-sm shadow-sm items-center lg:text-base gap-3 p-2 hover:bg-skyblue text-darkblue font-medium hover:text-white transition duration-500"
                >
                  <RiBookLine className="w-3" />
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

          {/* Box 4: Free Notes */}
          <div className="border border-borderColor text-center">
            <h2 className="text-xs py-3 lg:text-lg bg-skyblue font-semibold mb-4 text-white">
              Free Notes
            </h2>
            <div className="flex flex-col gap-3">
              {["SCC", "Banking", "Teaching"].map((item, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="flex text-xs sm:text-sm shadow-sm items-center lg:text-base gap-3 p-2 hover:bg-skyblue text-darkblue font-medium hover:text-white transition duration-500"
                >
                  <RiStickyNoteLine className="w-6" />
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
        </div>
      </div>
    </div>
  );
};

export default AdmitCardLinksAndCategory;
