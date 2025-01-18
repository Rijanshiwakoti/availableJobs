import React from "react";
import Duties from "./Duties";

export function Job({ jobs, activeCompany }) {
  return (
    <>
      {jobs.map((job) => {
        const { id, title, company, dates, duties } = job;
        return (
          <>
            {activeCompany == company ? (
              <div className="job-info" key={id}>
                <h1>{title}</h1>
                <span className="job-company">{company}</span>
                <p className="job-date">{dates}</p>
                <Duties duties={duties} />
              </div>
            ) : null}
          </>
        );
      })}
    </>
  );
}
