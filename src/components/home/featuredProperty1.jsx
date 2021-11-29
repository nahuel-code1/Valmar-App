import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import BedIcon from './assets/cama.png'
import BathroomIcon from './assets/banera.png'
import CarIcon from './assets/coche.png'
import MetrosIcon from './assets/metros.png'



export default function FeaturedProperty1() {
    return (
        <div className="featured_property_1-container">
           <div className="featured_property_1-container2">
               <div className="featured_property_1-box">
                   <div className="featured_property_1-content-box">
                        <div className="featured_property_1-content-box2">
                            <div className="featured_property_1-content-box2-title">
                                <div>
                                    <h4>
                                    ALQUILO AMPLIA CASA EN SANBER
                                    </h4>
                                </div>
                                <div>
                                    GS 1,000,000
                                </div>
                            </div>

                            <div className="featured_property_1-content-box2-info">
                                
                                <p>
                                    Avenida Rodolfo Guillermo Naumann Limprich, Ypacarai, Central...
                                </p>

                                <div>
                                    <div>
                                        <img src={BedIcon} alt="" />

                                        <p>
                                            3
                                        </p>
                                    </div>

                                    <div>
                                        <img src={BathroomIcon} alt="" />

                                        <p>
                                            4
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <img src={CarIcon} alt="" />

                                        <p>
                                            1
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <img src={MetrosIcon} alt="" />

                                        <p>
                                            240
                                        </p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                   </div>

                   <div className="featured_property_1-mini_box-box">
                        <div>
                            <div>
                                <Link to="/inmuebles">                                
                                    Detalles
                                </Link>
                            </div>
                            
                        </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
