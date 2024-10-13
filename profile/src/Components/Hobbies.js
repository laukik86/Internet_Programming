import React from "react";

const Hobbies = ({ hobbies }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Hobbies</h5>
        <ul className="list-group list-group-flush">
          {hobbies.map((hobby, index) => (
            <li key={index} className="list-group-item">
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hobbies;
