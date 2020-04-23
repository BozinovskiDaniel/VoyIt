import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getExtraEvents } from '../actions';
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Alert from "sweetalert2";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import htmlToImage from 'html-to-image';
import download from 'downloadjs';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import {FacebookShareButton, FacebookIcon, FacebookShareCount} from 'react-share';

class Timetable extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
        events: [],
        calendarEvents: [{title: "Event 1", start: '2020-04-24'}],
        url: 'www.google.com',
        showSelected: false
    };
  }

  // Whenever we drag and drop an event, append the start to it

    componentDidMount() {
        localStorage.setItem('myUrl', 'www.google.com');
        const events = [...this.state.calendarEvents];

        this.props.hotels.forEach((hotel) => {
            events.push({
                'title': hotel['hotel']['name'] + ' (Hotel)',
                'rating': hotel['hotel']['rating'],
                'ranking': hotel['hotel']['ranking'],
                'id': hotel['hotel']['location_id'],
                'thumbnail': hotel['hotel']['photo']['images']['thumbnail']['url'],
                'photo': hotel['hotel']['photo']['images']['large']['url'],
                'price': hotel['hotel']['price'],
                'address': hotel['hotel']['location_string'],
                'start': this.props.startDate
                })
        })

        this.props.attractions.forEach((attraction) => {
            events.push({
                'title': attraction['attraction']['name'] + ' (Attraction)',
                'rating': attraction['attraction']['rating'],
                'ranking': attraction['attraction']['ranking'],
                'id': attraction['attraction']['location_id'],
                'thumbnail': attraction['attraction']['photo']['images']['thumbnail']['url'],
                'photo': attraction['attraction']['photo']['images']['large']['url'],
                'price': attraction['attraction']['price'],
                'address': attraction['attraction']['location_string']
                })
        })

        this.props.restaurants.forEach((res) => {
            events.push({
                'title': res['res']['name'] + ' (Restaurant)',
                'rating': res['res']['rating'],
                'ranking': res['res']['ranking'],
                'id': res['res']['location_id'],
                'thumbnail': res['res']['photo']['images']['thumbnail']['url'],
                'photo': res['res']['photo']['images']['large']['url'],
                'price': res['res']['price'],
                'address': res['res']['location_string']
                })
        })

        if (this.props.extraEvents !== undefined) {
          this.props.extraEvents.forEach((data) => events.push(data));
        }

        this.setState({
            events: events,
            calendarEvents: events
        })

        let draggableEl = document.getElementById("external-events");

        new Draggable(draggableEl, {
          itemSelector: ".fc-event",
          eventData: function(eventEl) {
              let title = eventEl.getAttribute("title");
              let id = eventEl.getAttribute("data");
              let ranking = eventEl.getAttribute("ranking");
              let rating = eventEl.getAttribute("rating");
              let thumbnail = eventEl.getAttribute("thumbnail")
              let photo = eventEl.getAttribute("photo")
              let price = eventEl.getAttribute('price')
              let address = eventEl.getAttribute('address')
              let start = eventEl.getAttribute('start');
              return {
                title: title,
                ranking: ranking,
                rating: rating,
                id: id,
                thumbnail: thumbnail,
                photo: photo,
                price: price,
                address: address,
                start: start
              };
          }
        });
    }

    toggleSelected = () => {  
      this.setState({
        'showSelected': !this.state.showSelected
      });  
  }

    eventClick = eventClick => {
    console.log(eventClick)
    Alert.fire({

      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <strong><img src=` +
        eventClick.event._def.extendedProps.photo +
        ` alt="N/A" height="250px" width="90%" style="margin:20px;border-radius: 10px;" /></strong></<strong>
      </tr>
      <tr >
      <br>
      <td>Price</td>
      <td><strong>` +
        eventClick.event._def.extendedProps.price +
        `</strong></td>
      </tr>
       <tr >
      <td>Rating</td>
      <td><strong>
      ` +
        eventClick.event._def.extendedProps.rating +
        ` stars
      </strong></td>
      </tr>
      <tr >
      <td>Ranking</td>
      <td><strong>
      ` +
        eventClick.event._def.extendedProps.ranking +
        `
      </strong></td>
      </tr>
      <tr >
      <td>Address</td>
      <td><strong>
      ` +
        eventClick.event._def.extendedProps.address +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#FF8000",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close"
    }).then(result => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };

  addPersonalisedEvent = () => {
    
    Alert.fire({
      title: 'Enter your Personalied Task',
      input: 'text',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        } else {
          let newEvent = {
            'title': value,
            'rating': null,
            'ranking': 'N/A',
            'id': value,
            'thumbnail': 'https://worldfoodtravel.org/wp-content/uploads/2019/06/no-image.jpg',
            'photo': 'N/A',
            'price': 'N/A',
            'address': 'N/A'
          };
          
          this.props.getExtraEvents(newEvent);
          window.location.reload();
        }
      }
    })

}

  downloadImage = () => {
    htmlToImage.toJpeg(document.getElementById('mycalendartest'))
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'itinerary';
        link.href = dataUrl;
        link.click();
        localStorage.setItem('myUrl', dataUrl);
    });
  }

  handleDrop = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

  render() {
    return (
      <div className="animated fadeIn p-4 demo-app">
        <Row>
          <Col lg={8} sm={8} md={8} style={{paddingLeft: "100px"}}>
            <div className="demo-app-calendar" id="mycalendartest">
              <FullCalendar
                defaultView="dayGridMonth"
                validRange= {{
                  start: this.props.startDate,
                  end: this.props.endDate
                }}
                eventDropInfo={this.eventDropInfo}
                header={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                }}
                rerenderDelay={10}
                events={this.state.calendarEvents}
                eventDurationEditable={true}
                editable={true}
                droppable={true}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                ref={this.calendarComponentRef}
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                eventDrop={this.handleDrop}
                // drop={this.drop}
                eventReceive={this.eventReceive}
                eventClick={this.eventClick}
                // selectable={true}
              />
            </div>
          </Col>

          <Col lg={3} sm={3} md={3}>
            <div
              id="external-events"
              className="external-eve"
            >
              <p align="center">
                <strong style={{fontSize: "22px", paddingRight: "20px"}}>Drag Your Preferences!</strong>
                <AddToPhotosIcon className="plusbtn" onClick={() => this.addPersonalisedEvent()}>+</AddToPhotosIcon>
                <GetAppIcon className="downloadbtn" onClick={() => this.downloadImage()}>Download Itinerary</GetAppIcon>
                <FacebookShareButton url={localStorage.getItem('myUrl')}>
                  <FacebookIcon size={26} round={true} />
                </FacebookShareButton>
              </p>
              {this.state.events.map(event => (
                <div
                  className="fc-event"
                  title={event.title}
                  ranking={event.ranking}
                  rating={event.rating}
                  thumbnail={event.thumbnail}
                  photo={event.photo}
                  price={event.price}
                  address={event.address}
                  data={event.id}
                  key={event.id}
                  style={{
                      padding: "7px",
                      margin: "10px",
                      backgroundColor: "rgb(253, 192, 80)",
                      border: "2px solid orange",
                      color: "#555",
                      fontWeight: "bold"
                  }}
                >
                  <img src={event.thumbnail} alt="feature" height="40px" width="40px" style={{borderRadius: "30px", margin: "8px"}} />
                  {event.title}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getExtraEvents: event => {
    dispatch(getExtraEvents(event));
  }
})

const mapStateToProps = state => {
  return {
    extraEvents: state.extraEvents
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timetable);