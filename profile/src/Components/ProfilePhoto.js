import React from "react";

const ProfilePhoto = ({ url }) => {
  return (
    <div>
      <img
        src={url}
        alt="Profile"
        className="rounded-circle img-fluid"
        style={{ width: "150px" }}
      />
    </div>
  );
};

export default ProfilePhoto;
