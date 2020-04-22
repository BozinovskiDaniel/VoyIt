import React from 'react';
import Navbar from './navbar.js';
import Subnavbar from './subnavbar.js';
import Accomodation from '../js/features/accomodation';


function Step1() {
    return(
        <div className="step1">
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
            <Accomodation />
        </div>
    );

}

export default Step1