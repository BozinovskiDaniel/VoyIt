import React from 'react';
import Navbar from './navbar.js';
import Subnavbar from './subnavbar.js';
import Attraction from '../js/features/attractions';
import Restaurant from '../js/features/restaurants';

function Selection() {
    
    return (
        <div className="selection">
            <div id="overlay">
                    <div className="container-fluid banner">
                        <div className="row">
                            <div className="col-md-12">
                                <Navbar />
                            </div>
                        </div>
                    </div>
                <Subnavbar />
            </div>
            
            <div id="slider">
                <input type="radio" name="slider" id="slide1" defaultChecked />
                <input type="radio" name="slider" id="slide2" />
                <div id="slides">
                    <div id="overflow">
                        <div className="inner">
                            <div className="slide slide_1">
                            <div className="slider-title">Attractions</div>
                                <div className="slide-content">
                                    <div className="container">
                                        <Attraction />
                                    </div>                                    
                                </div>
                            </div>
                    

                            <div className="slide slide_2">
                                <div className="slider-title">Restaurants</div>
                                <div className="slide-content">
                                    <div className="container">
                                        <Restaurant />

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div id="controls">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                </div>
            </div>

        </div>
    )
}


export default Selection;