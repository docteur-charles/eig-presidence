import React, { useEffect } from 'react';
import '../Styles/Courrier.css';

import PDF from './PDF';

export default function Courrier({id}) {


  function getWidth(element) {
    let width = element.offsetWidth;
    return width || 0;
  }

  function getHeight(element) {
    let height = element.offsetHeight;
    return height || 0;
  }

  function getCote(hypo) {
    return Math.sqrt(Math.pow(hypo, 2) / 2);
  }

  useEffect(() => {

    let conteneur = document.querySelector('.conteneur');
    let flipOver = document.querySelector('.flip-over');
    let rempl = document.querySelector('.rempl');
    let shadow = document.querySelector('.shadow');
    let cover = document.querySelector('.cover');

    function init() {
      let hypo = getWidth(flipOver);
      let contWidth = getWidth(conteneur);
      let contHeight = getHeight(conteneur);
      let cote = getCote(hypo);

      flipOver.style.top = `${cote - (hypo / 2)}px`;
      flipOver.style.left = `${cote - (hypo / 2)}px`;

      rempl.style.height = `${contHeight - cote}px`;
      rempl.style.width = `${cote}px`;

      shadow.style.width = `${cote}px`;
      shadow.style.height = `${cote}px`;

      cover.style.width = `${contWidth - cote + 1}px`;
    }

    init();

    window.onresize = init;

    return () => {
      window.resize = null;
    }

  });

  return (
    <div className="conteneur" id={`courrier_${id}`}>
      <div className="courrier">
        <PDF url="/documents/cahier_de_charges.pdf" />
      </div>
      <div className="shadow">
        <div className="flip-over" />
      </div>
      <div className="rempl" />
      <div className="cover d-flex align-items-center justify-content-center">
        <blockquote class="blockquote mb-0 p-4">
          <h2 className="text-uppercase" title="objet">Demande d'acquisition de la nationalité nigérienne</h2>
          <footer class="blockquote-footer text-uppercase"><cite title="Provénance"><small>Ministère des affaires étrangères</small></cite></footer>
        </blockquote>
      </div>
    </div>
  );

}