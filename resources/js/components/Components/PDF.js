import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `/js/pdf.worker.js`;

export default function PDF({url, pagination = false}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function suivant() {
    setPageNumber(pageNumber + 1);
  }

  function precedent() {
    setPageNumber(pageNumber - 1);
  }

  return (
    <div style={{position: 'relative', height: '80%'}}>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {pagination && (
        <div className="d-flex justify-content-between">
          <div>Page {pageNumber} sur {numPages}</div>
          <div>
            {(pageNumber !== 1) && (
              <button className="btn btn-outline-primary btn-sm mr-2" onClick={precedent}>Précédent</button>
            )}
            {(pageNumber !== numPages) && (
              <button className="btn btn-primary btn-sm" onClick={suivant}>Suivant</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}