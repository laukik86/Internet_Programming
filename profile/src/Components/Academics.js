import React from "react";

const Academics = ({ academics }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Academic Achievements</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            10th Grade: <strong>{academics.tenth}</strong>
          </li>
          <li className="list-group-item">
            12th Grade: <strong>{academics.twelfth}</strong>
          </li>
          <li className="list-group-item">
            JEE Mains: <strong>{academics.jee}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Academics;
