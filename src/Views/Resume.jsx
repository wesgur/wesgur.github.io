import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';

import resumePdf from '../Static/Resume.pdf';
import { useEffect } from 'react';

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
        <div className="double-container">
            <div className="container-left">
                <h1> Resume </h1>
                <h2> Education </h2>
                <h3> University of Toronto </h3>

            </div>
            <div className="container-right">        
                <Document
                    file="https://www.dl.dropboxusercontent.com/s/9d23dsrdtvuyf7b/Resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
            
        </div>        
    );
}

export default Resume;