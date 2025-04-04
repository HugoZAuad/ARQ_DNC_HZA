import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer/Footer";

function Contact() {
    return(
        <>
        <Header />
        <Banner title="Contact" image="contact.jpg" />
        <div className="container">
            <ContactForm />
        </div>
        <Footer />
      </>
    )
}

export default Contact