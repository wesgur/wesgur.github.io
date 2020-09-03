import React from 'react';

import { default as Page } from '../Components/Page';
import { default as Resume, ResumeViewer } from '../Components/Resume';
import { default as Container } from '../Components/Container';

const link = "https://www.dl.dropboxusercontent.com/s/9d23dsrdtvuyf7b/Resume.pdf";
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

const skills = {
    "lang" : [
        {
            "name" : "javascript",
            "level" : 90,
        },
        {
            "name" : "go",
            "level" : 60,
        },
        {
            "name" : "python",
            "level" : 80,
        },
        {
            "name" : "java",
            "level" : 50,
        }
    ],
    "os" : [
        "mac", "ubuntu", "debian"
    ],
    "cloud" : {
        "aws" : [ "ec2", "ecs", "cloudformation", "cloudwatch", "lambda", "api gateway", "iam" ]
    }        
}

const ResumePage = (props) => (
    <Page>
        <Container.Items>
            <Container.Item>
                <Resume experiences={experiences} skills={skills}/> 
            </Container.Item>
            <ResumeViewer link={link}> </ResumeViewer>
        </Container.Items>            
    </Page>
);

export default ResumePage;