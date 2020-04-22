import React, { useState } from 'react';
import NavbarLanding from './navbar-landing';
import { useDispatch } from 'react-redux';
import { getLocationId, getAdults, getChildren, getStartDate, getEndDate, getHeader, getLocation } from '../actions';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';

var dict = {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "34d6426fb5mshc9a0b0fcbf91bd3p10c00fjsn046dcae59ef3"
    }
}

function Landing() {

    const dispatch = useDispatch();
    dispatch(getHeader(dict))
    
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    let history = useHistory();

    const handleChange = (event) => {
        setLocation(event.target.value);
    }

    const handleChangeStartDate = (date) => {
        setStartDate(date);
        dispatch(getStartDate(date));
    }

    const handleChangeEndDate = (date) => {
        setEndDate(date);
        dispatch(getEndDate(date));
    }

    const handleChangeFamily = (e) => {

        if (e.target.name === 'adults') {
            dispatch(getAdults(e.target.value));
        } else {
            dispatch(getChildren(e.target.value));
        }
    }

    const handleSubmit = (event) => {
        searchLocation();
        event.preventDefault();
    }

    const searchLocation = () => {
        const url = "https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=km&query=" + location;
    
        fetch(url, dict)    
        .then(res => res.json())
        .then((result) => {           
            dispatch(getLocationId((result.data[0])['result_object']['location_id']));
            dispatch(getLocation(location));
            history.push("/steps");
        })
        .catch(error => console.error(error))
        
    }
    
    return(
    <div className="landing">
        <div id="overlay">
            <div className="container-fluid banner">
                <div className="row">
                    <div className="col-md-12">
                        <NavbarLanding />
                    </div>
                </div>

                    <form onSubmit={handleSubmit}>
                            <div className="col-md-6 offset-md-3 midbox">
                            <div className="text-center">Start your voyage</div>
                            <div className="form-group">	
                                <div className="sub-text">Where</div>	
                                <input type="text" value={location} onChange={handleChange} className="form-control" placeholder="Enter Destination (Country/Region/City)" />
                            </div>
                            <div className="sub-text">Travelling From</div>
                            <div className="sub-text">Travelling To</div>
                            <div className="input-group">
                                <DatePicker selected={startDate} onChange={handleChangeStartDate} />

                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-calendar" title="Edit"></i></span>
                                </div>

                                <DatePicker selected={endDate} onChange={handleChangeEndDate} />
                            </div>
                            <div className="sub-text">Adults</div>
                            <div className="sub-text">Children</div>
                            <div className="input-group">
                                <select className="custom-select" id="inputGroupSelect01" name="adults" onChange={handleChangeFamily} >
                                    <option value="1" selected>1 adult</option>
                                    <option value="2">2 adults</option>
                                    <option value="3">3 adults</option>
                                    <option value="4">4 adults</option>
                                    <option value="5">5 adults</option>
                                    <option value="6">6 adults</option>
                                    <option value="7">7 adults</option>
                                    <option value="8">8 adults</option>
                                    <option value="9">9 adults</option>
                                    <option value="10">10 adults</option>
                                    <option value="11">11 adults</option>
                                    <option value="12">12 adults</option>
                                </select>
                                <select className="custom-select" id="inputGroupSelect01" name="children" onChange={handleChangeFamily} >
                                    <option value="0" selected>0 children</option>
                                    <option value="1">1 child</option>
                                    <option value="2">2 children</option>
                                    <option value="3">3 children</option>
                                    <option value="4">4 children</option>
                                    <option value="5">5 children</option>
                                    <option value="6">6 children</option>
                                </select>
                            </div>

                            <button type="submit" value="Submit" className="btn btn-warning btn-md center">Search</button>
                        </div>
                    </form>

            </div>
        </div>
    </div>
    );

}


export default Landing;