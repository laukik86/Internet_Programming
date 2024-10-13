import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">My Projects</h5>
        <ul className="list-group list-group-flush">
          {projects.map((project, index) => (
            <li key={index} className="list-group-item">
              <strong>{project.title}</strong>: {project.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
