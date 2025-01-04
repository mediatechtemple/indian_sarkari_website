"use client";
import { useEffect, useState } from "react";
import { allJobFaqs, getData } from "@/utils";
import { useParams } from "next/navigation";
import Category from "@/components/component-types/category";
import Archives from "@/components/component-types/archives";
import FreeOldPaper from "@/components/component-types/free-old-paper";
import MockTest from "@/components/component-types/mock-test";
import FreeBook from "@/components/component-types/free-book";
import FreeNotes from "@/components/component-types/free-notes";
import AllJobContent from "@/components/home/content/all-job-content";
import AccordionItem from "@/components/home/faq/accordionItem";
import { RiCircleFill } from "react-icons/ri";
import Link from "next/link";

const CategoryPage = ({ params }) => {
  const { category } = useParams(); // Get the category name from the URL
  //console.log(category[1]);
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    if (!category) return;

    (async () => {
      try {
        const response = await getData(`/job/category/${category[1]}`);
        setJobData(response || []);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    })();
  }, [category]);
  console.log(jobData);

  return (
    <div className="w-full">
      <h3 className="text-base text-center mt-3 sm:text-xl sm:mt-8  sm:mb-3 lg:text-2xl lg:mt-8 lg:mb-4 text-skyblue font-semibold">
        {category ? category : "All"} Government job
      </h3>
      <div className="w-full flex justify-between gap-3 py-1 mt-5 lg:gap-8 md:gap-6 lg:mt-8">
        <div className="border border-borderColor w-9/12">
          <div className="bg-skyblue text-white text-center text-base font-medium p-4 md:text-xl lg:text-2xl">
            Latest {category ? category : "Govt."} Vacancy
          </div>

          <ul className="p-4 space-y-5">
            <ul className="space-y-3 text-xs lg:text-base">
              {jobData &&
                jobData?.length > 0 &&
                jobData?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <RiCircleFill size={6} className="text-skyblue" />
                    <Link
                      href={`/home?/slug=${item.slug}&&name=${item.jobUrl}&&id=${item.id}`}
                      target="_blank"
                      className="text-linkcolor  hover:underline"
                    >
                      {item.jobUrl}
                    </Link>
                  </li>
                ))}
            </ul>
          </ul>
          {jobData?.length === 0 && (
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

export default CategoryPage;
