import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import ProjectsList from "../Components/ProjectsList/ProjectsList";

function Projects() {
    return(
        <>
        <Header />
        <Banner title="Projects" image="projects.jpg" />
        <div className="container">
          <ProjectsList />
        </div>
        <Footer />
      </>
    )
}

export default Projects