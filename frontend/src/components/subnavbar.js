import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { destroyItinerary } from '../actions';
import Alert from "sweetalert2";

function Subnavbar(props) {

    const dispatch = useDispatch();
    const {startDate, endDate, adults, children} = props;

    const clearItinerary = () => {
        dispatch(destroyItinerary());
        window.location.reload()
        Alert.fire('Successfully Cleared Itinerary');
    }

    return (
    <div className="sub-banner">
        <div className="sub-row">
            <nav className="sub-navbar">
                <ul className="sub-nav">
                    <li className="nav-item">
                        <button type="button" className="sub-nav-button" id="myBtn">Add destination</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="sub-nav-button" id="myBtn">{adults} Adults</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="sub-nav-button" id="myBtn">{children} Children</button>
                    </li>

                    <li className="hotels-back-btn">
                        <Link to="/itinerary"><button type="button" className="sub-nav-button" id="myBtn">Create Itinerary</button></Link>
                    </li>
                    <li className="hotels-back-btn">
                        <button type="button" className="sub-nav-button" id="myBtn" onClick={clearItinerary}>Clear Itinerary</button>
                    </li>
                    <li className="hotels-back-btn">
                        <Link to="/steps"><button type="button" className="sub-nav-button" id="myBtn">Back to Accomodations</button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
        )
}

const mapStateToProps = state => {
    return {
        startDate: state.startDate,
        endDate: state.endDate,
        adults: state.adults,
        children: state.children
    }
}

export default connect(mapStateToProps)(Subnavbar);
