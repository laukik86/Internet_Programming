import React from "react";

const Bio = ({ name, bio }) => {
  return (
    <div>
      <h3 className="font-weight-bold">{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default Bio;
