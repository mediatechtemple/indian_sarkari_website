"use client";

import { getData } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiCircleFill } from "react-icons/ri";
import Loading from "../loading";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("keyword") || "";
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [
          jobResponse,
          admitCardResponse,
          answerKeyResponse,
          resultResponse,
          admissionResponse,
        ] = await Promise.all([
          getData("/job"),
          getData("/jobupdate/get/admit-cards"),
          getData("/jobupdate/get/answer-keys"),
          getData("/jobupdate/get/results"),
          getData("/admission"),
        ]);

        const combined = [
          ...(jobResponse.rows || []).map((item) => ({ ...item, type: "job" })),
          ...(admitCardResponse.rows || []).map((item) => ({
            ...item,
            type: "admitCard",
          })),
          ...(answerKeyResponse || []).map((item) => ({
            ...item,
            type: "answerKey",
          })),
          ...(resultResponse || []).map((item) => ({
            ...item,
            type: "result",
          })),
          ...(admissionResponse.rows || []).map((item) => ({
            ...item,
            type: "job",
          })),
        ];

        setCombinedData(combined);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }

  const filteredData = searchQuery
    ? combinedData.filter((item) => {
        const searchableField =
          item.jobUrl ||
          item.admitCardUrl ||
          item.answerKeyUrl ||
          item.resultUrl ||
          item.admissionUrl ||
          "";
        return searchableField
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      })
    : combinedData;

  return (
    <div className="w-full">
      <h3 className="text-base text-center mt-3 sm:text-xl sm:mt-8  sm:mb-3 lg:text-2xl lg:mt-8 lg:mb-4 text-skyblue font-semibold">
        Find Your Vacancy Details, Syllabus, Admit Card, Answer Key, Result, Etc
      </h3>
      <div className="w-full flex justify-between gap-3 py-1 mt-5 lg:gap-8 md:gap-6 lg:mt-8">
        <div className="border border-borderColor w-9/12">
          <div className="bg-skyblue text-white text-center text-base font-medium p-4 md:text-xl lg:text-2xl">
            Latest Govt. Vacancy
          </div>

          <ul className="p-4 space-y-5">
            <ul className="space-y-3 text-xs lg:text-base">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <RiCircleFill size={6} className="text-skyblue" />
                    <Link
                      href={item.slug || "#"}
                      target="_blank"
                      className="text-linkcolor hover:underline"
                    >
                      {item.jobUrl ||
                        item.admitCardUrl ||
                        item.answerKeyUrl ||
                        item.resultUrl ||
                        item.admissionUrl}
                    </Link>
                  </li>
                ))
              ) : (
                <div className="flex justify-center items-center">
                  <h3 className="text-base text-skyblue font-medium">
                    No data found
                  </h3>
                </div>
              )}
            </ul>
          </ul>
          {filteredData.length === 0 && (
            <div className="flex justify-center items-center">
              <h3 className="text-base text-skyblue font-medium">
                No data found
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
