import React from 'react';
import classNames from 'classnames';

import { Education, Experience, Viewer } from '../Components/Resume';

import styles from '../Components/Container/styles.module.scss';

const RESUME_LINK = "https://www.dl.dropboxusercontent.com/s/9d23dsrdtvuyf7b/Resume.pdf";
const experiences = [
    {
        "company": "Bluecat Networks",
        "position": "Software Development Co-op",
        "start": "Aug 2018",
        "end": "Aug 2019"
    },
    {
        "company": "Republic of Korea Army (ROKA)",
        "position": "Intelligence Operations / Topographic Analyst",
        "start": "Dec 2015",
        "end": "Aug 2017"
    },
    {
        "company": "Schoool (English On The Go)",
        "position": "Software Developer",
        "start": "Jan 2015",
        "end": "Nov 2015"
    }
]

// TODO: Refactor 
const Resume = () => {
    return (
        <div className={classNames(styles["container-items"])}>
            <div className={classNames(styles["container-item"])}>          
                <h1> Resume Summary </h1>
                
                <Education> </Education>

                <Experience experiences={experiences}> </Experience> 
                                
                <div>
                    <h2> Technical Skills </h2>    
                    <div>
                        <h3> Programming Languages </h3>
                        <p> Javascript, Go, Python, Java </p>
                    </div>
                    <div>
                        <h3> Familiar Operating Systems </h3>
                        <p> Mac, Linux </p>
                    </div>
                </div>                  
            </div>
            <Viewer link={RESUME_LINK}> </Viewer>
        </div>           
    );
}

export default Resume;