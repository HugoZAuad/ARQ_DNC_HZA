import Banner from "../Components/Banner/Banner";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Button buttonStyle="secondary" arrow>
        olá!
      </Button>
      <div className="container">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default Home;
