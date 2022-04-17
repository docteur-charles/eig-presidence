import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Auth from "./Components/Auth";
import Root from "./Navigators/Root";
import SessionContainer, { useSession } from "./Context/Session";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
    const session = useSession();

    console.log("IS CONNECTED", session.isConnected);

    return !session.isConnected ? <Auth /> : <Root />;
}

export default App;

if (document.getElementById("app")) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
                refetchOnMount: true,
                retry: true,
                retryDelay: 3 * 1000,
                failureCount: 3,
                refetchOnReconnect: true
            }
        }
    });

    function getInitialData() {
        return {
            user: JSON.parse(localStorage.getItem("User") || "null"),
            stats: JSON.parse(localStorage.getItem("Stats") || "null"),
            roles: JSON.parse(localStorage.getItem("Roles") || "null")
        };
    }

    ReactDOM.render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <SessionContainer initial={getInitialData()}>
                        <App />
                    </SessionContainer>
                </BrowserRouter>
            </QueryClientProvider>
        </React.StrictMode>,
        document.getElementById("app")
    );
}
