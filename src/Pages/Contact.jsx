import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import ContactForm from "../components/ContactForm/ContactForm"

function Contact(){
    return(
        <>
        <Header/>
         <Banner title="Contact Us" image="contactus.jpg"/>
        <div className="container">
        <ContactForm/>
        </div>
        <Footer/>
        </>
    )
}

export default Contact