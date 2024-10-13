import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Skills</h5>
        <ul className="list-group list-group-flush">
          {skills.map((skill, index) => (
            <li key={index} className="list-group-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
