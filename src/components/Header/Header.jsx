import {useContext, useState} from 'react'
import { Link } from 'react-router-dom'

// ASSETS 
import './Header.css'
import Logo from '../../assets/dncLogo.svg'

//COMPONENTES
import Button from '../Button/Button'


//Contextos
import{AppContext} from '../../contexts/AppContext'
function Header(){


    const appContext = useContext(AppContext)

    return(
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo}/></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary">
                            Menu
                        </Button>
                    </div>
                    <nav>
                    <ul className='d-flex'>
                        <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                        <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                        <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                        <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                    </ul>
                </nav>
                </div>
                
            </div>
        </header>
    )
}

export default Header