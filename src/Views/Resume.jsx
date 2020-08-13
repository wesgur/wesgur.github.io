import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
                <div>                    
                    <h2> Education </h2>
                    <div>
                        <h3> University of Toronto </h3>
                        <h4> Honours B.Sc. Computer Science, Specialist </h4>
                    </div>                    
                </div>
                <div>
                    <h2> Work Experience </h2>
                    <div>
                        <h3> Bluecat Networks </h3>
                        <h4> Software Development Co-op </h4>
                    </div>
                    <div>
                        <h3> Republic of Korea Army (ROKA) </h3>
                        <h4> Intelligence Operation / Topographic Analyst </h4>
                    </div>
                    <div>
                        <h3> Schoool (English On The Go) </h3>
                        <h4> Software Developer </h4>                                         
                    </div>
                </div>                              
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
            <div className="container-item">
                <a href="https://www.dl.dropboxusercontent.com/s/9d23dsrdtvuyf7b/Resume.pdf">
                    <Document
                        className="resume-viewer"
                        file="https://www.dl.dropboxusercontent.com/s/9d23dsrdtvuyf7b/Resume.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}>
                        <Page pageNumber={pageNumber} />
                    </Document>            
                </a>
            </div>            
        </div>        
    );
}

export default Resume;