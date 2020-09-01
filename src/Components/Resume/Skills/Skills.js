import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Skills = (props) => (
    <div className={classNames(styles.skills)}>
        <h2> Technical Skills </h2>    

        <h3> Programming Languages </h3>
        <SkillSets skills={props.skills.lang}/>
        
        <h3> Familiar Operating Systems </h3>
        <p> Mac OS, Ubuntu, Debian </p>
    </div>
);

const SkillSets = (props) => (
    <ul>
        { props.skills ? props.skills.map((skill, i) => ( <li key={i}> <SkillSet {...skill}/> </li> )) : null }
    </ul>
);

const SkillSet = (props) => (
    <div className={classNames(styles["skill-set"])}>
        <p> {props.name} </p>
        <SkillBar {...props} />
    </div>
);

const SkillBar = (props) => (
    <div className={classNames(styles["skill-bar"])}>
        <div className={classNames(styles["skill-level"], styles["skill-bar"])} style={{"--level": `${props.level}%`}}> {props.level} </div>
    </div>
);

export default Skills;