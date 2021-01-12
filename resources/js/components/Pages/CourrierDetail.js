import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import PDF from "../Components/PDF";
import {
	IMPUT_COURRIER,
	RENVOI_ENVOYEUR,
	ANNOTATIONS,
	TERM_COURRIER,
	TRANSM_COURRIER,
	VALID_REJET,
	STAT_COURRIER
} from "../Helpers/Const";
import { getToken, manageResponse } from "../Helpers/Func";

import '../Styles/SweetDefault.css';

export default function CourrierDetail() {
	let [file, setFile] = useState(null);
	let [roles, setRoles] = useState(null);
	let [isLoading, setLoading] = useState(true);
	let [isFetching, setFetching] = useState(false);
	let [isSending, setSending] = useState(false);
	let [SelectedCellules, setCellules] = useState({});
	let [directions, setDirections] = useState([]);
	let [operations, setOperations] = useState([]);

	let SelectedAnnotations = {};
	// let SelectedCellules = {};

	let auth = useSelector(state => state.auth);

	let $ = window.$;
	let swal = window.swal;

	let params = useParams();
	let history = useHistory();
	const dispatch = useDispatch();

	function getCourrier(id, token) {
		return fetch("/consultExternalOne", {
			method: "POST",
			headers: {
				Accept: "Application/json",
				"X-CSRF-TOKEN": token,
				"Content-Type": "Application/json"
			},
			body: JSON.stringify({
				courrier: id
			})
		}).then(async res => ({
			status: res.status,
			...(await res.json())
		}));
	}

	function getDirections() {
		return fetch("/getDirectionsList").then(res => res.json());
	}
	async function track() {
		let token = await getToken();
		return fetch("/getOperations", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
				Accept: "Application/json",
				"X-CSRF-TOKEN": token
			},
			body: JSON.stringify({
				courrier_id: params.courrier
			})
		}).then(res => res.json());
	}

	useEffect(() => {
		if (auth) {
			setLoading(true);
			getToken().then(async token => {
				let response = await getCourrier(params.courrier, token);
				if (!response.success) {
					if (~response.message.indexOf('introuvable')) {
						history.replace('/courriers')
					}
					manageResponse(response, dispatch);
					setLoading(false);
				} else {
					setFile(response.courrier);
					setRoles(response.roles);
					setLoading(false);
				}
			});
		}

		$('[data-toggle="tooltip"]').tooltip();
	}, [auth]);

	useEffect(() => {
		$("#ModalTransfer").on("show.bs.modal", function () {
			$(".floating_action_buttons").css({
				right: "-2020px",
				transition: "0.5s"
			});
		});
		$("#ModalSuivi").on("show.bs.modal", function () {
			$(".floating_action_buttons").css({
				right: "-2020px",
				transition: "0.5s"
			});
			setFetching(true);
			track().then(tracks => {
				console.log(tracks);
				setFetching(false);
				setOperations(tracks.sort((t1, t2) => t1.id < t2.id ? 1 : (t1.id === t2.id ? 0 : -1)));
			});
		});
		$("#ModalSuivi").on("hidden.bs.modal", function () {
			$(".floating_action_buttons").css("right", "20px");
		});
		$("#ModalTransfer").on("hidden.bs.modal", function () {
			SelectedAnnotations = {};
			$(this)
				.find("li.chosen")
				.removeClass("chosen");
			$(".floating_action_buttons").css("right", "20px");
		});
		$("#ModalImputation").on("show.bs.modal", function () {
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
			setFetching(true);
			getDirections().then(dir => {
				setFetching(false);
				setDirections(dir);
			});
		});
		$("#ModalImputation").on("hidden.bs.modal", function () {
			SelectedAnnotations = {};
			setCellules({});
			$(this)
				.find("li.chosen")
				.removeClass("chosen");
			$(".floating_action_buttons").css("right", "20px");
		});
	});

	function openTransferModal() {
		$("#ModalTransfer").modal({
			backdrop: "static",
			keyboard: false
		});
	}
	function openImputeModal() {
		$("#ModalImputation").modal({
			backdrop: "static",
			keyboard: false
		});
	}

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
	function transferTo() {
		let annotation = Object.values(SelectedAnnotations)
			.filter(a => a !== false)
			.join("$$");
		setSending(true);
		getToken().then(token => {
			fetch("/transfertTo", {
				method: "POST",
				headers: {
					"Content-Type": "Application/json",
					Accept: "Application/json",
					"X-CSRF-TOKEN": token
				},
				body: JSON.stringify({
					courrier_id: params.courrier,
					annotation
				})
			})
				.then(async res => ({
					status: res.status,
					...(await res.json())
				}))
				.then(response => {
					setSending(false);
					$(".floating_action_buttons").css("right", "20px");
					if (!response.success) {
						manageResponse(response, dispatch);
					} else {
						$("#ModalTransfer").modal("hide");
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: response.message,
							showConfirmButton: false,
							timer: 4000
						});
						history.push(`/courriers`);
					}
				});
		});
	}

	function selectAnnot(e) {
		let noeud = $(e.target).parent();
		let index = noeud.data("index");
		noeud.toggleClass("chosen");
		SelectedAnnotations[index] = noeud.hasClass("chosen")
			? ANNOTATIONS[index]
			: false;
	}

	function selectCel(e) {
		let noeud = $(e.target).parent();
		let index = noeud.data("index");
		noeud.toggleClass("chosen");
		SelectedCellules[index] = noeud.hasClass("chosen")
			? directions[index].id
			: false;
		setCellules({ ...SelectedCellules });
		console.log(SelectedCellules);
	}

	// Valider le courrier.
	function validate(etat, text) {
		setSending(true);
		getToken().then(token => {
			fetch("/validateOrReject", {
				method: "POST",
				headers: {
					"Content-Type": "Application/json",
					Accept: "Application/json",
					"X-CSRF-TOKEN": token
				},
				body: JSON.stringify({
					courrier_id: params.courrier,
					etat,
					observation: text
				})
			})
				.then(async res => ({
					status: res.status,
					...(await res.json())
				}))
				.then(response => {
					setSending(false);
					$(".floating_action_buttons").css("right", "20px");
					if (!response.success) {
						manageResponse(response, dispatch);
					} else {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: response.message,
							showConfirmButton: false,
							timer: 4000
						});
						history.replace('/courriers');
					}
				});
		});
	}

	// Imputer le courrier.
	function imputeTo() {
		let annotation = Object.values(SelectedAnnotations)
			.filter(a => a !== false)
			.join("$$");
		let directions = Object.values(SelectedCellules)
			.filter(d => d !== false)
			.join("$");
		setSending(true);
		getToken().then(token => {
			fetch("/imputeTo", {
				method: "POST",
				headers: {
					"Content-Type": "Application/json",
					Accept: "Application/json",
					"X-CSRF-TOKEN": token
				},
				body: JSON.stringify({
					courrier_id: params.courrier,
					annotation,
					directions
				})
			})
				.then(async res => ({
					status: res.status,
					...(await res.json())
				}))
				.then(response => {
					setSending(false);
					$(".floating_action_buttons").css("right", "20px");
					if (!response.success) {
						manageResponse(response, dispatch);
					} else {
						$("#ModalImputation").modal("hide");
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: response.message,
							showConfirmButton: false,
							timer: 4000
						});
						history.replace('/courriers');
					}
				});
		});
	}

	function showImpute(e) {
		$(e.target).hide();
		$("#imputer").css("display", "");
		$("#_annoter").hide();
		$("#_imputer").show();
	}


	// Responsable du service courrier qui valide le courrier.
	function validateCourrier(e) {
		Swal.fire({
			title: 'Veuillez confirmer',
			text: "Vous êtes sur le point de valider ce courrier et de le transmettre directement au Sécrétaire Général Adjoint. Cette opération est irréversible, êtes-vous sûr de vouloir continuer ?",
			showDenyButton: false,
			showCancelButton: true,
			confirmButtonText: `Oui, valider`,
			cancelButtonText: `Non`,
			icon: 'question'
		}).then((result) => {
			if (result.isConfirmed) {
				validate("VALIDE");
			}
		})

	}

	// Retourner le courrier.
	async function returnTo() {
		$(".floating_action_buttons").css({
			right: "-2020px",
			transition: "0.5s"
		});
		const { value: text } = await Swal.fire({
			input: 'textarea',
			inputLabel: 'Raison',
			inputPlaceholder: 'Veuillez indiquer la raison du renvoi',
			inputAttributes: {
				'aria-label': 'Veuillez indiquer la raison du renvoi'
			},
			showCancelButton: true
		});
		validate('RETOURNE', text);
	}

	// Renvoyer le courrier pour correction.
	async function invalidate() {
		$(".floating_action_buttons").css({
			right: "-2020px",
			transition: "0.5s"
		});
		const { value: text } = await Swal.fire({
			input: 'textarea',
			inputLabel: 'Raison',
			inputPlaceholder: 'Veuillez indiquer la raison du renvoi',
			inputAttributes: {
				'aria-label': 'Veuillez indiquer la raison du renvoi'
			},
			showCancelButton: true
		})
		validate("RENVOYE", text);
	}

	// Rejeter le courrier.
	async function reject() {
		$(".floating_action_buttons").css({
			right: "-2020px",
			transition: "0.5s"
		});
		const { value: text } = await Swal.fire({
			input: 'textarea',
			inputLabel: 'Raison',
			inputPlaceholder: 'Veuillez indiquer la raison du rejet',
			inputAttributes: {
				'aria-label': 'Veuillez indiquer la raison du rejet'
			},
			showCancelButton: true
		})

		// if (text) {
		// 	Swal.fire(text)
		// }
		validate("REJETE", text);
	}

	async function terminate() {
		$(".floating_action_buttons").css({
			right: "-2020px",
			transition: "0.5s"
		});
		let { isConfirmed } = await Swal.fire({
			title: 'Veuillez confirmer',
			text: "Vous êtes sur le point de vous désigner comme le destinataire final de ce courrier. Il ne vous sera plus possible de le transférer ou de l'imputer. Êtes-vous sûr de vouloir continuer ?",
			showDenyButton: false,
			showCancelButton: true,
			confirmButtonText: `Oui, terminer`,
			cancelButtonText: `Non`,
			icon: 'question'
		})
		if (isConfirmed) {
			setSending(true);
			getToken().then(token => {
				fetch("/terminateIncoming", {
					method: "POST",
					headers: {
						"Content-Type": "Application/json",
						Accept: "Application/json",
						"X-CSRF-TOKEN": token
					},
					body: JSON.stringify({
						courrier_id: params.courrier
					})
				})
					.then(async res => ({
						status: res.status,
						...(await res.json())
					}))
					.then(response => {
						setSending(false);
						$(".floating_action_buttons").css("right", "20px");
						if (!response.success) {
							manageResponse(response, dispatch);
						} else {
							Swal.fire({
								position: 'top-end',
								icon: 'success',
								title: response.message,
								showConfirmButton: false,
								timer: 4000
							});
							history.replace('/courriers');
						}
					});
			});
		} else {
			$(".floating_action_buttons").css("right", "20px");
		}
	}

	function openStatsModal() {
		$("#ModalSuivi").modal({
			backdrop: "static",
			keyboard: false
		});
	}

	return isLoading ? (
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
						{(auth.role.privileges.some(privilege =>
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
								{(auth.role.grade == file.etape_actuelle ||
									file.etat == "IMPUTE") && (
										<>
											{auth.role.privileges.some(privilege =>
												TRANSM_COURRIER.includes(privilege)
											) && (
													<div className="button d-flex align-items-center mb-3">
														<h5
															className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
															style={{ maxWidth: "300px" }}
														>
															ENVOYER AU{" "}
															{
																roles.find(
																	r =>
																		r.grade ===
																		auth.role.grade + 1
																).description
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

											{auth.role.privileges.some(privilege =>
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

											{auth.role.privileges.some(privilege =>
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

											{(auth.role.privileges.some(privilege =>
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

								{auth.role.privileges.some(privilege =>
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
										onClick={transferTo}
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
                                    onClick={transferTo}
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
									{isFetching ? (
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
																	data-index={index}
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
																		Math.ceil(
																			directions.length /
																			2
																		) + index
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
										disabled={isSending}
										className="btn btn-lg btn-light"
										data-dismiss="modal"
									>
										Annuler l'imputation du courrier
                                </button>
									<button
										type="button"
										disabled={isSending}
										onClick={showImpute}
										className="ml-2 mr-5 btn btn-lg btn-primary"
									>
										Sélectionner les cellules
                                </button>
									<button
										type="button"
										id="imputer"
										style={{ display: "none" }}
										onClick={imputeTo}
										className={`btn ml-2 mr-5 btn-outline-primary btn-lg`}
										disabled={
											isSending ||
											Object.values(SelectedCellules).filter(
												v => v !== false
											).length == 0
										}
									>
										{isSending ? (
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
                                    onClick={imputeTo}
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
								{isFetching ? (
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
												<h3>
													Historique des opérations
                                        </h3>
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
																				{normalize(new Date(
																					operation.created_at
																				).getHours())}
                                                                        :
                                                                        {normalize(new Date(
																					operation.created_at
																				).getMinutes())}
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
																		<td style={{ display: 'block', height: 'auto', overflow: 'hidden', 'whiteSpace': 'wrap', maxWidth: '250px' }}>
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
