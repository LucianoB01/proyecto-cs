import { React } from 'react'; 
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import './footer.css'


export const Footer = () => {

    return (
        <>
            <nav className='footer-nav'>
                <ul className='menu-ul'>
                    <li>
                        <NavLink to=''>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='jugar'>Jugar</NavLink>
                    </li>
                    <li>
                        <NavLink to='contacto'>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to='preguntas-frecuentes'>Preguntas frecuentes</NavLink>
                    </li>
                    <li>
                        <NavLink to='iniciar-sesion'>Iniciar sesion</NavLink>
                    </li>
                    <li>
                        <NavLink to='registrarse'>Registrarse</NavLink>
                    </li>
                    <li>
                        <NavLink to='terminos-condiciones'>Terminos y condiciones</NavLink>
                    </li>
                    <li>
                        <NavLink to='politica-privacidad'>Politica de privacidad</NavLink>
                    </li>
                </ul>
                <ul className='redes-sociales-ul'>
                    <p>Seguinos en:</p>
                    <div className='redes-sociales-icons'>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                    </div>
                </ul>
                <ul className='sugerencias-ul'>
                    <li>
                        <NavLink to='contacto'>¿Tenes alguna sugerencia?</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}