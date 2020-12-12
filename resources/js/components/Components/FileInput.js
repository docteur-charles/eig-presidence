import React, { useState } from "react";

export default function FileInput({
    onLoaded,
    name,
    onExtensionNotMatch: handleExtensionNotMatch
}) {
    let [file, setFile] = useState(null);
    let [container, setContainer] = useState(null);

    function onFileChange(e) {
        let [f] = e.target.files;
        if (
            f &&
            [
                "application/pdf",
                "image/jpg",
                "image/bitmap",
                "image/jpeg",
                "image/png"
            ].includes(f.type)
        ) {
            if (f) setFile(f);
            let reader = new FileReader();
            reader.onload = function() {
                if (onLoaded && typeof onLoaded === "function") {
                    onLoaded(f, this.result);
                }
            };
            reader.readAsDataURL(f);
        } else {
            handleExtensionNotMatch();
        }
    }

    function onBlur(e) {
        e.currentTarget.style.borderColor = "#ffa50080";
        if (file) {
            window
                .$(e.currentTarget)
                .find("b")
                .css({ color: "#000" });
        }
    }

    function onFocus(e) {
        if (!file) {
            e.currentTarget.style.borderColor = "#ffa50070";
        } else {
            window
                .$(e.currentTarget)
                .find("b")
                .css({ color: "#ffa500f0" });
        }
    }

    function onClick(e) {
        let input = container.querySelector("input");
        input.click();
    }

    return (
        <div
            ref={ref => setContainer(ref)}
            className="row flex-column align-items-center"
        >
            <div
                className={`d-flex flex-column col-12 p-2 p-xl-3 align-items-center justify-content-center shadow-sm rounded-pill`}
                style={{
                    cursor: "pointer",
                    border: "2px solid #ffa50080"
                }}
                onClick={onClick}
                onMouseOver={onFocus}
                onMouseOut={onBlur}
            >
                <input type="file" name={name} onChange={onFileChange} style={{display: 'none'}} />
                <label
                    style={{
                        cursor: "pointer",
                        userSelect: "none",
                        color: !file ? "lightgrey" : "black",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "100%"
                    }}
                    className="d-none d-xl-flex font-size-18 align-items-center justify-content-center m-0"
                >
                    {file ? (
                        <>
                            <small>
                                <i>
                                    <u>Courrier chargé:</u>
                                </i>
                            </small>
                            &nbsp;&nbsp;
                            <b className="font-size-22">{file.name}</b>
                        </>
                    ) : (
                        <span className="align-self-center">
                            PDF, PNG, JPG, JPEG, BITMAP
                        </span>
                    )}
                </label>
                <label
                    style={{
                        cursor: "pointer",
                        userSelect: "none",
                        color: !file ? "lightgrey" : "black",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "100%"
                    }}
                    className="d-flex d-xl-none align-items-center justify-content-center m-0"
                >
                    {file ? (
                        <>
                            <small className="d-none d-md-inline">
                                <i>
                                    <u>Courrier chargé:</u>
                                </i>
                            </small>
                            &nbsp;&nbsp;
                            <b className="font-size-20">{file.name}</b>
                        </>
                    ) : (
                        <span className="align-self-center">
                            PDF, PNG, JPG, JPEG, BITMAP
                        </span>
                    )}
                </label>
            </div>
            {!file && (
                <>
                    <small className="form-text d-inline d-md-none text-center pr-2 pl-2 text-muted">
                        Cliquez dans la zone de texte pour commencer.
                    </small>
                    <small className="form-text d-none d-md-inline text-center pr-2 pl-2 text-muted">
                        Cliquez dans la zone de texte et chargez le courrier à
                        enregistrer depuis un espace de stockage.
                    </small>
                </>
            )}
        </div>
    );
}
