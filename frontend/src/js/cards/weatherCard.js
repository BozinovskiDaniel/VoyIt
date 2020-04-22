import React from 'react';


export default function WeatherCard(props) {

    return(<div className="weatherCard">
        <div className="row">
            <div className="col-3">
                <img src={props.icon} alt="weather" />
            </div>
            <div className="col-3 my-auto">
                <h6>{props.temp}°c</h6>
            </div>
        </div>
    </div>
    );

}