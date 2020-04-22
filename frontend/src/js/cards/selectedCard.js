import React from 'react'
import '../drag-drop';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      height: "100%",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
}));

export default function SelectedCard(props) {

    const classes = useStyles();
    const {attraction} = props;
    
    const getImage = (attraction) => {

        if (attraction['attraction'] != null) {
            return (<img className="itiImage" src={attraction['attraction']['photo']['images']['thumbnail']['url']} alt="attraction" height="50px" width="50px" />)
        } else if (attraction['hotel'] != null) {
            return (<img className="itiImage" src={attraction['hotel']['photo']['images']['thumbnail']['url']} alt="attraction" height="50px" width="50px" />)
        } else {
            return (<img className="itiImage" src={attraction['res']['photo']['images']['thumbnail']['url']} alt="attraction" height="50px" width="50px" />)
        }
    }

    const getTitle = (attraction) => {
        if (attraction['attraction'] != null) {
            return(<p className="itiTitle">{attraction['attraction']['name']}</p>)
        } else if (attraction['hotel'] != null) {
            return(<p className="itiTitle">{attraction['hotel']['name']}</p>)
        } else {
            return(<p className="itiTitle">{attraction['res']['name']}</p>)
        }
    }

    const getSubHeader = (attraction) => {
        if (attraction['attraction'] != null) {
            return("Attraction")
        } else if (attraction['hotel'] != null) {
            return("Hotel")
        } else {
            return("Restaurant")
        }
    }

    return (<>
            {getImage(attraction)}
            {getTitle(attraction)}
        </>
    )
}
