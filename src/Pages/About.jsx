import { useContext } from "react";
import AboutText from "../Components/AboutText/AboutText";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

//Context
import { AppContext } from "../Components/Contexts/AppContext";

function About() {
  const appContext = useContext(AppContext);
    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg" />
        <div className="container">
          <AboutText />
        </div>
        <Footer />
      </>
    )
}

export default About