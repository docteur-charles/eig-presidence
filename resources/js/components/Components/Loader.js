import React, { useEffect, useState } from 'react';

export default function Loader({ id = 0, bordered = false }) {

  let [height, setHeight] = useState('100%');
  let [width, setWidth] = useState('100%');

  function resize() {
    let element = document.querySelector(`.loader${id}`);
    let $ = window.$;

    if (element) {

      let overflow = $(element).css('overflow');

      setTimeout(() => {
        let width = $(element).parent().width(), height = $(element).parent().height();
        element.parentNode.style.overflow = 'hidden';
        setHeight(height);
        setWidth(width);
      }, 200);

      return () => {
        element.parentNode.style.overflow = overflow;
      };

    }
  }

  useEffect(() => {

   let $return = resize();

    window.onresize = resize;


    return $return;

  }, []);

  return (
    <div className={`loader${id} ${bordered ? 'border border-success' : ''} d-flex align-items-center justify-content-center`} style={{ position: 'relative', top: 0, bottom: 0, left: 0, height, width, right: 0, zIndex: 9999999, background: '#fff' }}>
      <div className="spinner-grow" title="Chargement en cours, veuillez patienter !" style={{ color: 'orange' }} role="status">
        <span className="sr-only">Chargement en cours ...</span>
      </div>
    </div>
  );
}