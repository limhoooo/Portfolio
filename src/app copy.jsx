/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import About from './components/about';
import Another from './components/another';
import Skills from './components/skills';
import HomeBanner from './components/homeBanner';
import LeftBar from './components/leftBar';
import './app.css';

class App extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <>
        {<div className="dispalyNone">
          <LeftBar />
        </div>}
        <ReactFullpage
          css3={false}
          // navigation={true}
          scrollingSpeed={'1200'}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          parallax={true}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <HomeBanner />
                </div>
                <div className="section section2">
                  <Skills />
                </div>
                <div className="section section3">
                  <About />
                </div>
                <div className="section section4">
                  <Another />
                </div>
              </div>
            );
          }}
        />
      </>
    );
  }
}


export default App;
