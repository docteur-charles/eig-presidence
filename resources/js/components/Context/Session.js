import React from "react";
import PreLoader from "../Components/PreLoader";

const SessionContext = React.createContext();

function SessionContainer({ children, initial = {} }) {
    const [user, setUser] = React.useState(null);
    const [roles, setRoles] = React.useState(null);
    const [stats, setStats] = React.useState(null);
    const [isLoading, setLoading] = React.useState(true);

    const setSessionData = React.useCallback(
        ({ user, roles, stats }) => {
            localStorage.setItem("User", JSON.stringify(user));
            localStorage.setItem("Roles", JSON.stringify(roles));
            localStorage.setItem("Stats", JSON.stringify(stats));
            setRoles(roles);
            setStats(stats);
            setUser(user);
            console.log("Data saved");
        },
        [setUser, setRoles, setStats]
    );
    const clearSessionData = React.useCallback(() => {
        localStorage.clear();
        setSessionData({ user: null, roles: null, stats: null });
    }, [setSessionData]);

    const sessionValue = React.useMemo(
        () => ({
            user,
            stats,
            roles,
            isConnected: Boolean(user),
            setUser,
            setSessionData,
            clearSessionData
        }),
        [user, setUser]
    );

    React.useEffect(() => {
        setLoading(false);
        setSessionData(initial);
    }, []);

    if (isLoading) {
        return <PreLoader />;
    }

    return (
        <SessionContext.Provider value={sessionValue}>
            {children}
        </SessionContext.Provider>
    );
}

export const useSession = () => {
    return React.useContext(SessionContext);
};

export default SessionContainer;
