import React, { useState } from 'react';
import SkillsItem from './skills/skillsItem';

const Skills = (props) => {

    return (
        <section className="sectionBox">
            <h1 className="titleText">Skills</h1>
            <div className='w80p mgCenter'>
                <div className='skillTitle'>
                    <p >FrontEnd</p>
                </div>
                <div className="skillsBox">
                    <SkillsItem skillName='html' />
                    <SkillsItem skillName='css' />
                    <SkillsItem skillName='javascript' />
                    <SkillsItem skillName='ts' />
                    <SkillsItem skillName='react' />
                    <SkillsItem skillName='vue' />
                    <SkillsItem skillName='jquery' />
                    <SkillsItem skillName='vuex' />
                    <SkillsItem skillName='vuetify' />
                </div>
                <div className='skillTitle'>
                    <p >BackEnd</p>
                </div>
                <div className="skillsBox">
                    <SkillsItem skillName='java' />
                    <SkillsItem skillName='mysql' />
                </div>
                <div className='skillTitle'>
                    <p >BackEnd</p>
                </div>
                <div className="skillsBox">
                    <SkillsItem skillName='babel' />
                    <SkillsItem skillName='netlify' />
                    <SkillsItem skillName='nginx' />
                    <SkillsItem skillName='webpack' />
                </div>

            </div>
        </section>
    )
};

export default Skills;