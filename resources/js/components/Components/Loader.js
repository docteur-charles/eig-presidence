import React, { useEffect, useState } from "react";

export default function Loader({ id = 0, bordered = false, style = {}, spinnerColor='orange', normal='' }) {
    let [height, setHeight] = useState("100%");
    let [width, setWidth] = useState("100%");
    let [element, setElement] = useState(null);
    let $ = window.$;

    function resize() {
        if (element) {
            let overflow = $(element).css("overflow");

            setTimeout(() => {
                let width = $(element)
                        .parent()
                        .width(),
                    height = $(element)
                        .parent()
                        .height();
                element.parentNode.style.overflow = "hidden";
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
		<div
            ref={ref => setElement(ref)}
            className={` ${
                bordered ? "border border-success" : ""
            } d-flex align-items-center justify-content-center`}
            style={{
                position: "relative",
                top: 0,
                bottom: 0,
                left: 0,
                height,
                width,
                right: 0,
                zIndex: 9999999,
                background: "#fff",
                ...style
            }}
        >
            <div
                className="spinner-grow"
                title="Chargement en cours, veuillez patienter !"
                style={{ color: spinnerColor, width: normal, height: normal }}
                role="status"
            >
                <span className="sr-only">Chargement en cours ...</span>
            </div>
        </div>
    );
}
