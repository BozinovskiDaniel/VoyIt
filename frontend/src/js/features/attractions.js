import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import AttractionCard from '../cards/attractionCard';
import { Grid } from '@material-ui/core';
import { getSort } from '../../actions';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        height: "50px",
        float: "right",
        left: "5px",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Attraction(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [attractions, setAttractions] = useState(null);
    const [sortForm, setSortForm] = useState('recommended');

    useEffect(() => {
        
        const url = "https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=" + sortForm + "&lunit=km&limit=30&bookable_first=false&subcategory=36&location_id=" + props.id;
        
        fetch(url, props.dict)
        .then(res => res.json())
        .then((result) => {
            setAttractions(result.data);
            console.log(result.data);
        })     
        .catch(error => console.error(error))

    }, [sortForm]);
    

    const handleChangeSort = (event) => {
        setSortForm(event.target.value);  
        dispatch(getSort(event.target.value)); 
    };


    const displayCard = (attraction) => {
        if (attraction['attraction']['photo'] === undefined) {
            return;
        } else {
            return (<AttractionCard attraction={attraction} />);
        }
    }

    if (attractions == null) {
        return ((<Loader
            type="TailSpin"
            color="orange"
            height={150}
            width={150}
            style={{textAlign: "center", paddingTop: "250px", justifyContent: "center"}}
         />))
    } else {
        return(<div>

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
                <option value="ranking">Ranking</option>
                </Select>
            </FormControl>

            <Grid container spacing={4}>
                {attractions.filter(attraction => (attraction.ad_position == null && attraction.photo != null)).map(attraction => 
                    <Grid item xs={12} sm={3}> 
                        {displayCard({attraction})}
                    </Grid>
                )}
            </Grid>
        </div>
        )
    }
    

}

const mapStateToProps = state => {
    return {
        id: state.id,
        dict: state.header
    }
}

export default connect(mapStateToProps)(Attraction);