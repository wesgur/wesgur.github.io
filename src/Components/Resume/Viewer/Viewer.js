import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import classNames from 'classnames';

import styles from './styles.module.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Viewer = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function onDocumentLoadError(error) {
        alert(error);
    }
    
    return (
        <div className={classNames(styles["container"])}> 
            <a href={props.link}>
                <Document
                    className={classNames(styles["viewer"])}
                    file={props.link}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}>
                    <Page 
                        pageNumber={pageNumber} />                        
                </Document>            
            </a>
        </div>
    );
};

export default Viewer;