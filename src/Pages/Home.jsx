import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import ProjectsList from "../Components/ProjectsList/ProjectsList";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Home;
