import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Navbar from './navbar';
import Subnavbar from './subnavbar';
import Timetable from './timetable';
import WeatherCard from '../js/cards/weatherCard';

function Itinerary() {

    const [icon, setIcon] = useState('');
    const [temp, setTemp] = useState('');
    const hotels = useSelector(state => state.hotels);
    const attractions = useSelector(state => state.attractions);
    const restaurants = useSelector(state => state.restaurants);
    const location = useSelector(state => state.location);
    const startDate = useSelector(state => state.startDate);
    const endDate = useSelector(state => state.endDate);


    const header = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
            "x-rapidapi-key": "f4912dc37dmshfea7c0aa5759f3ap109de7jsn6d8328e38b33"
        }
    }

    useEffect(() => {

        const url = "http://api.weatherapi.com/v1/current.json?key=fba73d1121744a588e3234727201604&q=" + location;
        fetch(url)
        .then(res => res.json())
        .then((result) => {
            setIcon(result['current']['condition']['icon']);
            setTemp(result['current']['temp_c']);
            console.log(result);
        })
        .catch(error => console.log(error))

    }, [])


    return (
        <div className="itinerary">
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


        <div className="main-container">
            <div className="itinerary-container">
                <div className="itinerary-nav">  
                    <div className="text-center">Create your itinerary <WeatherCard temp={temp} icon={icon} /></div>  
                </div>


                <div className="itinerary-panel">
                    <Timetable hotels={hotels} attractions={attractions} restaurants={restaurants} startDate={startDate} endDate={endDate} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Itinerary;
