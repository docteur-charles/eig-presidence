import React, { useEffect } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { useSession } from "../Context/Session";
import {
    LIST_ARCHIV,
    LIST_COURRIER,
    MANAGE_USERS,
    REGISTER_COURRIER
} from "../Helpers/Const";
import AuthService from "../Services/Auth";

export default function() {
    let {
        user: {
            role: { privileges }
        },
        clearSessionData
    } = useSession();

    const { mutateAsync: logout } = useMutation(AuthService.Logout);

    let $ = window.$;

    useEffect(() => {
        $(".navigation .header-list").niceScroll();
    }, []);

    const handleDisconnect = React.useCallback(
        async e => {
            e.preventDefault();
            try {
                await logout();
                console.log("Deconnecté !");
                await clearSessionData();
            } catch (err) {
                toastr["error"](
                    err.message ||
                        "Nous n'arrivons pas à vous déconnecter. Merci de réessayer dans quelques instants !",
                    "Erreur interne"
                );
            }
        },
        [logout, clearSessionData]
    );

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
                {privileges.some(privilege =>
                    LIST_COURRIER.includes(privilege)
                ) && (
                    <li className="gec-courriers">
                        <Link to="/courriers">
                            <i className="nav-link-icon ti-file" />
                            <span className="nav-link-label">Courriers</span>
                        </Link>
                    </li>
                )}
                <li className="gec-statistiques">
                    <Link to="/statistiques">
                        <i className="nav-link-icon ti-pulse" />
                        <span className="nav-link-label">Statistiques</span>
                    </Link>
                </li>
                {privileges.some(privilege =>
                    MANAGE_USERS.includes(privilege)
                ) && (
                    <li className="gec-utilisateurs">
                        <Link to="/utilisateurs">
                            <i className="nav-link-icon ti-user" />
                            <span className="nav-link-label">Utilisateurs</span>
                        </Link>
                    </li>
                )}
                {privileges.some(privilege =>
                    LIST_ARCHIV.includes(privilege)
                ) && (
                    <li className="gec-archives">
                        <Link to="/archives">
                            <i className="nav-link-icon ti-layers" />
                            <span className="nav-link-label">Archives</span>
                        </Link>
                    </li>
                )}
                <li className="flex-grow-1 gec-params">
                    <Link to="/params">
                        <i className="nav-link-icon ti-settings" />
                        <span className="nav-link-label">Paramètres</span>
                    </Link>
                </li>
                <li className="gec-disconnect">
                    <Link to="/auth/logout" onClick={handleDisconnect}>
                        <i className="nav-link-icon ti-power-off" />
                        <span className="nav-link-label">Déconnexion</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
