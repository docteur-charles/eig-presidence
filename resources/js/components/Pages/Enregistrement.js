import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import FileInput from "../Components/FileInput";
import PDF from "../Components/PDF";
import { getToken, manageResponse } from "../Helpers/Func";
import {
    fromDesktop,
    fromLarge,
    fromTablet,
    fromExtraLarge,
    isExtraLarge
} from "../Helpers/Layout";

export default function Enregistrement() {
    let [preview, setPreview] = useState(false);
    let [register, setRegister] = useState(false);
    let [isLoading, setLoading] = useState(false);
    let [file, setFile] = useState(null);
    let [dataURL, setDataURL] = useState(null);

    let $ = window.$;
    let swal = window.swal;

    let history = useHistory();
    const dispatch = useDispatch();

    function onFileLoaded(f, data) {
        setFile(f);
        setDataURL(data);
    }

    function onFileExtensionNotMatch() {
        window.toastr["error"](
            "Ce type de fichier n'est pas valide !",
            "Fichier non gérée"
        );
    }

    function showPreview() {
        if (file) setPreview(true);
    }

    function showRegisterForm() {
        if (preview) {
            setRegister(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        let formData = new FormData(e.target);
        getToken().then(async token => {
            let response = await fetch("/registerIncoming", {
                method: "POST",
                headers: {
                    Accept: "Application/json",
                    "X-CSRF-TOKEN": token
                },
                body: formData
            }).then(async res => ({
                status: res.status,
                ...(await res.json())
            }));
            setLoading(false);
            if (response.success) {
                swal(
                    "Enregistrement terminé",
                    response.message,
                    "success"
                ).then(() => {
                    swal.close();
                    history.push(`/courriers/${response.courrier}`);
                });
            } else {
                manageResponse(response, dispatch);
            }
        });
    }

    useEffect(() => {
        $(window).scrollTop(0);

        if (preview && !register) {
            setTimeout(() => {
                $(".button-continue").css("top", "40px");
            }, 1000);
        } else if (register) {
            $(".select2-courrier").select2({
                placeholder: "Sélectionnez un type de courrier"
            });

            $(".select2-contenu").select2({
                placeholder: "Sélectionnez un type de contenu"
            });

            $(".select2-mention").select2({
                placeholder: "Sélectionnez une mention"
            });
        }
    }, [preview, register]);

    // useEffect(() => {
    //     $(".header.d-print-none").css("z-index", "99999");
    //     return () => $(".header.d-print-none").css("z-index", "");
    // }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div
                style={{ display: !preview && !register ? "" : "none" }}
                className="mt-3 mt-lg-4 mt-xl-5 col-8 offset-2"
            >
                <h4 className="text-center text-warning text-uppercase mb-3">
                    <Link to="">
                        <img
                            src="/assets/images/logo_transparent.png"
                            width="200px"
                            alt="logo"
                        />
                    </Link>
                </h4>
                <FileInput
                    onLoaded={onFileLoaded}
                    name="courrier"
                    onExtensionNotMatch={onFileExtensionNotMatch}
                />
                <div className="row m-t-25 m-b-25 justify-content-center">
                    <button
                        type="button"
                        onClick={showPreview}
                        className="btn col-4 btn-warning btn-uppercase p-3 justify-content-center btn-rounded"
                    >
                        <i className="ti-plus mr-2"></i>Enregistrer le courrier
                    </button>
                </div>
            </div>
            {preview && !register ? (
                <div className="container-fluid row position-relative align-items-center justify-content-center">
                    <div
                        className="button-continue shadow d-flex justify-content-end align-items-start"
                        style={{
                            padding: "20px",
                            transition: "all .5s",
                            background: "#fff",
                            border: "2px solid orange",
                            zIndex: 999999,
                            position: "fixed",
                            top: "-1090px",
                            width: `calc(100% - ${fromLarge() ? 170 : 60}px)`
                        }}
                    >
                        <p
                            className={`${
                                fromDesktop() ? "font-size-20" : "font-size-18"
                            }`}
                        >
                            Ceci est un apperçu de votre courrier. Vous pouvez
                            naviguer avec les boutons situés en dessous du
                            conteneur ou cliquer sur le bouton suivant pour
                            continuer l'enregistrement.
                        </p>
                        <button
                            type="button"
                            onClick={showRegisterForm}
                            className="col-5 m-l-40 p-15 m-r-40 col-md-3 col-xl-2 btn btn-outline-primary btn-block"
                        >
                            CONTINUER
                        </button>
                    </div>
                    <div className="col-md-10 pl-2">
                        {file.type !== "application/pdf" ? (
                            <img
                                src={dataURL}
                                width="100%"
                                height="auto"
                                style={{ display: "inline-block" }}
                            />
                        ) : (
                            <PDF
                                url={
                                    dataURL /* || '/documents/cahier_de_charges.pdf' */
                                }
                                pagination={true}
                            />
                        )}
                    </div>
                </div>
            ) : !register ? (
                ""
            ) : (
                <div
                    className={`row col-12 ${
                        fromExtraLarge()
                            ? isExtraLarge()
                                ? "col-lg-5"
                                : "col-lg-4"
                            : "col-md-7"
                    } m-auto text-align-center mb-1 card`}
                >
                    <div
                        className={`card-header ${
                            fromDesktop() ? "p-40 font-size-25" : "font-size-18"
                        } d-flex flex-column text-center text-uppercase`}
                    >
                        Enregistrement du courrier
                        <small className="font-size-20">
                            N° <span className="text-info">09230/2020</span>
                        </small>
                    </div>
                    <div className={`card-body ${fromDesktop() ? "p-40" : ""}`}>
                        <div>
                            <div className="row">
                                <div className="form-group col-12 col-md-6">
                                    <label>Type de contenu</label>
                                    <select
                                        required
                                        name="type_contenu"
                                        defaultValue=""
                                        className="select2-contenu"
                                    >
                                        <option value="" disabled>
                                            Sélectionnez un type
                                        </option>
                                        <option value="LETTRE_ORDINAIRE">
                                            Lettre ordinaire
                                        </option>
                                        <option value="LETTRE_DU_PRESIDENT">
                                            Lettre du Président
                                        </option>
                                        <option value="ARRETE">Arrêté</option>
                                        <option value="BORDEREAU_DENVOI">
                                            Bordéreau d'envoi
                                        </option>
                                        <option value="DECISION">
                                            Décision
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label>Type de courrier</label>
                                    <select
                                        required
                                        name="type_courrier"
                                        defaultValue=""
                                        className="select2-courrier"
                                    >
                                        <option value="" disabled>
                                            Sélectionnez un type
                                        </option>
                                        <option value="ENTRANT">Entrant</option>
                                        <option value="SORTANT">Sortant</option>
                                        <option value="INTERNE">Interne</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Objet</label>
                                <input
                                    type="text"
                                    required
                                    name="objet"
                                    className="form-control"
                                    placeholder="Objet du courrier"
                                />
                            </div>
                            <div className="row">
                                <div className="form-group col-12 col-md-7">
                                    <label>Origine</label>
                                    <input
                                        type="text"
                                        required
                                        name="origine"
                                        className="form-control"
                                        placeholder="Provénance du courrier"
                                    />
                                </div>
                                <div className="form-group col-12 col-md-5">
                                    <label>Mention du courrier</label>
                                    <select
                                        required
                                        name="mention"
                                        className="select2-mention"
                                        multiple
                                    >
                                        <option value="ORDINAIRE">
                                            Ordinaire
                                        </option>
                                        <option value="CONFIDENTIEL">
                                            Confidentiel
                                        </option>
                                        <option value="URGENT">Urgent</option>
                                        <option value="TRES_URGENT">
                                            Très urgent
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div
                                className={`d-flex align-items-start m-t-20 ${
                                    !fromTablet() ? "flex-column" : ""
                                }`}
                            >
                                <p>
                                    Vous êtes garant de l'exactitude des
                                    informations que vous renseignez; elles
                                    doivent figurer sur le courrier physique.
                                </p>

                                <button
                                    type="submit"
                                    className={`btn ${
                                        fromTablet() ? "col-4" : "col-12"
                                    } btn-outline-primary btn-lg btn-block`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm mr-2"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Enregisrement...
                                        </>
                                    ) : (
                                        "Enregister"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}
