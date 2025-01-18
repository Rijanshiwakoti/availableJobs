import React from "react";

const CompanyNames = ({ company, handleJobs, activeCompany }) => {
  return (
    <div>
      {company.map((btns) => {
        return (
          <div className="btn-container" key={btns.id}>
            <button
              className={
                activeCompany == btns.company ? "job-btn active-btn" : "job-btn"
              }
              onClick={() => {
                handleJobs(btns.company);
              }}
            >
              {btns.company}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyNames;
