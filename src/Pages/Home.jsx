import Banner from "../Components/Banner/Banner";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Button buttonStyle="secondary" arrow>olá!</Button>
      <Banner title="Home" image="about.jpg" />
      <Footer />
    </>
  );
}

export default Home;
