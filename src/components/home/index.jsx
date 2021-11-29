import React from 'react';
import './index.css';
import MovementIcon from './assets/rectangulo-redondeado.png';
import { Link, Outlet } from 'react-router-dom';

export default function IndexHome () {
    return (
        <div className="home_container">
            
            <div className="featured_property-container">
                <Outlet /> 
            </div>
            

            <div className="property_links-container">

                <div>

                    <Link to="inmueble_destacado_1">
                        <img src={MovementIcon} alt="" />
                    </Link>
                

                    <Link to="inmueble_destacado_2">
                        <img src={MovementIcon} alt="" />
                    </Link>

                    <Link to="inmueble_destacado_3">
                       <img src={MovementIcon} alt="" />
                    </Link>

                </div>

            </div>

            <div className="all_property">

                <img src="https://www1.upme.gov.co/simco/PublishingImages/Pagina_en_construccion.jpg" alt="" />

                {/* <div>
                        <h2>
                        Propiedades
                    </h2>
                </div> */}
            </div>

        </div>
    )
}
