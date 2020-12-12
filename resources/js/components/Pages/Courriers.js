import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Courrier from "../Components/Courrier";
import Loader from "../Components/Loader";
import { MOIS } from "../Helpers/Const";
import { manageResponse } from "../Helpers/Func";

export default function Courriers() {
    const dispatch = useDispatch();
    let [courriers, setCourriers] = useState({});
    let [isLoading, setLoading] = useState(true);

	function getCourriers() {
        return fetch("/consultExternalReceived").then(async res => ({
            status: res.status,
            ...(await res.json())
        }));
    }

    useEffect(() => {
        setLoading(true);
        getCourriers().then(response => {
            if (!response.success) {
                return manageResponse(response, dispatch);
            }
            setCourriers(
                Object.values(response.courriers).reduce(($c, courrier) => {
                    let date = new Date(courrier.updated_at);
                    let d = `${date.getDate()} ${
                        MOIS[date.getMonth()]
                    } ${date.getFullYear()}`;

                    if (!$c[d] || !Array.isArray($c[d])) {
                        $c[d] = [
                            {
                                heures: date.getHours(),
                                minutes: date.getMinutes(),
                                ...courrier
                            }
                        ];
                    } else {
                        $c[d].push({
                            heures: date.getHours(),
                            minutes: date.getMinutes(),
                            ...courrier
                        });
                    }

                    $c[d].sort((c1, c2) =>
                        c1.updated_at < c2.updated_at
                            ? 1
                            : c1.updated_at == c2.updated_at
                            ? 0
                            : -1
                    );

                    return $c;
                }, {})
            );
            setLoading(false);
        });
    }, []);

    return isLoading ? (
        <Loader normal="40px" />
    ) : (
        <div className="timeline">
            <div className="timeline-container d-flex flex-column align-items-center h-100p ml-3 position-relative">
                <h4 className="text-uppercase">Liste des courriers</h4>

                {Object.keys(courriers).length === 0 && (
                    <div className="alert alert-warning mt-5" role="alert">
                        Vous n'avez pas de nouveaux courriers.
                    </div>
                )}

                {Object.keys(courriers).map((jour, i) => (
                    <div
                        key={i + 1}
                        className="timeline-data d-flex flex-column pt-4 position-relative"
                        style={{ width: "100%", maxWidth: "950px" }}
                    >
                        <div
                            style={{ marginLeft: "-30px", fontWeight: "bold" }}
                            className="shadow timeline-date p-2 align-self-start rounded-circle border-warning"
                        >
                            <span>{jour}</span>
                        </div>

                        <div className="timeline-contents border-left p-4 p-l-0 m-l-4 m-r-4">
                            {courriers[jour].map((courrier, index) => (
                                <div
                                    key={index + 1}
                                    className="timeline-content d-flex align-items-start position-relative"
                                >
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
											{courrier.heures < 10 ? `0${courrier.heures}`:courrier.heures}
                                            <h4
                                                className="d-inline-block position-absolute"
                                                style={{
                                                    top: "5px",
                                                    fontWeight: "normal",
                                                    fontSize: "0.4em"
                                                }}
                                            >
                                                {courrier.minutes < 10 ? `0${courrier.minutes}`:courrier.minutes}
                                            </h4>
                                        </small>
                                    </div>

                                    <Courrier {...courrier} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
