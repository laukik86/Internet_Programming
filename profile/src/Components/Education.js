import React from "react";

const Education = ({ education }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Education</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            School: <strong>{education[0].school} (2021)</strong>
          </li>
          <li className="list-group-item">
            College: <strong>{education[1].college}</strong>, Graduation Year:{" "}
            <strong>{education[1].graduationYear}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
