import React from "react";
import ContentItem from "./content-item";
import { contentData } from "@/utils";

const Content = () => {
  return (
    <div>
      {contentData.map((item, index) => (
        <ContentItem
          key={index}
          headingText={item.title}
          contentText={item.content}
        />
      ))}
    </div>
  );
};

export default Content;
