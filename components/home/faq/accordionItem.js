"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full">
      <h3
        className="p-2 mt-3 w-full flex justify-between bg-skyblue text-white font-medium text-xs sm:text-sm sm:py-2 md:text-base md:py-3 lg:text-lg lg:w-9/12 lg:font-medium lg:py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="flex items-center">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </h3>
      <div
        className={`overflow-hidden transition-all  duration-100 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isOpen && (
          <div className="p-2 border border-borderColor sm:text-sm md:text-base lg:text-lg lg:w-9/12">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
