import { useContext, useState, useEffect } from "react";
import "./ProjectsList.css";

//assets
import LikedFilled from "../../assets/like-filed.svg";
import LikedOutline from "../../assets/like.svg";

//Components
import Button from "../Button/Button";

//Context
import { AppContext } from "../Contexts/AppContext";

//Utils
import { getApiData } from "../../services/apiServices";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const appContext = useContext(AppContext);
  const [favProjects, setfavProjects] = useState([]);
  const handleSavedProjects = (id) => {
    setfavProjects((prevFavProject) => {
      if (prevFavProject.includes(id)) {
        const filterArray = prevFavProject.filter(
          (projectId) => projectId !== id
        );
        sessionStorage.setItem("favProject", JSON.stringify(filterArray));
        return prevFavProject.filter((projectId) => projectId !== id);
      } else {
        sessionStorage.setItem(
          "favProject",
          JSON.stringify([...prevFavProject, id])
        );
        return [...prevFavProject, id];
      }
    });
  };

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

  useEffect(() => {
    const savedFavProject = JSON.parse(sessionStorage.getItem("favProject"));
    if (savedFavProject) {
      setfavProjects(savedFavProject);
    }
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
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
                <Button
                  className="btn"
                  buttonStyle="unstyled"
                  onClick={() => handleSavedProjects(project.id)}
                >
                  <img
                    src={
                      favProjects.includes(project.id)
                        ? LikedFilled
                        : LikedOutline
                    }
                    height="20px"
                    alt=""
                  />
                </Button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProjectsList;
