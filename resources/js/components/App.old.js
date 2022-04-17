import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, useLocation } from "react-router-dom";

import { SET_AUTH, SET_STATS } from "./Store/Actions";
import Store from "./Store/Store";

import PreLoader from "./Components/PreLoader";
import Auth from "./Components/Auth";
import Root from "./Navigators/Root";
import { SVGPATHS } from "./Helpers/Const";

function App() {
    let { pathname } = useLocation();
    let dispatch = useDispatch();

    let [isLoading, setLoading] = useState(true);
    let [isFetching, setFetching] = useState(true);

    const auth = useSelector(state => state.auth);

    function checkSession() {
        return fetch("/confirmSession").then(res => res.json());
    }

    function getStats() {
        return fetch("/getStats").then(res => res.json());
    }

    useEffect(() => {
        window.toastr.options = {
            closeButton: true,
            debug: false,
            newestOnTop: false,
            positionClass: "toast-top-right",
            preventDuplicates: false,
            onclick: null,
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            progressBar: true,
            showMethod: "slideDown",
            hideMethod: "slideUp",
            showDuration: 200,
            hideDuration: 200
        };
        setLoading(false);
        if (!SVGPATHS.includes(pathname)) {
            $("#SvgjsSvg1001").remove();
        }
    }, []);

    useEffect(() => {
        if (!isLoading) {
            if (auth) {
                // console.log("Session initiale:", auth);
                checkSession().then(response => {
                    // console.log(response);
                    let { isValid } = response;
                    setFetching(false);
                    if (!isValid) {
                        localStorage.removeItem("auth");
                        dispatch({
                            type: SET_AUTH,
                            data: null
                        });
                        // console.log("Session invalide !");
                    } else {
                        dispatch({
                            type: SET_AUTH,
                            data: auth
                        });
                    }
                });
            } else {
                // console.log("Pas de session initiale !", auth);
                setFetching(false);
            }
        }
    }, [isLoading]);

    useEffect(() => {
        window.$(window).scrollTop(0);
        if (SVGPATHS.includes(pathname)) {
            $("body").append(
                `<svg id="SvgjsSvg1001" width="2" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" style="overflow: hidden; top: -100%; left: -100%; position: absolute; opacity: 0;"><defs id="SvgjsDefs1002"></defs><polyline id="SvgjsPolyline1003" points="0,0"></polyline><path id="SvgjsPath1004" d="M0 0 "></path></svg>`
            );
        }

        getStats().then(stats => {
            dispatch({
                type: SET_STATS,
                data: stats
            });
        });

        return () => {
            if (SVGPATHS.includes(pathname)) $("#SvgjsSvg1001").remove();
        };
    }, [pathname]);

    return isFetching || isLoading ? (
        <PreLoader />
    ) : !auth ? (
        <Auth />
    ) : (
        <Root auth={auth} />
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={Store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("app")
    );
}
