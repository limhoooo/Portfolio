import React from 'react';

const ProjectItem = (props) => (
    <div className='projectBox'>
        <img src={props.project.imagePath} alt="" />
        <div className='textBox'>
            <span className='top'>
                {props.project.title}
            </span>
            <span className='bottom'>
                {props.project.skills}
            </span>
        </div>
        <div className='hoverBox'>
            <a href={props.project.demo} target='_blank'>Demo</a>
            <a href={props.project.github} target='_blank'>GitHub</a>
        </div>
    </div>
);

export default ProjectItem;