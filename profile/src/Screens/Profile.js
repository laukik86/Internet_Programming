import React, { useState } from "react";
import ProfilePhoto from "../Components/ProfilePhoto";
import Bio from "../Components/Bio";
import Hobbies from "../Components/Hobbies";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import Academics from "../Components/Academics";
import Projects from "../Components/Projects"; 
import pic from "../Components/atharva.jpg";

const profileData = {
  name: "Atharva Prabhakar Patil",
  bio: "I am a Front-End Developer skilled in HTML, CSS, JavaScript, and React. I enjoy coding and creating user-friendly interfaces.",
  hobbies: ["Jogging", "Cycling", "Playing Football"],
  skills: [
    "Front-End Development (HTML, CSS, JavaScript)",
    "Experience in React.js",
    "Languages: C++, Java"
  ],
  education: [
    {
      school: "Smt. Sulochanadevi Singhania School",
      year: "2021"
    },
    {
      college: "Vivekanand Education Society's Institute of Technology (VESIT)",
      graduationYear: 2026
    }
  ],
  academics: {
    tenth: "97%",
    twelfth: "86%",
    jee: "94 Percentile"
  },
  projects: [
    {
      title: "Recipe Generator",
      description: "Made using Python, MySQL, and APIs"
    },
    {
      title: "NotifyMe",
      description: "Made using Java and MySQL"
    },
    {
      title: "Food Delivery",
      description: "Made using React JS, Node JS, and MongoDB"
    },
    {
      title: "Botify",
      description: "Spotify Clone using HTML, CSS, and JavaScript for playing songs and creating playlists"
    }
  ]
};

const Profile = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <ProfilePhoto url={pic} />
        </div>
        <div className="col-md-8">
          <Bio name={profileData.name} bio={profileData.bio} />
          <Skills skills={profileData.skills} />
          <Education education={profileData.education} />
          <Academics academics={profileData.academics} />
          <Hobbies hobbies={profileData.hobbies} />

          <button
            className="btn btn-outline-primary mt-3"
            onClick={toggleProjects}
          >
            {showProjects ? "Hide Projects" : "Show My Projects"}
          </button>

          {showProjects && <Projects projects={profileData.projects} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
