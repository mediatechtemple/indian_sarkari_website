"use client";
import { getData } from "@/utils";
import JobLinkItem from "./job-link-items";
import { useEffect, useState } from "react";

const JobLink = () => {
  const [jobUrl, setJobUrl] = useState([]);

  useEffect(() => {
    // Using IIFE to call the async function properly
    (async () => {
      try {
        const data = await getData("/job");
        setJobUrl(data?.rows || []);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    })();
  }, []); // Empty dependency array ensures the API call runs only once.

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-y-5 mt-5 p-1 w-full justify-start">
      <JobLinkItem
        title="Latest Govt. Vacancy"
        link="#"
        additionalClasses="polygon-default"
        jobUrl={jobUrl}
      />
      <JobLinkItem
        title="Latest Govt. Admit Card"
        link="#"
        additionalClasses="clip-polygon-middle"
      />
      <JobLinkItem
        title="Latest Govt. Result"
        link="#"
        additionalClasses="polygon-flipped"
      />
      <JobLinkItem
        title="Notification"
        link="#"
        additionalClasses="polygon-default"
      />
      <JobLinkItem
        title="Answer Keys"
        link="#"
        additionalClasses="clip-polygon-middle"
      />
      <JobLinkItem
        title="Important"
        link="#"
        additionalClasses="polygon-flipped"
      />
      <JobLinkItem
        title="Latest Govt. School & College Admission"
        link="#"
        additionalClasses="polygon-default"
      />
      <JobLinkItem
        title="Latest Govt. School & College Admit Card"
        link="#"
        additionalClasses="clip-polygon-middle"
      />
      <JobLinkItem
        title="Latest Govt. School & College Result"
        link="#"
        additionalClasses="polygon-flipped"
      />
    </div>
  );
};

export default JobLink;
