/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import HomeBanner from "./main/homeBanner";
import Skills from "./main/skills";
import About from "./main/about";
import Another from "./main/another";


class Main extends React.Component {
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
                </div>}
                <ReactFullpage
                    css3={false}
                    // navigation={true}
                    scrollingSpeed={'800'}
                    onLeave={this.onLeave.bind(this)}
                    afterLoad={this.afterLoad.bind(this)}
                    parallax={true}
                    render={({ state, fullpageApi }) => {
                        return (
                            <div id="fullpage-wrapper">
                                <div className="homeBanner section section1">
                                    <HomeBanner />
                                </div>
                                <div className="skills section section2">
                                    <Skills />
                                </div>
                                <div className="about section section3">
                                    <About />
                                </div>
                                <div className="another section section4">
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


export default Main;
