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
const SlugCategoryData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [updateData, setUpdateData] = useState({});
  const { slug } = useParams();
  //console.log(slug);
  useEffect(() => {
    if (!slug) return;
    (async () => {
      try {
        setLoading(true);
        // const response = await getData(`/job/slug/${slug}`);
        const [response, updateResponse] = await Promise.all([
          getData(`/job/slug/${slug}`),
          getData(`/jobupdate/slug/${slug}`),
        ]);
        setData(response);
        setUpdateData(updateResponse);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);
  // console.log(data);

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
            {data?.title || updateData?.title}
          </h5>
          <h5 className="text-[11px] font-medium sm:text-base lg:text-xl text-gray-800 mt-2 lg:mt-4">
            <span className="text-xs sm:text-base lg:text-xl text-purple font-semibold">
              Post Date Update:{" "}
            </span>
            {data?.date
              ? `${new Date(data?.date || data?.job?.date).toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  }
                )} | ${new Date(
                  data?.created_at ||
                    data?.job?.created_at ||
                    updateData?.created_at
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
              updateData?.description}
          </h5>
          <div
            className="responsive-content mt-4"
            // dangerouslySetInnerHTML={{
            //   __html: JSON.parse(data.content).join("") || "",
            // }}
            dangerouslySetInnerHTML={{
              __html:
                data?.content || data?.job?.contnet || updateData?.content,
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
