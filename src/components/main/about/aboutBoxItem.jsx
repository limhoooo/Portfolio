import React from 'react';

const AboutBoxItem = (props) => {
    return (
        <div className="aboutBoxItem">
            <div className="icon">
                <i className={props.iconClass}></i>
            </div>
            <div className="contentBox">
                <p className="title">{props.title}</p>
                <p className="content">{props.content}</p>
            </div>
        </div>
    );
}
export default AboutBoxItem;