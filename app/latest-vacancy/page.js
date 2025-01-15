"use client";
import Archives from "@/components/component-types/archives";
import Category from "@/components/component-types/category";
import FreeBook from "@/components/component-types/free-book";
import FreeNotes from "@/components/component-types/free-notes";
import FreeOldPaper from "@/components/component-types/free-old-paper";
import MockTest from "@/components/component-types/mock-test";
import AllJobContent from "@/components/home/content/all-job-content";
import AccordionItem from "@/components/home/faq/accordionItem";
import { allJobFaqs, getData } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiCircleFill } from "react-icons/ri";
import Loading from "../loading";
import { useSearchParams } from "next/navigation";

const AllLatestJob = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  // const searchQuery = searchParams.get("search") || "";
  const [jobData, setJobData] = useState([]);
  const [admitCardData, setAdmitCardData] = useState([]);
  const [answerKeyData, setAnswerKeyData] = useState([]);
  const [resultData, setResultData] = useState([]);
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
        ] = await Promise.all([
          getData("/job"),
          getData("/jobupdate/get/admit-cards"),
          getData("/jobupdate/get/answer-keys"),
          getData("/jobupdate/get/results"),
        ]);

        setJobData(jobResponse.rows || []);
        setAdmitCardData(admitCardResponse.rows || []);
        setAnswerKeyData(answerKeyResponse || []);
        setResultData(resultResponse || []);

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
  let dataToShow = [];
  let headerText = "";

  switch (type) {
    case "jobs":
      dataToShow = jobData;
      headerText = "All Government Jobs";
      break;
    case "admitCards":
      dataToShow = admitCardData;
      headerText = "All Admit Cards";
      break;
    case "answerKeys":
      dataToShow = answerKeyData;
      headerText = "All Answer Keys";
      break;
    case "results":
      dataToShow = resultData;
      headerText = "All Results";
      break;
    default:
      dataToShow = [];
      headerText = "No Data Available";
  }
  // if (searchQuery) {
  //   dataToShow = dataToShow.filter((item) => {
  //     const fieldToSearch =
  //       item.jobUrl || item.admitCardUrl || item.answerKeyUrl || item.resultUrl;

  //     return fieldToSearch?.toLowerCase().includes(searchQuery.toLowerCase());
  //   });
  //   console.log(dataToShow);
  // }
  return (
    <div className="w-full">
      <h3 className="text-base text-center mt-3 sm:text-xl sm:mt-8  sm:mb-3 lg:text-2xl lg:mt-8 lg:mb-4 text-skyblue font-semibold">
        {headerText}
      </h3>
      <div className="w-full flex justify-between gap-3 py-1 mt-5 lg:gap-8 md:gap-6 lg:mt-8">
        <div className="border border-borderColor w-9/12">
          <div className="bg-skyblue text-white text-center text-base font-medium p-4 md:text-xl lg:text-2xl">
            Latest Govt. Vacancy
          </div>

          <ul className="p-4 space-y-5">
            <ul className="space-y-3 text-xs lg:text-base">
              {dataToShow.length > 0 ? (
                dataToShow.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <RiCircleFill size={6} className="text-skyblue" />
                    <Link
                      href={`/${item.Category.name}/${item.slug}`}
                      target="_blank"
                      className="text-linkcolor hover:underline"
                    >
                      {item.jobUrl ||
                        item.admitCardUrl ||
                        item.answerKeyUrl ||
                        item.resultUrl}
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
          {dataToShow.length === 0 && (
            <div className="flex justify-center items-center">
              <h3 className="text-base text-skyblue font-medium">
                No data found
              </h3>
            </div>
          )}
        </div>

        <div style={{ width: "30%" }}>
          <div className="flex flex-col gap-8">
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
      <div className="border border-borderColor p-2">
        {/* conent  */}

        <AllJobContent />

        {/* faq section */}
        <div className="p-2">
          <div className="bg-skyblue">
            <h3 className="p-2 text-center text-white font-medium text-base sm:text-xl sm:py-3 md:text-2xl md:py-4 lg:text-2xl lg:font-semibold lg:py-4">
              Most Popular Questions Which Students Ask
            </h3>
          </div>

          {allJobFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <p className="text-xs mt-6 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            Conclusion:
          </span>{" "}
          India Sarkari Naukri is your one-stop destination for the latest
          government job updates in India. Whether you aspire to be an ITI
          Apprentice, Graduate Apprentice, Stenographer, Railway professional,
          or banking expert, we provide you with the most comprehensive and
          up-to-date job listings. Our mission is to connect talented
          individuals with rewarding government career opportunities, helping
          you take the next step in your professional journey. Stay tuned, stay
          informed,and let us guide you toward a brighter futur in the public
          sector.Your dream government job is just a click away.
        </p>
      </div>
    </div>
  );
};

export default AllLatestJob;
