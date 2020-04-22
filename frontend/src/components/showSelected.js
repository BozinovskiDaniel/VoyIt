import React from 'react';
import { useSelector } from 'react-redux';
import SelectedCard from '../js/cards/selectedCard';


function ShowSelected(props) {

    const hotels = useSelector(state => state.hotels);
    const attractions = useSelector(state => state.attractions);
    const restaurants = useSelector(state => state.restaurants);


    return (
    <div className="showSelected">
        <div id="sidePanel" className="sidepanel">
            <a className="closebtn" onClick={props.closePopup}>×</a>
            
        </div>    
    </div>
    )
}

export default ShowSelected;