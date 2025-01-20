"use client";

import Archives from "@/components/component-types/archives";
import Category from "@/components/component-types/category";
import FreeBook from "@/components/component-types/free-book";
import FreeNotes from "@/components/component-types/free-notes";
import FreeOldPaper from "@/components/component-types/free-old-paper";
import MockTest from "@/components/component-types/mock-test";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getData } from "@/utils";
import Loading from "@/app/loading";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
const SlugCategoryData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [updateData, setUpdateData] = useState({});
  const [admissionData, setAdmissionData] = useState({});
  const [headingData, setHeadingData] = useState([]);
  const { slug } = useParams();
  //console.log(slug);
  useEffect(() => {
    if (!slug) return;
    (async () => {
      try {
        setLoading(true);
        // const response = await getData(`/job/slug/${slug}`);
        const [response, updateResponse, admissionResponse] = await Promise.all(
          [
            getData(`/job/slug/${slug}`),
            getData(`/jobupdate/slug/${slug}`),
            getData(`/admission/slug/${slug}`),
          ]
        );
        // Only set data if the response is valid
        if (response && response.title) {
          setData(response);
        }
        if (updateResponse && updateResponse.title) {
          setUpdateData(updateResponse);
        }
        if (admissionResponse && admissionResponse.title) {
          setAdmissionData(admissionResponse);
        }
        // Extract headings from content
        const content =
          response?.content ||
          response?.job?.content ||
          updateResponse?.content ||
          admissionResponse?.content ||
          "";

        const parser = new DOMParser();
        const doc = parser.parseFromString(content, "text/html");
        const headings = Array.from(
          doc.querySelectorAll("h2, h3, h4, h5, h6")
        ).map((heading) => ({
          text: heading.textContent,
          id:
            heading.id ||
            heading.textContent.replace(/\s+/g, "-").toLowerCase(),
        }));
        console.log(headings);
        // Add IDs to headings for anchor links
        headings.forEach((heading) => {
          const element = doc.getElementById(heading.id);
          if (element) {
            element.id = heading.id;
          }
        });

        setHeadingData(headings);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  //console.log(admissionData);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full flex justify-between gap-3 p-1 mt-5 lg:gap-8 md:gap-6 lg:mt-8">
      <div style={{ width: "70%" }}>
        <div className="sm:p-1">
          <h1 className="text-xs font-medium sm:text-base lg:text-xl text-gray-800 mt-2 lg:mt-4">
            <span className="text-xs sm:text-base lg:text-xl text-purple font-semibold">
              Name of Post:{" "}
            </span>
            {data?.title || updateData?.title || admissionData?.title}
          </h1>
          {/* Table of Contents */}
          {headingData.length > 0 && (
            <div className="px-2 border rounded shadow-sm bg-gray-50">
              <h2
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between text-red font-medium text-xs sm:text-sm sm:py-2 md:text-base  lg:text-lg  lg:font-medium  cursor-pointer"
              >
                Know what all is in this article
                <span className="">
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </h2>
              <ul className="list-disc pl-5 mt-2">
                {isOpen &&
                  headingData.map((heading) => (
                    <li key={heading.id}>
                      <div
                        className="text-blue-500 hover:underline cursor-pointer"
                        onClick={() => {
                          const elements = Array.from(
                            document.querySelectorAll("h2, h3, h4, h5, h6")
                          );
                          const target = elements.find(
                            (el) =>
                              el.textContent.trim() === heading.text.trim()
                          );
                          if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {heading.text}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          <h5 className="text-[11px] font-medium sm:text-base lg:text-xl text-gray-800 mt-2 lg:mt-4">
            <span className="text-xs sm:text-base lg:text-xl text-purple font-semibold">
              Post Date Update:{" "}
            </span>
            {data?.date ||
            data?.job?.date ||
            updateData?.date ||
            admissionData?.date
              ? `${new Date(
                  data?.date ||
                    data?.job?.date ||
                    updateData?.date ||
                    admissionData?.date
                ).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })} | ${new Date(
                  data?.date ||
                    data?.job?.date ||
                    updateData?.date ||
                    admissionData?.date
                ).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}`
              : "No date available"}
          </h5>
          <h5 className="text-xs font-medium sm:text-sm lg:text-base text-gray-800 mt-2 lg:mt-4">
            <span className="text-xs sm:text-base lg:text-xl text-purple font-semibold">
              Short Information:{" "}
            </span>
            {data?.description ||
              data?.job?.description ||
              updateData?.description ||
              admissionData?.description}
          </h5>
          <div
            className="responsive-content mt-4"
            // dangerouslySetInnerHTML={{
            //   __html: JSON.parse(data.content).join("") || "",
            // }}
            dangerouslySetInnerHTML={{
              __html:
                data?.content ||
                data?.job?.contnet ||
                updateData?.content ||
                admissionData?.content,
            }}
          />
        </div>
      </div>
      <div style={{ width: "30%" }}>
        <div className="flex flex-col gap-8 mt-2">
          {/* Category */}
          <Category />

          {/* Archives */}
          <Archives />

          {/* Box 1: Free Old Paper */}
          <FreeOldPaper />

          {/* Box 2: Mock Test */}
          <MockTest />

          {/* Box 3: Free Books */}
          <FreeBook />
          {/* Box 4: Free Notes */}
          <FreeNotes />
        </div>
      </div>
    </div>
  );
};
export default SlugCategoryData;
