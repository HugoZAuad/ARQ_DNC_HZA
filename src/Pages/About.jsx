import AboutText from "../Components/AboutText/AboutText";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

function About() {
    return(
        <>
        <Header />
        <Banner title="About" image="about.jpg" />
        <div className="container">
          <AboutText />
        </div>
        <Footer />
      </>
    )
}

export default About