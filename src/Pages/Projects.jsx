import { useContext } from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import ProjectsList from "../Components/ProjectsList/ProjectsList";

//Context
import { AppContext } from "../Components/Contexts/AppContext";

function Projects() {
  const appContext = useContext(AppContext);
    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg" />
        <div className="container">
          <ProjectsList />
        </div>
        <Footer />
      </>
    )
}

export default Projects