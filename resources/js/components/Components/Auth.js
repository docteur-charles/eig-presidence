import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import { manageResponse } from "../Helpers/Func";
import { useIterable } from "../Helpers/Hooks";
import { SET_AUTH } from "../Store/Actions";

export default function() {
    let dispatch = useDispatch();
	let [isLoading, setLoading] = useState(false);
	let $ = window.$;

    useEffect(() => {
        document.body.classList.add("form-membership");
        document.body.style.background =
            "url(/assets/images/palais.jpg) no-repeat center center";
        document.body.style.backgroundSize = "cover";

        $("#app").css({
            height: "100%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });

        return () => {
            document.body.classList.remove("form-membership");
            document.body.style.background = "";
			document.body.style.backgroundSize = "";
			$("#app").css({
                height: '',
                display: '',
                alignItems: '',
                justifyContent: ''
            });
        };
    }, []);I

    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        let data = useIterable(new FormData(e.target));

        let meta = document.head.querySelector('[name="csrf-token"]');
        fetch("/api/login", {
            method: "POST",
            headers: {
                "X-CSRF-TOKEN": meta.getAttribute("content"),
                "Content-Type": "Application/json",
                Accept: "Application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(response => {
                setLoading(false);
                if (response.error) {
                    manageResponse(response);
                } else {
                    response.role.privileges = response.role.privileges.split(
                        "$"
                    );
                    localStorage.setItem("auth", JSON.stringify(response));
                    dispatch({
                        type: SET_AUTH,
                        data: response
                    });
                }
            });
    }

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
                {/* <div className="form-group d-flex justify-content-between">
		  <div className="custom-control custom-checkbox">
			<input type="checkbox" className="custom-control-input" defaultChecked id="customCheck1" />
			<label className="custom-control-label" htmlFor="customCheck1">Rester connecté</label>
		  </div>
		</div> */}
                <button
                    disabled={isLoading}
                    className="btn btn-primary btn-block"
                    type="submit"
                    style={{ backgroundColor: isLoading ? "#fff" : "" }}
                >
                    {isLoading ? (
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
