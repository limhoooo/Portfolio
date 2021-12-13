import React from 'react';

const SkillsItem = (props) => (
    <div className="skillsItem">
        <span className={`skillsIcon ${props.skillName}`}></span>
        <p>{props.skillName}</p>
    </div>
);

export default SkillsItem;