// pages/Home.js
import React from "react";
import JobSlider from "@/components/home/job-slider";
import CategoryList from "@/components/home/goverment-job-category";

import Content from "@/components/home/content";
import StudyMaterial from "@/components/home/study-metarial";
import FAQSection from "@/components/home/faq";
import JobLinks from "@/components/home/job-links";

const Home = () => {
  return (
    <div className="w-full max-w-6xl m-auto">
      {/* Job Slider Section */}

      <JobSlider />

      {/* Category List Section */}

      <CategoryList />

      {/* Job List */}
      <JobLinks />
      {/* study material */}
      <StudyMaterial />
      <div className="border border-borderColor p-2">
        {/* conent  */}

        <Content />

        {/* faq section */}
        <FAQSection
          headingText={
            "Some Important Questions That Students Search about Sarkari Naukri"
          }
        />
      </div>
    </div>
  );
};

export default Home;
