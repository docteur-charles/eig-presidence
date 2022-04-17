import React from "react";
import { useMutation } from "react-query";
import Courrier from "../Components/Courrier";
import Loader from "../Components/Loader";
import { MOIS, STANDARD, TRES_URGENT, URGENT } from "../Helpers/Const";
import CourrierService from "../Services/Courrier";

export default function Courriers() {
    let [courriers, setCourriers] = React.useState({});
    const [isEmpty, setEmpty] = React.useState(false);

    const { mutateAsync: getExternalReceived, isLoading } = useMutation(
        CourrierService.ExternalReceived
    );

    const sortCourriers = React.useCallback(_courriers => {
        let courTemp = _courriers.reduce(($c, courrier) => {
            let date = new Date(courrier.updated_at);

            let d = date.toISOString();

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
        }, {});

        console.log(courTemp);

        let courDate = Object.keys(courTemp)
            .sort()
            .reverse();

        return courDate.reduce(($c, $d) => {
            let date = new Date($d);
            let d = `${date.getDate()} ${
                MOIS[date.getMonth()]
            } ${date.getFullYear()}`;
            if (!$c[d] || !Array.isArray($c[d])) {
                $c[d] = [...courTemp[$d]];
            } else {
                $c[d].push(...courTemp[$d]);
            }
            return $c;
        }, {});
    }, []);

    const getCourriers = React.useCallback(async () => {
        try {
            let $courriers = await getExternalReceived();

            if (!Array.isArray($courriers)) {
                $courriers = Object.values($courriers);
            }

            console.log($courriers);

            setEmpty($courriers.length === 0);

            let tresUrgents = $courriers.filter(
                courrier => courrier.mention === TRES_URGENT
            );
            let urgents = $courriers.filter(
                courrier => courrier.mention === URGENT
            );
            let standards = $courriers.filter(
                courrier => courrier.mention === STANDARD
            );

            let rest = $courriers.filter(
                c => ![TRES_URGENT, URGENT, STANDARD].includes(c.mention)
            );

            sortCourriers(tresUrgents);

            setCourriers([
                sortCourriers(tresUrgents),
                sortCourriers(urgents),
                sortCourriers(standards),
                sortCourriers(rest)
            ]);
        } catch (err) {
            console.log(err);
        }
    }, [sortCourriers, setCourriers, getExternalReceived]);

    React.useEffect(() => {
        getCourriers();
    }, []);

    return isLoading ? (
        <Loader normal="40px" />
    ) : (
        <div className="timeline">
            <div className="timeline-container d-flex flex-column align-items-center h-100p ml-3 position-relative">
                <h4 className="text-uppercase mb-5">Liste des courriers</h4>

                {isEmpty && (
                    <div className="alert alert-warning mt-5" role="alert">
                        <h2> Vous n'avez pas de nouveaux courriers.</h2>
                    </div>
                )}

                {Object.values(courriers).map(($courriers, mentionIndex) =>
                    Object.keys($courriers).map((jour, i) => (
                        <>
                            {i === 0 && (
                                <div className="row d-flex align-items-center col-12">
                                    <div className="col">
                                        <hr
                                            className={`border ${
                                                mentionIndex === 0
                                                    ? "border-danger"
                                                    : mentionIndex === 1
                                                    ? "border-warning"
                                                    : "border-info"
                                            }`}
                                        />
                                    </div>
                                    <div
                                        className={`col-auto border rounded ${
                                            mentionIndex === 0
                                                ? "border-danger text-danger"
                                                : mentionIndex === 1
                                                ? "border-warning text-warning"
                                                : "border-info text-info"
                                        }`}
                                    >
                                        {mentionIndex === 0
                                            ? "Courriers  très urgents"
                                            : mentionIndex === 1
                                            ? "Courriers urgents"
                                            : "Courriers standards"}
                                    </div>
                                    <div className="col">
                                        <hr
                                            className={`border ${
                                                mentionIndex === 0
                                                    ? "border-danger"
                                                    : mentionIndex === 1
                                                    ? "border-warning"
                                                    : "border-info"
                                            }`}
                                        />
                                    </div>
                                </div>
                            )}
                            <div
                                key={i + 1}
                                className="timeline-data d-flex flex-column pt-4 position-relative"
                                style={{ width: "100%", maxWidth: "950px" }}
                            >
                                <div
                                    style={{
                                        marginLeft: "-30px",
                                        fontWeight: "bold"
                                    }}
                                    className="shadow timeline-date p-2 align-self-start rounded-circle border-warning"
                                >
                                    <span>{jour}</span>
                                </div>

                                <div className="timeline-contents border-left p-4 p-l-0 m-l-4 m-r-4">
                                    {$courriers[jour] &&
                                        $courriers[jour].map(
                                            (courrier, index) => (
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
                                                                fontSize:
                                                                    "2.5em",
                                                                fontFamily:
                                                                    "monospace",
                                                                fontWeight:
                                                                    "bold",
                                                                position:
                                                                    "relative"
                                                            }}
                                                        >
                                                            {courrier.heures <
                                                            10
                                                                ? `0${courrier.heures}`
                                                                : courrier.heures}
                                                            <h4
                                                                className="d-inline-block position-absolute"
                                                                style={{
                                                                    top: "5px",
                                                                    fontWeight:
                                                                        "normal",
                                                                    fontSize:
                                                                        "0.4em"
                                                                }}
                                                            >
                                                                {courrier.minutes <
                                                                10
                                                                    ? `0${courrier.minutes}`
                                                                    : courrier.minutes}
                                                            </h4>
                                                        </small>
                                                    </div>

                                                    <Courrier {...courrier} />
                                                </div>
                                            )
                                        )}
                                </div>
                            </div>
                        </>
                    ))
                )}
            </div>
        </div>
    );
}
