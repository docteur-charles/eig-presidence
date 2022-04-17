import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "../Styles/App.css";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LeftSidebar from "../Components/LeftSidebar";
import RightSidebar from "../Components/RightSidebar";
import FullRoute from "./FullRoute";
import Loader from "../Components/Loader";
import {
    LIST_ARCHIV,
    LIST_COURRIER,
    MANAGE_USERS,
    REGISTER_COURRIER
} from "../Helpers/Const";
import { useSession } from "../Context/Session";

let Dashboard = React.lazy(() => import("../Pages/Dashboard"));
let Courriers = React.lazy(() => import("../Pages/Courriers"));
let Enregistrement = React.lazy(() => import("../Pages/Enregistrement"));
let CourrierDetail = React.lazy(() => import("../Pages/CourrierDetail"));
let Archive = React.lazy(() => import("../Pages/Archive"));
/* let Utilisateurs = React.lazy(() => import("../Pages/Utilisateurs"));
let Statistiques = React.lazy(() => import("../Pages/Statistiques")); */

export default function Root() {
    let [sidebar, setSidebar] = useState(true);
    let [expand, setExpand] = useState(false);

    const { user } = useSession();

    function showSidebar() {
        setExpand(false);
        setTimeout(() => {
            setSidebar(true);
        }, 200);
    }

    function hideSidebar() {
        setSidebar(false);
        setExpand(true);
    }

    function toggleSidebar(value) {
        if (value) {
            showSidebar();
        } else {
            hideSidebar();
        }
    }

    return (
        <>
            <div className="layout-wrapper">
                <Header full={expand} />

                <div className="content-wrapper">
                    <LeftSidebar />

                    <div className="content-body">
                        <div
                            className="content"
                            style={
                                expand
                                    ? {
                                          paddingRight: 0,
                                          position: "relative"
                                      }
                                    : {
                                          position: "relative"
                                      }
                            }
                        >
                            <React.Suspense fallback={<Loader />}>
                                <Switch>
                                    <Route
                                        path="/dashboard"
                                        component={Dashboard}
                                    />

                                    {user.role.privileges.some(privilege =>
                                        LIST_COURRIER.includes(privilege)
                                    ) && (
                                        <Route
                                            exact
                                            path="/courriers"
                                            component={Courriers}
                                        />
                                    )}

                                    {user.role.privileges.some(privilege =>
                                        REGISTER_COURRIER.includes(privilege)
                                    ) && (
                                        <FullRoute
                                            path="/enregistrements"
                                            component={Enregistrement}
                                            showSidebar={toggleSidebar}
                                        />
                                    )}

                                    <FullRoute
                                        path="/courriers/:courrier"
                                        component={CourrierDetail}
                                        showSidebar={toggleSidebar}
                                    />

                                    {user.role.privileges.some(privilege =>
                                        LIST_ARCHIV.includes(privilege)
                                    ) && (
                                        <FullRoute
                                            path="/archives"
                                            component={Archive}
                                            showSidebar={toggleSidebar}
                                        />
                                    )}

                                    {/*
                                    
                                    <Route
                                        path="/statistiques"
                                        component={Statistiques}
                                    />
                                    {user.role.privileges.some(privilege =>
                                        MANAGE_USERS.includes(privilege)
                                    ) && (
                                        <FullRoute
                                            path="/utilisateurs"
                                            component={Utilisateurs}
                                            showSidebar={toggleSidebar}
                                        />
                                    )} */}
                                    <Redirect to="/dashboard" />
                                </Switch>
                            </React.Suspense>
                        </div>

                        <Footer />
                    </div>

                    {sidebar && <RightSidebar />}
                </div>
            </div>
        </>
    );
}
