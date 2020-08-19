import React from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const Experiences = (props) => (
    <div className={classNames(styles.sector)}>
        <h2> Work Experience </h2>
        {
            props.experiences && props.experiences.map(e => { 
                return ( <Experience experience={e}> </Experience> )
            })
        } 
    </div>
);

const Experience = (props) => (
    <div className={classNames(styles.content)}>
        <div className={classNames(styles.left)}>
            <Company value={props.experience.company}></Company>
            <Position value={props.experience.position}></Position>
        </div>
        <div className={classNames(styles.right)}>
            <Timeline 
                start={props.experience.start} 
                end={props.experience.end}> 
            </Timeline>
        </div>
    </div>
)

const Company = (props) => {
    return (
        <div className={classNames(styles.company)}>
            <h3> {props.value} </h3>
        </div>
    )
}

const Position = (props) => {
    return (
        <div className={classNames(styles.position)}>
            <h4> {props.value} </h4>
        </div>
    )
}

const Timeline = (props) => {
    return (
        <div className={classNames(styles.timeline)}>
            <h3> {props.start} - {props.end} </h3>
        </div>
    )
}

Experience.Company = Company;
Experience.Position = Position;
Experience.Timeline = Timeline;

export default Experiences;