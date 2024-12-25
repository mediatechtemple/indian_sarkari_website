// pages/Home.js
import React from "react";
import JobSlider from "@/components/home/job-slider";
import CategoryList from "@/components/home/goverment-job-category";

import JobLink from "@/components/home/job-links";
import Content from "@/components/home/content";
import StudyMaterial from "@/components/home/study-metarial";
import FAQSection from "@/components/home/faq";

const Home = () => {
  return (
    <div className="w-full max-w-6xl m-auto">
      {/* Job Slider Section */}

      <JobSlider />

      {/* Category List Section */}

      <CategoryList />

      {/* Job List */}
      <JobLink />
      {/* study material */}
      <StudyMaterial />
      <div className="border border-border-color p-2">
        {/* conent  */}

        <Content />

        {/* faq section */}
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
