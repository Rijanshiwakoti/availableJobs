import { Job } from "./job";
import React, { useState } from "react";
import CompanyNames from "./CompanyNames";

const JObs = ({ companyJobs }) => {
  const [activeCompany, setActiveCompany] = useState("TOMMY");
  const handleJobs = (company) => {
    setActiveCompany(company);
  };
  return (
    <div className="jobs-center">
      <CompanyNames
        company={companyJobs}
        handleJobs={handleJobs}
        activeCompany={activeCompany}
      />
      <Job jobs={companyJobs} activeCompany={activeCompany} />
    </div>
  );
};

export default JObs;
