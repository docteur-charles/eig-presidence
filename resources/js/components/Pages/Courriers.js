import React from "react";
import Courrier from "../Components/Courrier";

export default function Courriers(props) {
    return (
        <div className="timeline">
            <div className="timeline-container d-flex flex-column align-items-center h-100p ml-3 position-relative">
                <h4 className="text-uppercase">Liste des courriers</h4>

                <div
                    className="timeline-data d-flex flex-column pt-4 position-relative"
                    style={{ width: "100%", maxWidth: "950px" }}
                >
                    <div
                        style={{ marginLeft: "-30px", fontWeight: "bold" }}
                        className="shadow timeline-date p-2 align-self-start rounded-circle border-warning"
                    >
                        <span>24 Déc</span>
                    </div>

                    <div className="timeline-contents border-left p-4 p-l-0 m-l-4 m-r-4">
                        <div className="timeline-content d-flex align-items-start position-relative">
                            <div
                                className="content-hr border-bottom border-warning"
                                style={{
                                    width: "150px",
                                    marginTop: "-1px",
                                    paddingLeft: "30px"
                                }}
                            >
                                <small
                                    style={{
                                        fontSize: "2.5em",
                                        fontFamily: "monospace",
                                        fontWeight: "bold",
                                        position: "relative"
                                    }}
                                >
                                    12
                                    <h4
                                        className="d-inline-block position-absolute"
                                        style={{
                                            top: "5px",
                                            fontWeight: "normal",
                                            fontSize: "0.4em"
                                        }}
                                    >
                                        14
                                    </h4>
                                </small>
                            </div>

                            <Courrier />
                        </div>

                        <div className="timeline-content d-flex align-items-start position-relative">
                            <div
                                className="content-hr border-bottom border-warning"
                                style={{
                                    width: "150px",
                                    marginTop: "-1px",
                                    paddingLeft: "30px"
                                }}
                            >
                                <small
                                    style={{
                                        fontSize: "2.5em",
                                        fontFamily: "monospace",
                                        fontWeight: "bold",
                                        position: "relative"
                                    }}
                                >
                                    12
                                    <h4
                                        className="d-inline-block position-absolute"
                                        style={{
                                            top: "5px",
                                            fontWeight: "normal",
                                            fontSize: "0.4em"
                                        }}
                                    >
                                        14
                                    </h4>
                                </small>
                            </div>

                            <Courrier />
                        </div>
                    </div>
                </div>
                <div
                    className="timeline-data d-flex flex-column position-relative"
                    style={{ width: "100%", maxWidth: "950px" }}
                >
                    <div
                        style={{ marginLeft: "-30px", fontWeight: "bold" }}
                        className="shadow stimeline-date p-2 align-self-start rounded-circle border-warning border"
                    >
                        <span>23 Déc</span>
                    </div>

                    <div className="timeline-contents border-left p-4 p-l-0 m-l-4 m-r-4">
                        <div className="timeline-content d-flex align-items-start position-relative">
                            <div
                                className="content-hr border-bottom border-warning"
                                style={{
                                    width: "150px",
                                    marginTop: "-1px",
                                    paddingLeft: "30px"
                                }}
                            >
                                <small
                                    style={{
                                        fontSize: "2.5em",
                                        fontFamily: "monospace",
                                        fontWeight: "bold",
                                        position: "relative"
                                    }}
                                >
                                    12
                                    <h4
                                        className="d-inline-block position-absolute"
                                        style={{
                                            top: "5px",
                                            fontWeight: "normal",
                                            fontSize: "0.4em"
                                        }}
                                    >
                                        14
                                    </h4>
                                </small>
                            </div>

                            <Courrier />
                        </div>

                        <div className="timeline-content d-flex align-items-start position-relative">
                            <div
                                className="content-hr border-bottom border-warning"
                                style={{
                                    width: "150px",
                                    marginTop: "-1px",
                                    paddingLeft: "30px"
                                }}
                            >
                                <small
                                    style={{
                                        fontSize: "2.5em",
                                        fontFamily: "monospace",
                                        fontWeight: "bold",
                                        position: "relative"
                                    }}
                                >
                                    12
                                    <h4
                                        className="d-inline-block position-absolute"
                                        style={{
                                            top: "5px",
                                            fontWeight: "normal",
                                            fontSize: "0.4em"
                                        }}
                                    >
                                        14
                                    </h4>
                                </small>
                            </div>

                            <Courrier />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
