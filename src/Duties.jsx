import React from "react";
import { BiCode } from "react-icons/bi";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div className="job-desc" key={index}>
            <BiCode className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
