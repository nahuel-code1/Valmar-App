import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import BedIcon from './assets/cama.png'
import BathroomIcon from './assets/banera.png'
import MetrosIcon from './assets/metros.png'


export default function FeaturedProperty2 () {
    return (
        <div className="featured_property_2-container">
           <div className="featured_property_1-container2">
               <div className="featured_property_1-box">
                   <div className="featured_property_1-content-box">
                        <div className="featured_property_1-content-box2">
                            <div className="featured_property_1-content-box2-title">
                                <div>
                                    <h4>
                                    DEPARTAMENTOS EN VENTA
                                    </h4>
                                </div>
                                <div>
                                    $ 66,000
                                </div>
                            </div>

                            <div className="featured_property_1-content-box2-info">
                                
                                <p>
                                    Avenida Carlos Antonio Lopez, Sajonia, Asuncion, Region Oriental...
                                </p>

                                <div>
                                    <div>
                                        <img src={BedIcon} alt="" />

                                        <p>
                                            1
                                        </p>
                                    </div>

                                    <div>
                                        <img src={BathroomIcon} alt="" />

                                        <p>
                                            1
                                        </p>
                                    </div>
                                    
                                    
                                    <div>
                                        <img src={MetrosIcon} alt="" />

                                        <p>
                                            43.5
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
