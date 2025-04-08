import { useState, useEffect } from "react";
import "./ProjectsList.css";

//assets
import LikedFilled from "../../assets/like-filed.svg";
import Like from "../../assets/like.svg";

//Utils
import { getApiData } from "../../services/apiservices";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData("projects");
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>Follow Our Projects</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="projects-grid">
        {projects
          ? projects.map((project) => (
              <div
                className="project-card d-flex jc-center al-center fd-column"
                key={project.id}
              >
                <div
                  className="thumb tertiary-background"
                  style={{ backgroundImage: `url(${project.thumb})` }}
                ></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <img src={LikedFilled} height="20px" alt="" />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProjectsList;
