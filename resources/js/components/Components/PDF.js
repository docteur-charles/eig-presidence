import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

import Loader from '../Components/Loader';

pdfjs.GlobalWorkerOptions.workerSrc = `/js/pdf.worker.js`;

export default function PDF({ url, pagination = false }) {
  const [numPages, setNumPages] = useState(null);
  const [allowPagination, setPagination] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPagination(true);
  }

  function suivant() {
    setPageNumber(pageNumber + 1);
  }

  function precedent() {
    setPageNumber(pageNumber - 1);
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className="border m-b-30">
        <Document
          renderMode="svg"
          file={url}
          loading={<Loader />}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      {pagination && allowPagination && (
        <div className="d-flex justify-content-between">
          <div>Page {pageNumber} sur {numPages}</div>
          <div>
            {(pageNumber !== 1) && (
              <button type="button" className="btn btn-outline-primary btn-lg mr-2" onClick={precedent}>Page précédente</button>
            )}
            {(pageNumber !== numPages) && (
              <button type="button" className="btn btn-primary btn-lg" onClick={suivant}>Page suivante</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}