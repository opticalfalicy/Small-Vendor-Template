import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ScrollableAnchor} from 'react-scrollable-anchor';
import {connect} from 'react-redux';

import Nav from './navigation/';
import {Menu, About, Portfolio, Music, Contact} from './components/';
import scrollToComponent from 'react-scroll-to-component';
import {getProjects} from './actions';

import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {};
  }

  componentDidMount () {
    scrollToComponent (this.Menu, {
      offset: 0,
      align: 'middle',
      duration: 500,
      ease: 'inCirc',
    });
  }

  render () {
    console.log ('app state', this.state);
    return (
      <Router>
        <div className="App">

          {/* <Nav /> */}

          <div className="main">
            <Route
              href="#menu"
              ref={section => {
                this.Menu = section;
              }}
              render={() => <Menu className="main-item panel" />}
            />
            {/* <Route
              href="#about"
              ref={section => {
                this.About = section;
              }}
              render={() => <About className="main-item panel" />}
            /> */}
            {/* <Route href="#music" ref={(section) => {this.Music = section;}} render={() => <Music />} /> */}
            <Route
              href="#contact"
              ref={section => {
                this.Contact = section;
              }}
              render={() => <Contact className="main-item panel" />}
            />
            {/* test */}
            {/* <br />
         <br />
         <br />
         <br /> */}
            {/* <Menu /> */}
          </div>
          <div className="temp-nav">
            <li
              onClick={() =>
                scrollToComponent (this.Menu, {
                  offset: 0,
                  align: 'top',
                  duration: 800,
                })}
              className="nav-button"
            >
              Menu
            </li>
            {/* <li
              onClick={() =>
                scrollToComponent (this.About, {
                  offset: 0,
                  align: 'top',
                  duration: 800,
                })}
              className="nav-button"
            >
              About Us
            </li> */}
            {/* <button onClick={() => scrollToComponent(this.Music, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Music</button> */}
            <li
              onClick={() =>
                scrollToComponent (this.Contact, {
                  offset: 0,
                  align: 'top',
                  duration: 800,
                })}
              className="nav-button"
            >
              Location
            </li>
          </div>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    // projects: state.projects,
  };
};

export default connect (mapStateToProps, {}) (App);

// export default App;
