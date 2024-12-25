import { homeFaqs } from "@/utils";
import AccordionItem from "./accordionItem";

const FAQSection = () => {
  return (
    <div className="mt-4">
      <div className="bg-skyblue">
        <h3 className="p-2 text-center text-white font-medium text-base sm:text-xl sm:py-3 md:text-2xl md:py-4 lg:text-2xl lg:font-semibold lg:py-4">
          Some Important Questions That Students Search about Sarkari Naukri
        </h3>
      </div>
      <div className="mt-3">
        {homeFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
