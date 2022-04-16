import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Courrier.css";

import PDF from "./PDF";

export default function Courrier({
    id = 1,
    reference,
	mention,
	etat,
    type_contenu,
    type_courrier,
    url_fichier,
    objet,
    origine
}) {
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
		if (url_fichier.substr(-4).toString() !== ".pdf") {
			setFetching(false);
		}
	}, []);

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
            className={"conteneur position-relative box" + ' ' + etat.toLowerCase()}
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
                    {url_fichier.substr(-4).toString() === ".pdf" ? (
                        <PDF
                            onLoaded={() => setFetching(false)}
                            url={url_fichier.replace(/^public/, "/storage")}
                        />
                    ) : (
                        <img
								src={url_fichier.replace(/^public/, "/storage")}
								width='100%'
                        />
                    )}
                </div>
                <div className="shadow">
                    <div
                        className="d-flex flex-column align-items-end"
                        style={{
                            position: "absolute",
                            bottom: "10px",
                            right: "10px",
                            zIndex: 2
                        }}
                    >
                        <span
                            style={{
                                fontSize: "16px",
                                textDecoration: "underline"
                            }}
                        >
                            N° d'ordre
                        </span>
                        <span style={{ fontSize: "26px" }}>
                            {reference < 10
                                ? `00000${reference}`
                                : reference < 100
                                ? `0000${reference}`
                                : reference < 1000
                                ? `000${reference}`
                                : reference < 10000
                                ? `00${reference}`
                                : reference < 100000
                                ? `0${reference}`
                                : reference}
                        </span>
                    </div>
                    <div className="flip-over" />
                </div>
                <div className="rempl" />
                <div className="cover d-flex align-items-center justify-content-center">
                    <blockquote className="blockquote mb-0 p-4">
                        <div
                            className="position-absolute"
                            style={{ right: "10px", top: "-0px" }}
                        >
                            <div className="badge badge-success">
                                {type_contenu}
                            </div>
                            &nbsp;
                            <div className="badge badge-warning">
                                {type_courrier}
                            </div>
                            &nbsp;
                            <div className="badge badge-light">{mention}</div>
                        </div>
                        <h4
                            className="text-uppercase text-left"
                            title="Objet du courrier"
                        >
                            {objet}
                        </h4>
                        <footer className="blockquote-footer text-uppercase">
                            <cite title="Provénance du courrier">
                                <small>{origine}</small>
                            </cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </Link>
    );
}
