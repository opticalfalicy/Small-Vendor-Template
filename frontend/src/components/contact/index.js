import React, {Component} from 'react';

import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

import ReactContactForm from 'react-mail-form';

import './contact.css';

class Contact extends Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <div className="contact-page main-item">
        <h1 className="contact-title">Location</h1>
        <div className="map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.2484923983542!2d-75.1563758860201!3d39.98624009894771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c7e2f45d373b%3A0xf368ef81e0cf4b15!2sKhyber%20Gyro!5e0!3m2!1sen!2sus!4v1569080656966!5m2!1sen!2sus"
            width="800"
            height="600"
            frameborder="0"
            allowfullscreen=""
          />
        </div>

        {/* <a href=""><img src={mapImg} className="map" /></a> */}
        {/* <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{lat: 47.444, lng: -122.176}}
        >
          {/* <Marker position={{lat: 48.00, lng: -122.00}} /> */}
        {/* </Map> */}

      </div>
    );
  }
}

export default Contact;
