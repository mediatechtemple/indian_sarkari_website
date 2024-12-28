import React from "react";
import ContentItem from "./content-item";
import { allJobContentData } from "@/utils";

const AllJobContent = () => {
  return (
    <div>
      {allJobContentData.map((item, index) => (
        <ContentItem
          key={index}
          headingText={item.title}
          contentText={item.content}
        />
      ))}
    </div>
  );
};

export default AllJobContent;
