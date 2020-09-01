import React from 'react';

import classNames from 'classnames';

import { default as Education } from './Education';
import { default as Experiences } from './Experiences';
import { default as Skills } from './Skills';

import styles from './styles.module.scss';

const Resume = (props) => (
    <div className={classNames(styles.resume)}>
        <h1> Resume Summary </h1>
            
        <Education/>

        <Experiences experiences={props.experiences}/>

        <Skills skills={props.skills}/>                             
    </div>        
);

export default Resume;