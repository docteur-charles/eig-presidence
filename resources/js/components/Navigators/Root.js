import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import '../Styles/App.css';

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

let Dashboard = React.lazy(() => import("../Pages/Dashboard"));
let Archive = React.lazy(() => import("../Pages/Archive"));
let Enregistrement = React.lazy(() => import("../Pages/Enregistrement"));
let Utilisateurs = React.lazy(() => import("../Pages/Utilisateurs"));
let Courriers = React.lazy(() => import("../Pages/Courriers"));
let CourrierDetail = React.lazy(() => import("../Pages/CourrierDetail"));
let Statistiques = React.lazy(() => import("../Pages/Statistiques"));

export default function Root({ auth }) {
	let [sidebar, setSidebar] = useState(true);
	let [expand, setExpand] = useState(false);

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

	// useEffect(() => {
	//     let $ = window.$;
	//     $("body").niceScroll();
	// }, []);

	return (
		<>
			<div
				className="layout-wrapper"
			>
				<Header full={expand} auth={auth} />

				<div className="content-wrapper">
					<LeftSidebar auth={auth} />

					<div className="content-body">
						<div
							className="content"
							style={
								expand
									? ({
										paddingRight: 0,
										position: "relative"
									}) : ({
										position: "relative"
									})
							}
						>
							<React.Suspense fallback={<Loader />}>
								<Switch>
									<Route
										path="/dashboard"
										component={Dashboard}
									/>
									{auth.role.privileges.some(privilege =>
										LIST_COURRIER.includes(privilege)
									) && (
											<Route
												exact
												path="/courriers"
												component={Courriers}
											/>
										)}
									<FullRoute
										path="/courriers/:courrier"
										component={CourrierDetail}
										showSidebar={toggleSidebar}
									/>
									{auth.role.privileges.some(privilege =>
										LIST_ARCHIV.includes(privilege)
									) && (
											<FullRoute
												path="/archives"
												component={Archive}
												showSidebar={toggleSidebar}
											/>
										)}
									<Route
										path="/statistiques"
										component={Statistiques}
									/>
									{auth.role.privileges.some(privilege =>
										REGISTER_COURRIER.includes(privilege)
									) && (
											<FullRoute
												path="/enregistrements"
												component={Enregistrement}
												showSidebar={toggleSidebar}
											/>
										)}
									{auth.role.privileges.some(privilege =>
										MANAGE_USERS.includes(privilege)
									) && (
											<FullRoute
												path="/utilisateurs"
												component={Utilisateurs}
												showSidebar={toggleSidebar}
											/>
										)}
									<Redirect to="/dashboard" />
								</Switch>
							</React.Suspense>
						</div>

						<Footer />
					</div>

					{sidebar && (
						<RightSidebar />
					)}
				</div>
			</div>
		</>
	);
}
