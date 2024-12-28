import React from "react";

const ContentItem = ({ headingText, contentText }) => {
  return (
    <div>
      <div className="bg-skyblue p-2 text-center text-white font-medium text-base sm:text-xl sm:py-3 md:text-2xl md:py-4 lg:text-2xl lg:font-semibold py-2">
        {/* <h3 className="p-2 text-center text-white font-medium text-base sm:text-xl sm:py-3 md:text-2xl md:py-4 lg:text-2xl lg:font-semibold lg:py-4"> */}
        {headingText}
        {/* </h3> */}
      </div>
      <div className="p-1 mt-1 sm:p-2 sm:mt-1 lg:p-2 lg:mt-2 text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7 lg:leading-7">
        {/* <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7 lg:leading-7"> */}
        {contentText}
        {/* </p> */}
      </div>
    </div>
  );
};

export default ContentItem;
