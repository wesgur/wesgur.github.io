import React from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const Education = (props) => (
    <div className={classNames(styles.sector)}>
        <h2> Education </h2>
        
        <div className={classNames(styles.content)}>
            <div className={classNames(styles.left)}>
                <School> </School>
                <Degree> </Degree>
            </div>
            <div className={classNames(styles.right)}>
                <Timeline> </Timeline>
            </div>
        </div>                    
    </div>
);

const School = (props) => {
    return ( 
        <div className={classNames(styles.school)}>
            <h3> University of Toronto, St.George </h3> 
        </div>
    );
}

const Degree = (props) => {
    return (
        <div className={classNames(styles.degree)}>
            <h4> Honours B.Sc. Computer Science, Specialist</h4>
        </div>
    );
}

const Timeline = (props) => {
    return (
        <div className={classNames(styles.timeline)}>
            <h3> Sept 2013 - May 2020 </h3>
        </div>
    );
}

Education.School = School;
Education.Degree = Degree;
Education.Timeline = Timeline;

export default Education;