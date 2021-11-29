import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

export default function NavBar () {
    return (
        <header className="container_navbar">

            <div className="logo_navbar">
                <div>
                   <Link to="home">
                        <img src="https://vallmar.com.py/wp-content/uploads/2021/09/VALLMAR-Logo-240-72-3.png" alt="Vallmar Logo" />
                   </Link> 
                </div>
            </div>

            <div className="link_navbar"> 

                <Link to="home">
                    Home
                </Link>

                <Link to="/inmuebles">
                    Inmuebles
                </Link>

                <Link to="/asesores">
                    Asesores
                </Link>

                <Link to="/blog">
                    Blog
                </Link>

                <Link to="/nosotros">
                    Nosotros
                </Link>

                <Link to="/contacto">
                    Contacto
                </Link>

            </div>

        </header>
    )
}
