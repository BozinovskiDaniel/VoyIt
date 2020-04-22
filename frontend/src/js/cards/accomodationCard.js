import React, {useState} from 'react';
import { getHotels } from '../../actions';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      height: "100%"
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


function AccomodationCard(props) {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [button, setButton] = useState(true);

    const renderButton = () => {
      if (button) {
        return (<AddCircleOutlineIcon onClick={() => (
          dispatch(getHotels(props.hotel)),
          setButton(!button)
        )} />)
      } else {
        return (<RemoveCircleIcon color="secondary" onClick={() => (
          dispatch(getHotels(props.hotel)),
          setButton(!button)
        )} />)
      }
    }

    return(
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={props.hotel['hotel']['photo']['images']['thumbnail']['url']} alt="hotel" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.hotel['hotel']['name']}
        subheader={props.hotel['hotel']['rating'] + " star"}
      />
      <CardMedia
        className={classes.media}
        image={props.hotel['hotel']['photo']['images']['large']['url']}
        title="Hotel"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.hotel['hotel']['num_reviews']} Reviews
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: {props.hotel['hotel']['price']} /night
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to itinerary">
          {renderButton()}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <strong>Location:</strong> {props.hotel['hotel']['location_string']}
          </Typography>
          <Typography paragraph>
            <strong>Ranking:</strong> {props.hotel['hotel']['ranking']}
          </Typography>
        </CardContent>
      </Collapse>
    </Card> 
    );

}


export default AccomodationCard;

