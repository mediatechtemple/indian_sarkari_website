import React from "react";
import LatestGovtVacancy from "./latest-govt-vacancy";
import LatestGovtAdmitCard from "./latest-govt-admit-card";
import LatestGovtResult from "./latest-govt-result";
import LatestAnswerKeyVacancy from "./latest-govt-answer-key";
import LatestGovtAdmission from "./latest-govt-admission";

const JobLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-y-5  mt-5 p-1 w-full justify-start">
      <LatestGovtVacancy />
      <LatestGovtAdmitCard />
      <LatestGovtResult />
      <LatestAnswerKeyVacancy />
      <LatestGovtAdmission />
    </div>
  );
};

export default JobLinks;
