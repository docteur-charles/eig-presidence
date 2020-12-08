import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Courrier.css";

import PDF from "./PDF";

export default function Courrier({ id = 1, mention, typeContenu }) {
    let [conteneur, setConteneur] = useState(null);
    let [isLoading, setLoading] = useState(true);
    let [isFetching, setFetching] = useState(true);

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
        if (conteneur && !isFetching) {
            let flipOver = conteneur.querySelector(".flip-over");
            let rempl = conteneur.querySelector(".rempl");
            let shadow = conteneur.querySelector(".shadow");
            let cover = conteneur.querySelector(".cover");

            function init() {
                let hypo = getWidth(flipOver);
                let contWidth = getWidth(conteneur);
                let contHeight = getHeight(conteneur);
                let cote = getCote(hypo);

                flipOver.style.top = `${cote - hypo / 2}px`;
                flipOver.style.left = `${cote - (hypo / 2 + 0.5)}px`;

                rempl.style.height = `${contHeight - cote}px`;
                rempl.style.width = `${cote}px`;

                shadow.style.width = `${cote}px`;
                shadow.style.height = `${cote}px`;

                cover.style.width = `${contWidth - cote + 1}px`;
            }

            setTimeout(() => {
                init();
            }, 200);

            window.addEventListener("resize", init);

            return () => {
                window.removeEventListener("resize", init);
            };
        }
    }, [conteneur, isFetching]);

    useEffect(() => {
        setTimeout(() => {
            if (!isFetching) setLoading(false);
        }, 500);
    }, [isFetching]);

    return (
        <Link
            to={isLoading ? "" : `/courriers/${id}`}
            className="conteneur position-relative box"
            style={{ width: "100%" }}
            id={`courrier_${id}`}
            ref={ref => setConteneur(ref)}
        >
            {isFetching && (
                <>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </>
            )}
            <div
                style={{
                    transition: "opacity 0.3s",
                    opacity: isLoading ? 0 : 1,
                    width: "100%",
                    height: "100%"
				}}
				className="box_content"
            >
                <div className="courrier">
                    <PDF
                        onLoaded={() => setFetching(false)}
                        url="/documents/cahier_de_charges.pdf"
                    />
                </div>
                <div className="shadow">
                    <div className="flip-over" />
                </div>
                <div className="rempl" />
                <div className="cover d-flex align-items-center justify-content-center">
                    <blockquote className="blockquote mb-0 p-4">
                        <div
                            className="position-absolute"
                            style={{ right: "10px", top: "-0px" }}
                        >
                            <div className="badge badge-success">Ordinaire</div>
                            &nbsp;
                            <div className="badge badge-light">
                                Confidentiel
                            </div>
                        </div>
                        <h4
                            className="text-uppercase text-left"
                            title="Objet du courrier"
                        >
                            Demande d'acquisition de la nationalité nigérienne
                        </h4>
                        <footer className="blockquote-footer text-uppercase">
                            <cite title="Provénance du courrier">
                                <small>Ministère des affaires étrangères</small>
                            </cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </Link>
    );
}
