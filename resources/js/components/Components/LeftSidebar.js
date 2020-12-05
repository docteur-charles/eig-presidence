import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SET_AUTH } from "../Store/Actions";

export default function({
    auth: {
        role: { privileges }
    }
}) {

	let dispatch = useDispatch();
	
    // Les privilèges donnant droit d'enregistrer un courrier.
    const REGISTER_COURRIER = [
        "ENREGIST_COURRIER_ORDINAIRE",
        "ENREGIST_COURRIER_CONFIDENT",
        "ENREGIST_LETTRE_PRESIDENT"
    ];

    // Les privilèges donnant droit de gérer les utilisateurs.
    const MANAGE_USERS = ["TOUT_ADMIN", "TOUT_ROOT"];

    useEffect(() => {
        let $ = window.$;
        $(".navigation .header-list").niceScroll();
	}, []);
	
	function logout(e) {

		e.preventDefault();
		
		fetch('/logout', {
			method: 'GET'
		}).then(res => {
			if (res.ok && res.status === 200) {
				localStorage.clear();
				dispatch({
					type: SET_AUTH,
					data: null
				});
			} else {
				toastr['error']("Nous n'arrivons pas à vous déconnecter. Merci de réessayer dans quelques instants !","Erreur interne");
			}
		})
		
	}

    return (
        <div className="navigation">
            <div className="logo mb-4">
                <Link to="/">
                    <img
                        src="/assets/images/logo.png"
                        width="100px"
                        alt="logo"
                    />
                </Link>
            </div>
            <ul className="header-list">
                <li className="gec-dashboard">
                    <Link to="/dashboard">
                        <i className="nav-link-icon ti-pie-chart" />
                        <span className="nav-link-label">T. de bord</span>
                        <span className="badge badge-danger badge-small">
                            2
                        </span>
                    </Link>
                </li>
                {privileges.some(privilege =>
                    REGISTER_COURRIER.includes(privilege)
                ) && (
                    <li className="gec-enreg-courriers">
                        <Link to="/enregistrements" className="text-center">
                            <i className="nav-link-icon ti-file" />
                            <span className="nav-link-label">
                                Enreg. courriers
                            </span>
                        </Link>
                    </li>
                )}
                <li className="gec-courriers">
                    <Link to="/courriers">
                        <i className="nav-link-icon ti-file" />
                        <span className="nav-link-label">Courriers</span>
                    </Link>
                </li>
                <li className="gec-statistiques">
                    <Link to="/statistiques">
                        <i className="nav-link-icon ti-pulse" />
                        <span className="nav-link-label">Statistiques</span>
                    </Link>
                </li>
                {privileges.some(privilege =>
                    console.log(privilege) || MANAGE_USERS.includes(privilege)
                ) && (
                    <li className="gec-utilisateurs">
                        <Link to="/utilisateurs">
                            <i className="nav-link-icon ti-user" />
                            <span className="nav-link-label">Utilisateurs</span>
                        </Link>
                    </li>
                )}
                <li className="gec-archives">
                    <Link to="/archives">
                        <i className="nav-link-icon ti-layers" />
                        <span className="nav-link-label">Archives</span>
                    </Link>
                </li>
                <li className="flex-grow-1 gec-params">
                    <Link to="/params">
                        <i className="nav-link-icon ti-settings" />
                        <span className="nav-link-label">Paramètres</span>
                    </Link>
                </li>
                <li className="gec-disconnect">
                    <Link to="/auth/logout" onClick={logout}>
                        <i className="nav-link-icon ti-power-off" />
                        <span className="nav-link-label">Déconnexion</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
