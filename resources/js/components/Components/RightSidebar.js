import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RightSidebar() {
	let $ = window.$;

	let stats = useSelector(state => state.stats);
	
    function openModal() {
        $("#SendCourrier").modal({
            backdrop: "static",
            keyboard: false
        });
    }

    function initWizard() {
        $("#steps").steps({
            headerTag: "h3",
            bodyTag: "section",
            autoFocus: true,
            titleTemplate: '<span class="wizard-index">#index#</span> #title#'
        });
    }

    useEffect(() => {
		initWizard();
        $("#SendCourrier").niceScroll();
    }, []);

    return (
        <>
            <div
                className="sidebar-group d-print-none mt-5"
                style={{ zIndex: 1000, marginRight: "6px" }}
            >
                {/* Sidebar - Storage */}
                <div className="sidebar primary-sidebar show" id="storage">
                    <div className="sidebar-header">
                        <h4>Courriers en attente</h4>
                    </div>
                    <div className="sidebar-content">
                        <div id="justgage_five" className="mb-3" />
                        <div>
                            <div className="list-group list-group-flush mb-3">
                                <a
                                    href="index.html#"
                                    className="list-group-item px-0 d-flex align-items-center"
                                >
                                    <div className="mr-3">
                                        <figure className="avatar">
                                            <span className="avatar-title bg-primary-bright text-primary rounded">
                                                <i
                                                    className="fa fa-download"
                                                    style={{ fontSize: 40 }}
                                                />
                                            </span>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p
                                            className="mb-0"
                                            style={{ fontSize: 20 }}
                                        >
                                            Entrants
                                        </p>
                                        {/* <span className="small text-muted">259 Files</span> */}
                                    </div>
                                    <div className=" d-flex align-items-center">
                                        <h3 className="text-primary m-0 p-0">
                                            {stats?.entrants || 0}
                                        </h3>
                                    </div>
                                </a>
                                <a
                                    href="index.html#"
                                    className="list-group-item px-0 d-flex align-items-center"
                                >
                                    <div className="mr-3">
                                        <figure className="avatar">
                                            <span className="avatar-title bg-primary-bright text-primary rounded">
                                                <i
                                                    className="fa fa-window-minimize"
                                                    style={{
                                                        fontSize: 40,
                                                        marginTop: -17
                                                    }}
                                                />
                                            </span>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p
                                            className="mb-0"
                                            style={{ fontSize: 20 }}
                                        >
                                            Internes
                                        </p>
                                        {/* <span className="small text-muted">259 Files</span> */}
                                    </div>
                                    <div className=" d-flex align-items-center">
                                        <h3 className="text-primary m-0 p-0">
                                            {stats?.internes || 0}
                                        </h3>
                                    </div>
                                </a>
                                <a
                                    href="index.html#"
                                    className="list-group-item px-0 d-flex align-items-center"
                                >
                                    <div className="mr-3">
                                        <figure className="avatar">
                                            <span className="avatar-title bg-primary-bright text-primary rounded">
                                                <i
                                                    className="fa fa-upload"
                                                    style={{ fontSize: 40 }}
                                                />
                                            </span>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p
                                            className="mb-0"
                                            style={{ fontSize: 20 }}
                                        >
                                            Sortants
                                        </p>
                                        {/* <span className="small text-muted">259 Files</span> */}
                                    </div>
                                    <div className=" d-flex align-items-center">
                                        <h3 className="text-primary m-0 p-0">
                                            {stats?.sortants || 0}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-footer">
                        <button
                            onClick={openModal}
                            className="btn btn-lg btn-block btn-outline-primary"
                        >
                            <i className="fa fa-cloud-upload mr-3" /> Nouveau
                            courrier
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="SendCourrier"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
                style={{ overflow: "hidden" }}
            >
                <div
                    className="modal-dialog modal-xl modal-dialog-centered"
                    role="document"
                    style={{
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                        marginTop: "1vh",
                        marginBottom: "1vh"
                    }}
                >
                    <div
                        className="modal-content"
                        style={{ maxHeight: "98vh" }}
                    >
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalCenterTitle"
                            >
                                Nouveau courrier
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
                            <div id="steps">
                                <h3>Personal Information</h3>
                                <section className="card card-body border mb-0">
                                    <h5>Personal Information</h5>
                                    <p>
                                        Try the keyboard navigation by clicking
                                        arrow left or right!
                                    </p>
                                </section>
                                <h3>Billing Information</h3>
                                <section className="card card-body border mb-0">
                                    <h5>Billing Information</h5>
                                    <p>Wonderful transition effects.</p>
                                </section>
                                <h3>Payment Details</h3>
                                <section className="card card-body border mb-0">
                                    <h5>Payment Details</h5>
                                    <p>
                                        The next and previous buttons help you
                                        to navigate through your content.
                                    </p>
                                </section>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Fermer
                            </button>
                            <button type="button" className="btn btn-primary">
                                Envoyer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
