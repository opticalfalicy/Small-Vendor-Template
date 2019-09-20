import React, {Component} from 'react';

import './about.css';

class About extends Component {
  render () {
    return (
      <div className="about-page main-item">

        <h1 className="about-title"> About Me </h1>

        <div className="about-content">

          <div className="about-item about-summary" />

          <div className="about-item about-media">

            <div className="media-top" />

          </div>

        </div>
      </div>
    );
  }
}

export default About;
