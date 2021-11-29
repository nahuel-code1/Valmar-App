import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import BathroomIcon from './assets/banera.png'
import MetrosIcon from './assets/metros.png'

export default function FeaturedProperty3 () {
    return (
        <div className="featured_property_3-container">
           <div className="featured_property_1-container2">
               <div className="featured_property_1-box">
                   <div className="featured_property_1-content-box">
                        <div className="featured_property_1-content-box2">
                            <div className="featured_property_1-content-box2-title">
                                <div>
                                    <h4>
                                    EN ALQUILER DEPOSITO
                                    </h4>
                                </div>
                                <div>
                                    $ 20,000
                                </div>
                            </div>

                            <div className="featured_property_1-content-box2-info">
                                
                                <p>
                                    Avenida Carlos Antonio Lopez, Sajonia, Asuncion, Region Oriental...
                                </p>

                                <div>

                                    <div>
                                        <img src={BathroomIcon} alt="" />

                                        <p>
                                            3
                                        </p>
                                    </div>
                                    
                                    
                                    <div>
                                        <img src={MetrosIcon} alt="" />

                                        <p>
                                            4200
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
