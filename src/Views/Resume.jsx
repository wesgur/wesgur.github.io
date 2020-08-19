import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import { Education, Experience } from '../Components/Resume';

const RESUME_LINK = "https://www.dl.dropboxusercontent.com/s/9d23dsrdtvuyf7b/Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function onDocumentLoadError(error) {
        alert(error);
    }

    return (
        <div className="container">
            <div className="container-item">          
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
            <div className="container-resume">
                <a href={RESUME_LINK}>
                    <Document
                        className="resume-viewer"
                        file={RESUME_LINK}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}>
                        <Page 
                            pageNumber={pageNumber} />
                        
                    </Document>            
                </a>
            </div>            
        </div>        
    );
}

export default Resume;