import { Link } from 'react-router-dom'

// ASSETS 
import './Footer.css'
import Instagram from '../../assets/instagramicon.svg'
import Facebook from '../../assets/facebookicon.svg'
import Linkedin from '../../assets/linkedinicon.svg'
import Twitter from '../../assets/twittericon.svg'
import USA from '../../assets/USA.svg'
import Brazil from '../../assets/Brazil.svg'
import Logo from '../../assets/dncLogo.svg'

function Footer(){
    return(
        <footer>
            <div className="container">
               <div className="d-flex jc-space-between mobile-fd-column">
               <div className="footer-logo-col">
                    <img src={Logo}/>
                    <p className='grey-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
               <div className="d-flex social-links">
                    <a href="https://google.com" target="_blank">
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="https://google.com" target="_blank">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="https://google.com" target="_blank">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="https://google.com" target="_blank">
                        <img src={Instagram} alt="" />
                    </a>
               </div>
          
               </div>
               <div className="d-flex mobile-fd-column">
                <div className="footer-col">
                    <h3>Pages</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Contact</h3>
                    <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP|CEP 12243-030</p>
                    <p className="grey-1-color">suporte@escoladnc.com.br</p>
                    <p className="grey-1-color">(19) 99187-4342</p>

                </div>
               </div>
               
            </div>
            <div className="d-flex jc-space-between footer-copy">
                <p className="grey-1-color">Copyright © DNC - 2024</p>
                <div className="langs-area d-flex">
                    <img src={Brazil}/>
                    <img src={USA}/>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer