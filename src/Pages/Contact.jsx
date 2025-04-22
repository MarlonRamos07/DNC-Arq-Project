import {useContext} from 'react'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import ContactForm from "../components/ContactForm/ContactForm"

//Contexto
import { AppContext } from '../contexts/AppContext'

function Contact(){
    const appContext = useContext(AppContext)
    return(
        <>
        <Header/>
         <Banner title={appContext.languages[appContext.language].menu.contact} image="contactus.jpg"/>
        <div className="container">
        <ContactForm/>
        </div>
        <Footer/>
        </>
    )
}

export default Contact