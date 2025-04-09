import Header from "../Components/Header/Header";
import { useContext } from "react";
import Banner from "../Components/Banner/Banner";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer/Footer";

//Context
import { AppContext } from "../Components/Contexts/AppContext";

function Contact() {
    const appContext = useContext(AppContext);
    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg" />
        <div className="container">
            <ContactForm />
        </div>
        <Footer />
      </>
    )
}

export default Contact