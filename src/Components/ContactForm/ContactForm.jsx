import { useContext, useState, useEffect } from "react";

import "./ContactForm.css";

//components
import Button from "../Button/Button";

//Context
import { AppContext } from "../Contexts/AppContext";

function ContactForm() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",}
  );

  const [isFormValid, setisFormValid] = useState(false)
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(isFormValid){
      setFormSubmitLoading(true)
      try {
        const response = await fetch('https://api.web3forms.com/submit',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...formData, access_key: "9eb86d47-5f81-4a49-a5ca-2fe270a32da9"}),
        })
        if(response.ok){
          setFormSubmitted(true)
        }else{
          alert('Erro ao enviar o formulário!')
        }
      }catch (e) {
        alert('Erro: ', e)
      } finally{
        setFormSubmitLoading(false)
      }
    }
  }

  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    const isValid = formData.name.trim() && 
    formData.email.trim() && 
    isValidEmail(formData.email) && 
    formData.message.trim();

    setisFormValid(isValid)
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  const appContext = useContext(AppContext);
  return (
    <div className="contact-form d-flex fd-column al-center">
      <h2>{appContext.languages[appContext.language].contact.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex form-group">
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            placeholder={appContext.languages[appContext.language].contact.pl1}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            placeholder={appContext.languages[appContext.language].contact.pl2}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex form-group">
          <textarea
            className="form-input"
            name="message"
            id="message"
            placeholder={appContext.languages[appContext.language].contact.pl3}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <div className="d-flex al-center jc-end form-group">
          {formSubmitted && (<p className="success-message">{appContext.languages[appContext.language].contact.successMsg}</p>)}
          <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || formSubmitLoading}>
          {appContext.languages[appContext.language].general.send}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
