import React from "react";
import Loader from "./Loader";

import palais from "../Ressources/palais.jpg";
import { useMutation } from "react-query";
import AuthService from "../Services/Auth";
import { useSession } from "../Context/Session";

export default function() {
    const { mutateAsync: login, isLoading, isSuccess } = useMutation(
        AuthService.Login
    );

    const { setSessionData } = useSession();

    let $ = window.$;

    React.useEffect(() => {
        document.body.classList.add("form-membership");
        document.body.style.background = `url(${palais}) no-repeat center center`;
        document.body.style.backgroundSize = "cover";

        $("#app").css({
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        });

        return () => {
            document.body.classList.remove("form-membership");
            document.body.style.background = "";
            document.body.style.backgroundSize = "";
            $("#app").css({
                height: "",
                display: "",
                alignItems: "",
                justifyContent: ""
            });
        };
    }, []);

    const handleSubmit = React.useCallback(
        async e => {
            e.preventDefault();

            try {
                let response = await login({
                    data: Object.fromEntries(new FormData(e.target))
                });
                console.log("RESPONSE", response);
                const { user, roles, stats } = response;
                user.role.privileges = user.role.privileges.split("$");
                setSessionData({ user, roles, stats });
                console.log("TERMINATED");
            } catch (err) {
                console.log(err);
            }
        },
        [login, setSessionData]
    );

    return (
        <div className="form-wrapper">
            <div id="logo">
                <img
                    width="150px"
                    src="/assets/images/logo_transparent.png"
                    alt="image"
                />
            </div>

            {/* ./ logo */}
            <h4>Authentification</h4>
            {/* form */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Utilisateur"
                        required
                        autoFocus
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Mot de passe"
                        required
                    />
                </div>

                <button
                    disabled={isLoading || isSuccess}
                    className="btn btn-primary btn-block"
                    type="submit"
                    style={{
                        backgroundColor: isLoading || isSuccess ? "#fff" : ""
                    }}
                >
                    {isLoading || isSuccess ? (
                        <span className="d-flex align-items-center justify-content-center">
                            <Loader
                                style={{
                                    padding: 0,
                                    margin: 0,
                                    marginLeft: -15,
                                    background: "transparent",
                                    zIndex: 11000
                                }}
                                normal="15px"
                            />
                            <span
                                className="d-inline-block"
                                style={{
                                    whiteSpace: "nowrap",
                                    color: "orange"
                                }}
                            >
                                connexion en cours...
                            </span>
                        </span>
                    ) : (
                        <span>Se connecter</span>
                    )}
                </button>
            </form>
            {/* ./ form */}
        </div>
    );
}
