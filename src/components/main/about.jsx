import React from 'react';
import AboutBoxItem from './about/aboutBoxItem';

const About = (props) => {
    return (
        <section className="sectionBox">
            <h1 className="titleText">ABOUT</h1>
            <div className="aboutBox">
                <AboutBoxItem iconClass='fas fa-user' title='이름' content='임호' />
                <AboutBoxItem iconClass='fas fa-calendar-day' title='생년월일' content='1994.11.08' />
                <AboutBoxItem iconClass='fas fa-map-pin' title='주소' content='경기도 시흥시 배곧동' />
                <AboutBoxItem iconClass='fas fa-phone-alt' title='연락처' content='010-3662-7692' />
                <AboutBoxItem iconClass='fas fa-envelope' title='이메일' content='dlagh123@gamil.com' />
                <AboutBoxItem iconClass='fas fa-briefcase' title='포지션' content='Front-End' />
            </div>
        </section>

    )
};

export default About;