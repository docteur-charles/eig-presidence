import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link, useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import PDF from "../Components/PDF";
import { useSession } from "../Context/Session";
import {
    IMPUT_COURRIER,
    RENVOI_ENVOYEUR,
    ANNOTATIONS,
    TERM_COURRIER,
    TRANSM_COURRIER,
    VALID_REJET,
    STAT_COURRIER
} from "../Helpers/Const";
import CourrierService from "../Services/Courrier";
import DirectionService from "../Services/Direction";
import OperationService from "../Services/Operation";

import "../Styles/SweetDefault.css";

export default function CourrierDetail() {
    let { user } = useSession();

    let { mutateAsync: getCourrier, isLoading, isSuccess } = useMutation(
        CourrierService.ConsultExternalOne
    );

    let { mutateAsync: transferTo, isLoading: isSending } = useMutation(
        CourrierService.TransferTo
    );

    let {
        mutateAsync: validateOrReject,
        isLoading: isValidating
    } = useMutation(CourrierService.ValidateOrReject);

    let { mutateAsync: imputeTo, isLoading: isImputing } = useMutation(
        CourrierService.ImputeTo
    );

    let {
        mutateAsync: getTracks,
        isLoading: isGettingOperations
    } = useMutation(OperationService.List);

    let {
        mutateAsync: getDirections,
        isLoading: isGettingDirections
    } = useMutation(DirectionService.List);

    let {
        mutateAsync: terminateIncoming,
        isLoading: isTerminating
    } = useMutation(CourrierService.TerminateIncoming);

    let [file, setFile] = useState(null);
    let [roles, setRoles] = useState(null);
    let [SelectedCellules, setCellules] = useState({});
    let [SelectedAnnotations, setAnnotations] = useState({});
    let [directions, setDirections] = useState([]);
    let [operations, setOperations] = useState([]);

    const $modalTransfer = React.createRef();
    const $modalSuivi = React.createRef();
    const $modalImputation = React.createRef();

    let $ = window.$;

    let params = useParams();
    let history = useHistory();

    React.useEffect(() => {
        (async () => {
            try {
                let { courrier, roles } = await getCourrier({
                    data: {
                        courrier: params.courrier
                    }
                });
                setFile(courrier);
                setRoles(roles);
            } catch (err) {
                console.log(err);
                //history.replace("/courriers");
            }
        })();

        $('[data-toggle="tooltip"]').tooltip();
    }, [getCourrier, params.courrier]);

    React.useEffect(() => {
        const modalSuivi = $($modalSuivi.current);
        const modalImputation = $($modalImputation.current);
        const modalTransfer = $($modalTransfer.current);

        const onHideSuiv = function() {
            $(".floating_action_buttons").css("right", "20px");
            $(".modal-backdrop").remove();
        };

        const onShowSuiv = async function() {
            $(".floating_action_buttons").css({
                right: "-2020px",
                transition: "0.5s"
            });

            try {
                const { tracks } = await getTracks({
                    data: { courrier_id: params.courrier }
                });
                setOperations(
                    tracks.sort((t1, t2) =>
                        t1.id < t2.id ? 1 : t1.id === t2.id ? 0 : -1
                    )
                );
            } catch (err) {
                console.log(err);
            }
        };

        if (!isLoading && isSuccess) {
            const onShowTrans = function() {
                $(".floating_action_buttons").css({
                    right: "-2020px",
                    transition: "0.5s"
                });
            };

            modalTransfer.on("show.bs.modal", onShowTrans);

            modalSuivi.on("show.bs.modal", onShowSuiv);

            modalSuivi.on("hidden.bs.modal", onHideSuiv);

            function onHideTrans() {
                setAnnotations({});
                $(this)
                    .find("li.chosen")
                    .removeClass("chosen");
                $(".floating_action_buttons").css("right", "20px");
            }

            modalTransfer.on("hidden.bs.modal", onHideTrans);

            const onShowImput = async function() {
                $(".floating_action_buttons").css({
                    right: "-2020px",
                    transition: "0.5s"
                });

                $("#_annoter").show();
                $("#_imputer").hide();
                $("#imputer").css("display", "none");
                $("#imputer")
                    .prev()
                    .show();

                try {
                    const { dir } = await getDirections();
                    setDirections(dir);
                } catch (err) {
                    console.log(err);
                }
            };

            modalImputation.on("show.bs.modal", onShowImput);

            function onHideImput() {
                setAnnotations({});
                setCellules({});
                $(this)
                    .find("li.chosen")
                    .removeClass("chosen");
                $(".floating_action_buttons").css("right", "20px");
                $(".modal-backdrop").css("opacity", 0);
            }

            modalImputation.on("hidden.bs.modal", onHideImput);
        }

        return () => {
            modalImputation.off("hidden.bs.modal");
            modalImputation.off("show.bs.modal");

            modalTransfer.off("show.bs.modal");
            modalTransfer.off("hidden.bs.modal");

            modalSuivi.off("show.bs.modal");
            modalSuivi.off("hidden.bs.modal");
        };
    }, [
        $modalSuivi,
        $modalImputation,
        $modalTransfer,
        isLoading,
        isSuccess,
        getTracks,
        setCellules,
        setOperations,
        setAnnotations
    ]);

    const openTransferModal = React.useCallback(() => {
        $($modalTransfer.current).modal({
            backdrop: "static",
            keyboard: false
        });
    }, [$modalTransfer]);

    const openImputeModal = React.useCallback(() => {
        $($modalImputation.current).modal({
            backdrop: "static",
            keyboard: false
        });
    }, [$modalImputation]);

    function normalize(h) {
        return `${h > 10 ? "" : "0"}${h}`;
    }

    function normalizeRef(reference) {
        return reference < 10
            ? `00000${reference}`
            : reference < 100
            ? `0000${reference}`
            : reference < 1000
            ? `000${reference}`
            : reference < 10000
            ? `00${reference}`
            : reference < 100000
            ? `0${reference}`
            : reference;
    }

    // Valider au niveau supérieur.
    const handleTransferTo = React.useCallback(async () => {
        console.log("Selected Annotations", SelectedAnnotations);

        let annotation = Object.values(SelectedAnnotations)
            .filter(a => a !== false)
            .join("$$");

        try {
            const { message } = await transferTo({
                data: { courrier_id: params.courrier, annotation }
            });

            await Swal.fire({
                position: "top-end",
                icon: "success",
                title: message,
                showConfirmButton: false,
                timer: 4000
            });
            $(".modal-backdrop").css("opacity", 0);
            $($modalTransfer.current).modal("hide");
            history.push(`/courriers`);
        } catch (err) {
        } finally {
            $(".floating_action_buttons").css("right", "20px");
        }
    }, [SelectedAnnotations, transferTo, params.courrier]);

    const selectAnnot = React.useCallback(
        e => {
            let noeud = $(e.target).parent();
            let index = noeud.data("index");
            noeud.toggleClass("chosen");
            SelectedAnnotations[index] = noeud.hasClass("chosen")
                ? ANNOTATIONS[index]
                : false;
            setAnnotations({ ...SelectedAnnotations });
        },
        [SelectedAnnotations]
    );

    const selectCel = React.useCallback(
        e => {
            let noeud = $(e.target).parent();
            let index = noeud.data("index");
            noeud.toggleClass("chosen");
            SelectedCellules[index] = noeud.hasClass("chosen")
                ? directions.find(d => d.id == index)?.id
                : false;
            setCellules({ ...SelectedCellules });
        },
        [SelectedCellules, directions]
    );

    // Valider le courrier.
    const validate = React.useCallback(
        async (etat, text) => {
            try {
                const { message } = await validateOrReject({
                    data: {
                        courrier_id: params.courrier,
                        etat,
                        observation: text
                    }
                });

                await Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: message,
                    showConfirmButton: false,
                    timer: 4000
                });
                history.replace("/courriers");
            } catch (err) {
                console.log(err);
            } finally {
                $(".floating_action_buttons").css("right", "20px");
            }
        },
        [params.courrier, validateOrReject]
    );

    // Imputer le courrier.
    const handleImputeTo = React.useCallback(async () => {
        let annotation = Object.values(SelectedAnnotations)
            .filter(a => a !== false)
            .join("$$");

        let directions = Object.values(SelectedCellules)
            .filter(d => d !== false)
            .join("$");

        try {
            const { message } = await imputeTo({
                data: { courrier_id: params.courrier, annotation, directions }
            });
            await Swal.fire({
                position: "top-end",
                icon: "success",
                title: message,
                showConfirmButton: false,
                timer: 4000
            });
            $(".modal-backdrop").css("opacity", 0);
            $($modalImputation.current).modal("hide");
            history.replace("/courriers");
        } catch (err) {
            console.log(err);
        } finally {
            $(".floating_action_buttons").css("right", "20px");
        }
    }, [SelectedCellules, SelectedAnnotations, imputeTo, params.courrier]);

    const showImpute = React.useCallback(e => {
        $(e.target).hide();
        $("#imputer").css("display", "");
        $("#_annoter").hide();
        $("#_imputer").show();
    }, []);

    // Responsable du service courrier qui valide le courrier.
    const validateCourrier = React.useCallback(
        e => {
            Swal.fire({
                title: "Veuillez confirmer",
                text:
                    "Vous êtes sur le point de valider ce courrier et de le transmettre directement au Sécrétaire Général Adjoint. Cette opération est irréversible, êtes-vous sûr de vouloir continuer ?",
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: `Oui, valider`,
                cancelButtonText: `Non`,
                icon: "question"
            }).then(result => {
                if (result.isConfirmed) {
                    validate("VALIDE");
                }
            });
        },
        [validate]
    );

    // Retourner le courrier.
    const returnTo = React.useCallback(async () => {
        $(".floating_action_buttons").css({
            right: "-2020px",
            transition: "0.5s"
        });
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputLabel: "Raison",
            inputPlaceholder: "Veuillez indiquer la raison du renvoi",
            inputAttributes: {
                "aria-label": "Veuillez indiquer la raison du renvoi"
            },
            showCancelButton: true
        });
        validate("RETOURNE", text);
    }, [validate]);

    // Renvoyer le courrier pour correction.
    const invalidate = React.useCallback(async () => {
        try {
            $(".floating_action_buttons").css({
                right: "-2020px",
                transition: "0.5s"
            });
            const { value: text } = await Swal.fire({
                input: "textarea",
                inputLabel: "Raison",
                inputPlaceholder: "Veuillez indiquer la raison du renvoi",
                inputAttributes: {
                    "aria-label": "Veuillez indiquer la raison du renvoi"
                },
                showCancelButton: true
            });
            validate("RENVOYE", text);
        } catch (err) {
            console.log(err);
        }
    }, [validate]);

    // Rejeter le courrier.
    const reject = React.useCallback(async () => {
        $(".floating_action_buttons").css({
            right: "-2020px",
            transition: "0.5s"
        });
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputLabel: "Raison",
            inputPlaceholder: "Veuillez indiquer la raison du rejet",
            inputAttributes: {
                "aria-label": "Veuillez indiquer la raison du rejet"
            },
            showCancelButton: true
        });

        // if (text) {
        // 	Swal.fire(text)
        // }
        validate("REJETE", text);
    }, [validate]);

    const terminate = React.useCallback(async () => {
        $(".floating_action_buttons").css({
            right: "-2020px",
            transition: "0.5s"
        });

        let { isConfirmed } = await Swal.fire({
            title: "Veuillez confirmer",
            text:
                "Vous êtes sur le point de vous désigner comme le destinataire final de ce courrier. Il ne vous sera plus possible de le transférer ou de l'imputer. Êtes-vous sûr de vouloir continuer ?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: `Oui, terminer`,
            cancelButtonText: `Non`,
            icon: "question"
        });

        if (isConfirmed) {
            try {
                const { message } = await terminateIncoming({
                    data: { courrier_id: params.courrier }
                });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: message,
                    showConfirmButton: false,
                    timer: 4000
                });
                history.replace("/courriers");
            } catch (err) {
                console.log(err);
            } finally {
                $(".floating_action_buttons").css("right", "20px");
            }
        } else {
            $(".floating_action_buttons").css("right", "20px");
        }
    }, [terminateIncoming, params.courrier]);

    const openStatsModal = React.useCallback(() => {
        $($modalSuivi.current).modal({
            backdrop: "static",
            keyboard: false
        });
    }, [$modalSuivi]);

    return isLoading || !file ? (
        <Loader normal="50px" />
    ) : (
        <>
            <div className="d-flex flex-column align-items-center">
                <div className="col-md-10 pl-2 bg-gray position-relative">
                    {file.url_fichier.substr(-4).toLowerCase() != ".pdf" ? (
                        <img
                            src={file.url_fichier.replace(
                                /^public/,
                                "/storage"
                            )}
                            width="100%"
                            height="auto"
                        />
                    ) : (
                        <PDF
                            url={file.url_fichier.replace(
                                /^public/,
                                "/storage"
                            )}
                            pagination={true}
                        />
                    )}
                </div>

                <div
                    className="floating_action_buttons d-flex flex-column align-items-end"
                    style={{
                        position: "fixed",
                        zIndex: 999990,
                        right: "20px",
                        top: "40%"
                    }}
                >
                    {(user.role.privileges.some(privilege =>
                        STAT_COURRIER.includes(privilege)
                    ) ||
                        file.etat == "IMPUTE") && (
                        <div className="button d-flex align-items-center mb-3">
                            <h5
                                className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
                                style={{ maxWidth: "300px" }}
                            >
                                STATISTIQUES
                            </h5>
                            <button
                                onClick={openStatsModal}
                                type="button"
                                className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
                            >
                                <i className="ti-stats-up" />
                            </button>
                        </div>
                    )}
                    {file.statut === "OUVERT" && (
                        <>
                            {(user.role.grade == file.etape_actuelle ||
                                file.etat == "IMPUTE") && (
                                <>
                                    {user.role.privileges.some(privilege =>
                                        TRANSM_COURRIER.includes(privilege)
                                    ) && (
                                        <div className="button d-flex align-items-center mb-3">
                                            <h5
                                                className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
                                                style={{ maxWidth: "300px" }}
                                            >
                                                ENVOYER AU{" "}
                                                {
                                                    roles?.find(
                                                        r =>
                                                            r.grade ===
                                                            user.role.grade + 1
                                                    )?.description
                                                }
                                            </h5>
                                            <button
                                                onClick={openTransferModal}
                                                type="button"
                                                className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
                                            >
                                                <i className="ti-new-window" />
                                            </button>
                                        </div>
                                    )}

                                    {user.role.privileges.some(privilege =>
                                        IMPUT_COURRIER.includes(privilege)
                                    ) && (
                                        <div className="button d-flex align-items-center mb-3">
                                            <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">
                                                IMPUTER AUX CELLULES
                                            </h5>
                                            <button
                                                onClick={openImputeModal}
                                                type="button"
                                                className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
                                            >
                                                <i className="ti-share" />
                                            </button>
                                        </div>
                                    )}

                                    {user.role.privileges.some(privilege =>
                                        RENVOI_ENVOYEUR.includes(privilege)
                                    ) && (
                                        <div className="button d-flex align-items-center mb-3">
                                            <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">
                                                RENVOYER AU BUREAU D'ORDRE
                                            </h5>
                                            <button
                                                type="button"
                                                onClick={returnTo}
                                                className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
                                            >
                                                <i className="ti-back-left" />
                                            </button>
                                        </div>
                                    )}

                                    {(user.role.privileges.some(privilege =>
                                        TERM_COURRIER.includes(privilege)
                                    ) ||
                                        file.etat == "IMPUTE") && (
                                        <div className="button d-flex align-items-center mb-3">
                                            <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">
                                                TERMINER
                                            </h5>
                                            <button
                                                type="button"
                                                onClick={terminate}
                                                className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
                                            >
                                                <i className="ti-download" />
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}

                            {user.role.privileges.some(privilege =>
                                VALID_REJET.includes(privilege)
                            ) &&
                                file.etat === "ATTENTE" && (
                                    <>
                                        <div className="button d-flex align-items-center mb-3">
                                            <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">
                                                VALIDER LE COURRIER
                                            </h5>
                                            <button
                                                type="button"
                                                onClick={validateCourrier}
                                                className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
                                            >
                                                <i className="ti-stats-up" />
                                            </button>
                                        </div>
                                        <div className="button d-flex align-items-center mb-3">
                                            <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">
                                                RENVOYER LE COURRIER
                                            </h5>
                                            <button
                                                type="button"
                                                onClick={invalidate}
                                                className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
                                            >
                                                <i className="ti-back-left" />
                                            </button>
                                        </div>
                                        <div className="button d-flex align-items-center mb-3">
                                            <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">
                                                REJETER LE COURRIER
                                            </h5>
                                            <button
                                                onClick={reject}
                                                type="button"
                                                className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
                                            >
                                                <i className="ti-trash" />
                                            </button>
                                        </div>
                                    </>
                                )}
                        </>
                    )}
                </div>
            </div>
            <div
                className="modal slide"
                id="ModalTransfer"
                ref={$modalTransfer}
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                    style={{ minWidth: "80%" }}
                >
                    <div
                        className="modal-content"
                        style={{ minHeight: "80vh" }}
                    >
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalCenterTitle"
                            >
                                <b>Observations / Instructions</b>
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti-close" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <p className="col-12">
                                    Cliquez pour cocher les options à joindre au
                                    courrier
                                </p>
                                <div
                                    className="row col-12"
                                    style={{ width: "100%" }}
                                >
                                    <ul
                                        className="annotations col-6"
                                        style={{
                                            height: "40vh",
                                            overflow: "auto"
                                        }}
                                    >
                                        {ANNOTATIONS.slice(
                                            0,
                                            ANNOTATIONS.length / 2
                                        ).map((annotation, index) => (
                                            <li
                                                key={index + 1}
                                                data-index={index}
                                                className={
                                                    Object.keys(
                                                        SelectedAnnotations
                                                    ).includes(index)
                                                        ? "chosen"
                                                        : ""
                                                }
                                                onClick={selectAnnot}
                                            >
                                                <span className="text">
                                                    {annotation}
                                                </span>
                                                <div className="custom-control green custom-checkbox d-inline">
                                                    <input
                                                        type="checkbox"
                                                        data-index={index}
                                                        data-text={annotation}
                                                        className="custom-control-input"
                                                        id="customCheck-unselected"
                                                        checked={false}
                                                        onClick={selectAnnot}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck-unselected"
                                                    ></label>
                                                </div>
                                                <div className="custom-control light d-inline custom-checkbox custom-checkbox-dark">
                                                    <input
                                                        type="checkbox"
                                                        data-index={index}
                                                        data-text={annotation}
                                                        className="custom-control-input"
                                                        id="customCheck6-selected"
                                                        checked={true}
                                                        onClick={selectAnnot}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck6-selected"
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul
                                        className="annotations col-6"
                                        style={{
                                            height: "40vh",
                                            overflow: "auto"
                                        }}
                                    >
                                        {ANNOTATIONS.slice(
                                            ANNOTATIONS.length / 2,
                                            ANNOTATIONS.length
                                        ).map((annotation, index) => (
                                            <li
                                                data-index={
                                                    ANNOTATIONS.length / 2 +
                                                    index
                                                }
                                                className={
                                                    Object.keys(
                                                        SelectedAnnotations
                                                    ).includes(index)
                                                        ? "chosen"
                                                        : ""
                                                }
                                                style={{
                                                    marginLeft: "20px",
                                                    pointerEvents: isSending
                                                        ? "none"
                                                        : ""
                                                }}
                                                onClick={selectAnnot}
                                            >
                                                <span className="text">
                                                    {annotation}
                                                </span>
                                                <div className="custom-control green custom-checkbox d-inline">
                                                    <input
                                                        type="checkbox"
                                                        data-index={index}
                                                        data-text={annotation}
                                                        className="custom-control-input"
                                                        id="customCheck-unselected"
                                                        checked={false}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck-unselected"
                                                    ></label>
                                                </div>
                                                <div className="custom-control light d-inline custom-checkbox custom-checkbox-dark">
                                                    <input
                                                        type="checkbox"
                                                        data-index={index}
                                                        data-text={annotation}
                                                        className="custom-control-input"
                                                        id="customCheck6-selected"
                                                        checked={true}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck6-selected"
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </form>
                            <div
                                className="d-flex justify-content-end"
                                style={{ width: "100%", paddingRight: "20px" }}
                            >
                                <button
                                    type="button"
                                    disabled={isSending}
                                    className="btn btn-lg btn-outline-light"
                                    data-dismiss="modal"
                                >
                                    Annuler l'envoi du courrier
                                </button>
                                <button
                                    type="button"
                                    onClick={handleTransferTo}
                                    className={`btn ml-2 mr-5 btn-outline-primary btn-lg`}
                                    disabled={isSending}
                                >
                                    {isSending ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm mr-2"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        "Envoyer avec le courrier"
                                    )}
                                </button>
                                {/* <button
                                    type="button"
                                    onClick={handleTransferTo}
                                    className="ml-2 mr-5 btn btn-lg btn-primary"
                                >
                                    Envoyer avec le courrier
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="ModalImputation"
                ref={$modalImputation}
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                    style={{ minWidth: "80%" }}
                >
                    <div
                        className="modal-content"
                        style={{ minHeight: "80vh" }}
                    >
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalCenterTitle"
                            >
                                <b>Observations / Instructions</b>
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti-close" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="_annoter">
                                <p className="col-12">
                                    <h3 className="m-0 p-0">
                                        Cliquez pour cocher les options à
                                        joindre au courrier
                                    </h3>
                                    <small>
                                        <b>
                                            Vous pouvez aussi directement
                                            valider sans annoter
                                        </b>
                                    </small>
                                </p>
                                <div
                                    className="row"
                                    style={{ width: "70%", margin: "auto" }}
                                >
                                    <ul
                                        className="annotations col-6"
                                        style={{
                                            height: "40vh",
                                            overflow: "auto"
                                        }}
                                    >
                                        {ANNOTATIONS.slice(
                                            0,
                                            ANNOTATIONS.length / 2
                                        ).map((annotation, index) => (
                                            <li
                                                key={index + 1}
                                                data-index={index}
                                                className={
                                                    Object.keys(
                                                        SelectedAnnotations
                                                    ).includes(index)
                                                        ? "chosen"
                                                        : ""
                                                }
                                                onClick={selectAnnot}
                                            >
                                                <span className="text">
                                                    {annotation}
                                                </span>
                                                <div className="custom-control green custom-checkbox d-inline">
                                                    <input
                                                        type="checkbox"
                                                        data-index={index}
                                                        data-text={annotation}
                                                        className="custom-control-input"
                                                        id="customCheck-unselected"
                                                        checked={false}
                                                        onClick={selectAnnot}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck-unselected"
                                                    ></label>
                                                </div>
                                                <div className="custom-control light d-inline custom-checkbox custom-checkbox-dark">
                                                    <input
                                                        type="checkbox"
                                                        data-index={index}
                                                        data-text={annotation}
                                                        className="custom-control-input"
                                                        id="customCheck6-selected"
                                                        checked={true}
                                                        onClick={selectAnnot}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck6-selected"
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul
                                        className="annotations col-6"
                                        style={{
                                            height: "40vh",
                                            overflow: "auto"
                                        }}
                                    >
                                        {ANNOTATIONS.slice(
                                            ANNOTATIONS.length / 2,
                                            ANNOTATIONS.length
                                        ).map((annotation, index) => (
                                            <li
                                                data-index={
                                                    ANNOTATIONS.length / 2 +
                                                    index
                                                }
                                                className={
                                                    Object.keys(
                                                        SelectedAnnotations
                                                    ).includes(index)
                                                        ? "chosen"
                                                        : ""
                                                }
                                                style={{
                                                    marginLeft: "20px"
                                                }}
                                                onClick={selectAnnot}
                                            >
                                                <span className="text">
                                                    {annotation}
                                                </span>
                                                <div className="custom-control green custom-checkbox d-inline">
                                                    <input
                                                        type="checkbox"
                                                        data-index={index}
                                                        data-text={annotation}
                                                        className="custom-control-input"
                                                        id="customCheck-unselected"
                                                        checked={false}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck-unselected"
                                                    ></label>
                                                </div>
                                                <div className="custom-control light d-inline custom-checkbox custom-checkbox-dark">
                                                    <input
                                                        type="checkbox"
                                                        data-index={index}
                                                        data-text={annotation}
                                                        className="custom-control-input"
                                                        id="customCheck6-selected"
                                                        checked={true}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck6-selected"
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </form>

                            <form id="_imputer" style={{ height: "100%" }}>
                                {isGettingDirections ? (
                                    <div
                                        className="spinner-border spinner-border-sm"
                                        title="Chargement en cours, veuillez patienter !"
                                        style={{
                                            color: "orange",
                                            width: "50px",
                                            height: "50px",
                                            margin: "20% auto",
                                            display: "block"
                                        }}
                                        role="status"
                                    >
                                        <span className="sr-only">
                                            Chargement en cours ...
                                        </span>
                                    </div>
                                ) : (
                                    <>
                                        <p className="col-12">
                                            <h3 className="m-0 p-0">
                                                Cliquez pour sélectionner les
                                                cellules hôtes
                                            </h3>
                                        </p>
                                        <div
                                            className="row"
                                            style={{
                                                width: "70%",
                                                margin: "auto"
                                            }}
                                        >
                                            <ul
                                                className="annotations col-6"
                                                style={{
                                                    height: "40vh",
                                                    overflow: "auto"
                                                }}
                                            >
                                                {directions
                                                    .slice(
                                                        0,
                                                        Math.ceil(
                                                            directions.length /
                                                                2
                                                        )
                                                    )
                                                    .map((cellule, index) => (
                                                        <li
                                                            key={index + 1}
                                                            data-index={
                                                                cellule.id
                                                            }
                                                            className=""
                                                            onClick={selectCel}
                                                        >
                                                            <span className="text">
                                                                {cellule.nom}
                                                            </span>
                                                            <div className="custom-control green custom-checkbox d-inline">
                                                                <input
                                                                    type="checkbox"
                                                                    className="custom-control-input"
                                                                    id="customCheck-unselected"
                                                                    checked={
                                                                        false
                                                                    }
                                                                    onChange={
                                                                        selectCel
                                                                    }
                                                                />
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor="customCheck-unselected"
                                                                ></label>
                                                            </div>
                                                            <div className="custom-control light d-inline custom-checkbox custom-checkbox-dark">
                                                                <input
                                                                    type="checkbox"
                                                                    className="custom-control-input"
                                                                    id="customCheck6-selected"
                                                                    checked={
                                                                        true
                                                                    }
                                                                    onClick={
                                                                        selectCel
                                                                    }
                                                                />
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor="customCheck6-selected"
                                                                />
                                                            </div>
                                                        </li>
                                                    ))}
                                            </ul>
                                            <ul
                                                className="annotations col-6"
                                                style={{
                                                    height: "40vh",
                                                    overflow: "auto"
                                                }}
                                            >
                                                {directions
                                                    .slice(
                                                        Math.ceil(
                                                            directions.length /
                                                                2
                                                        ),
                                                        directions.length
                                                    )
                                                    .map((cellule, index) => (
                                                        <li
                                                            data-index={
                                                                cellule.id
                                                            }
                                                            className=""
                                                            style={{
                                                                marginLeft:
                                                                    "20px"
                                                            }}
                                                            onClick={selectCel}
                                                        >
                                                            <span className="text">
                                                                {cellule.nom}
                                                            </span>
                                                            <div className="custom-control green custom-checkbox d-inline">
                                                                <input
                                                                    type="checkbox"
                                                                    className="custom-control-input"
                                                                    id="customCheck-unselected"
                                                                    checked={
                                                                        false
                                                                    }
                                                                />
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor="customCheck-unselected"
                                                                ></label>
                                                            </div>
                                                            <div className="custom-control light d-inline custom-checkbox custom-checkbox-dark">
                                                                <input
                                                                    type="checkbox"
                                                                    className="custom-control-input"
                                                                    id="customCheck6-selected"
                                                                    checked={
                                                                        true
                                                                    }
                                                                />
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor="customCheck6-selected"
                                                                />
                                                            </div>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </form>

                            <div
                                className="d-flex justify-content-end"
                                style={{ width: "100%", paddingRight: "20px" }}
                            >
                                <button
                                    type="button"
                                    disabled={isImputing}
                                    className="btn btn-lg btn-light"
                                    data-dismiss="modal"
                                >
                                    Annuler l'imputation du courrier
                                </button>
                                <button
                                    type="button"
                                    disabled={isImputing}
                                    onClick={showImpute}
                                    className="ml-2 mr-5 btn btn-lg btn-primary"
                                >
                                    Sélectionner les cellules
                                </button>
                                <button
                                    type="button"
                                    id="imputer"
                                    style={{ display: "none" }}
                                    onClick={handleImputeTo}
                                    className={`btn ml-2 mr-5 btn-outline-primary btn-lg`}
                                    disabled={
                                        isSending ||
                                        Object.values(SelectedCellules).filter(
                                            v => v !== false
                                        ).length == 0
                                    }
                                >
                                    {isImputing ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm mr-2"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Validation...
                                        </>
                                    ) : (
                                        "Imputer le courrier"
                                    )}
                                </button>
                                {/* <button
                                    type="button"
                                    id="imputer"
                                    onClick={handleImputeTo}
                                    className="d-none ml-2 mr-5 btn btn-lg btn-primary"
                                >
                                    Valider
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="ModalSuivi"
                ref={$modalSuivi}
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                    style={{ minWidth: "80%" }}
                >
                    <div
                        className="modal-content"
                        style={{ minHeight: "80vh" }}
                    >
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalCenterTitle"
                            >
                                <b>Suivi du courrier</b>
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti-close" />
                            </button>
                        </div>
                        <div className="modal-body">
                            {isGettingOperations ? (
                                <div
                                    className="spinner-border spinner-border-sm"
                                    title="Chargement en cours, veuillez patienter !"
                                    style={{
                                        color: "orange",
                                        width: "50px",
                                        height: "50px",
                                        margin: "20% auto",
                                        display: "block"
                                    }}
                                    role="status"
                                >
                                    <span className="sr-only">
                                        Chargement en cours ...
                                    </span>
                                </div>
                            ) : (
                                <>
                                    <p>
                                        <h3>Historique des opérations</h3>
                                    </p>
                                    <div className="col-12">
                                        <div className="table-responsive pr-4">
                                            <table
                                                id="table-files"
                                                className="table table-borderless table-hover"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>N° d'ordre</th>
                                                        <th>Opération</th>
                                                        <th>Détails</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {operations.map(
                                                        (operation, index) => (
                                                            <tr key={index + 1}>
                                                                <td>
                                                                    <b>
                                                                        {/* {normalizeRef(
                                                                            operation
                                                                                .courrier
                                                                                .reference
                                                                        )}
                                                                        /
                                                                        {new Date(
                                                                            operation.courrier.created_at
                                                                        ).getFullYear()} */}
                                                                        {normalize(
                                                                            new Date(
                                                                                operation.created_at
                                                                            ).getDate()
                                                                        )}
                                                                        /
                                                                        {normalize(
                                                                            new Date(
                                                                                operation.created_at
                                                                            ).getMonth() +
                                                                                1
                                                                        )}
                                                                        /
                                                                        {new Date(
                                                                            operation.created_at
                                                                        ).getFullYear()}
                                                                        ,{" "}
                                                                        {normalize(
                                                                            new Date(
                                                                                operation.created_at
                                                                            ).getHours()
                                                                        )}
                                                                        :
                                                                        {normalize(
                                                                            new Date(
                                                                                operation.created_at
                                                                            ).getMinutes()
                                                                        )}
                                                                    </b>
                                                                </td>
                                                                <td>
                                                                    <Link
                                                                        to="#/"
                                                                        className="d-flex align-items-center"
                                                                    >
                                                                        <figure className="avatar avatar-sm mr-3">
                                                                            <span className="avatar-title bg-warning text-black-50 rounded-pill">
                                                                                <i className="ti-folder" />
                                                                            </span>
                                                                        </figure>
                                                                        <span className="d-flex flex-column">
                                                                            <span className="text-primary">
                                                                                {
                                                                                    operation.description
                                                                                }
                                                                            </span>
                                                                            <span className="small font-italic">
                                                                                {
                                                                                    operation.user
                                                                                }
                                                                            </span>
                                                                        </span>
                                                                    </Link>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        display:
                                                                            "block",
                                                                        height:
                                                                            "auto",
                                                                        overflow:
                                                                            "hidden",
                                                                        whiteSpace:
                                                                            "wrap",
                                                                        maxWidth:
                                                                            "250px"
                                                                    }}
                                                                >
                                                                    {
                                                                        operation.donnees
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
