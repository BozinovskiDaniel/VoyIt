import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrency, getSort, getOrder } from '../../actions';
import { Grid } from '@material-ui/core';
import AccomodationCard from '../cards/accomodationCard';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
        float: "middle",
        left: "50px",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Accomodation() {

    const [hotels, setHotels] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const nights = '1';
    const rooms = '1'; 

    const id = useSelector(state => state.id);
    const checkin = useSelector(state => state.startDate);
    const adults = useSelector(state => state.adults);
    const currency = useSelector(state => state.currency);
    const sort = useSelector(state => state.sort);
    const dict = useSelector(state=> state.header);
    
    const [currForm, setCurrForm] = useState('AUD');
    const [sortForm, setSortForm] = useState('recommended');
    const [orderForm, setOrderForm] = useState('asc')

    useEffect(() => {
   
        const url = "https://tripadvisor1.p.rapidapi.com/hotels/list?zff=4%252C6&offset=0&subcategory=hotel%252Cbb%252Cspecialty&hotel_class=1%252C2%252C3&currency="
                    + currForm + "&amenities=beach%252Cbar_lounge%252Cairport_transportation&child_rm_ages=7%252C10&limit=30&checkin=" 
                    + String(checkin).slice(0, 10) + "&order=" + orderForm + "&lang=en_US&sort=" + sortForm + "&nights="
                    + nights + "&location_id="+ id + "&adults=" + adults + "&rooms=" + rooms;

        fetch(url, dict)
        .then(res => res.json())
        .then((result) => {
            setHotels(result.data)
        })
        .catch(error => console.error(error))

    }, [currForm, sortForm, orderForm]);  


    const handleChangeCurrency = (event) => {
        setCurrForm(event.target.value); 
        dispatch(getCurrency(event.target.value)); 
    };

    const handleChangeSort = (event) => {

        var splitArr = event.target.value.split(" ");
        if (splitArr[0] === 'price') {
            setSortForm(event.target.value); 
            dispatch(getSort(splitArr[0])); 
            setOrderForm(splitArr[1]);
            dispatch(getOrder(splitArr[1]));
        } else {
            setSortForm(event.target.value); 
            dispatch(getSort(event.target.value)); 
        }
    };

    const displayCard = (hotel) => {
        if (hotel['hotel']['photo'] === undefined) {
            return;
        } else {
            return (<AccomodationCard hotel={hotel} />)
        }
    }

    if (hotels == null) {
        return ((<Loader
            type="TailSpin"
            color="orange"
            height={150}
            width={150}
            style={{textAlign: "center", paddingTop: "250px", justifyContent: "center"}}
         />))
    } else {
        return (
            <div className="Accomodation">
                <div className="main-container">
                    <div className="content">
                        <div className="text-center">Stays around the world</div>

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

                        <FormControl variant="outlined" className={classes.formControl} size="small">
                            <InputLabel htmlFor="outlined-sort-native-simple">Sort</InputLabel>
                            <Select
                            native
                            value={sortForm}
                            onChange={handleChangeSort}
                            label="Sort"
                            >
                            <option aria-label="None" value="" />
                            <option value="recommended">Recommended</option>
                            <option value="popularity">Popularity</option>
                            <option value="price asc">Price Low to High</option>
                            <option value="price desc">Price High to Low</option>
                            </Select>
                        </FormControl>


                        <Link to="/selection">
                            <div className={classes.root}>
                            <Button variant="outlined" size="large">
                                Next
                            </Button>
                            </div>
                        </Link>

                        <Grid container spacing={4}>
                            {hotels.filter(hotel => (hotel.ad_position == null && hotel.photo != null && 
                            hotel.price != null && hotel.photo.images.large.url != null)).map(hotel =>
                                <Grid item xs={12} sm={3} key={hotel.location_id}>                                         
                                    {displayCard({hotel})}
                                </Grid>
                            )}
                        </Grid>

                    </div>
                </div>
            </div>
        )
    }
}

export default Accomodation;


