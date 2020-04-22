import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import RestaurantCard from '../cards/restaurantCard';
import { Grid } from '@material-ui/core';
import { getCurrency, getSort } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      float: "right",
    }, 
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        height: "50px",
        float: "right",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Restaurant(props) {

	const dispatch = useDispatch();
	const classes = useStyles();
	const [restaurants, setRestaurants] = useState(null);
	const [currForm, setCurrForm] = useState('AUD');
	const [sortForm, setSortForm] = useState('recommended');
	
  	useEffect(() => {
		
		const url = "https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&prices_restaurants=10953%252C10955&restaurant_mealtype=10598%252C10599&currency=" + currForm + "&lang=en_US&location_id=" + props.id;

		fetch(url, props.dict)    
		.then(res => res.json())
		.then((result) => {
			setRestaurants(result.data);
		}) 
		.catch(error => console.error(error)) 

  	}, [currForm, sortForm]);


	const handleChangeCurrency = (event) => {
        setCurrForm(event.target.value); 
        dispatch(getCurrency(event.target.value)); 
    };

    const handleChangeSort = (event) => {
        setSortForm(event.target.value);  
        dispatch(getSort(event.target.value)); 
    };
	  

	const displayCard = (res) => {
		if (res['res']['photo'] === undefined) {
			return;
		} else {
			return(<RestaurantCard res={res} />);
		}
	}

    
	if (restaurants == null) {
		return ((<Loader
			type="TailSpin"
			color="orange"
			height={150}
			width={150}
			style={{textAlign: "center", paddingTop: "250px", justifyContent: "center"}}
		 />))
    } else {
	return(<div>

		<Link to="/itinerary">
			<div className={classes.root}>
			<Button variant="outlined" size="large">
				Create Itinerary
			</Button>
			</div>
		</Link>
		<FormControl variant="outlined" className={classes.formControl} size="small">
			<InputLabel htmlFor="outlined-currency-native-simple">Currency</InputLabel>
			<Select
			native
			value={currForm}
			onChange={handleChangeCurrency}
			label="Currency"
			>
			<option aria-label="None" value="" />
			<option value="AUD">AUD</option>
			<option value="USD">USD</option>
			<option value="EUR">EUR</option>
			<option value="GBP">GBP</option>
			<option value="JPY">JPY</option>
			<option value="CAD">CAD</option>
			<option value="CHF">CHF</option>
			</Select>
		</FormControl>


		<Grid container spacing={4}>
			{restaurants.filter(res => (res.ad_position == null && res.photo != null && res.price != null)).map(res => 
				<Grid item xs={12} sm={3}>
					{displayCard({res})}
				</Grid>
			)}
		</Grid>
	</div>
	);  
  }

}

	const mapStateToProps = state => {
		return {
			id: state.id,
			dict: state.header
		}
	}

export default connect(mapStateToProps)(Restaurant);