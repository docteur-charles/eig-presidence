import React from "react";

import Demo from "../Components/Demo";
import Loader from "../Components/Loader";
import Usage from "../Components/Usage";

export default function Dashboard() {
    let [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <>
            <Demo />
            <Usage />
        </>
    );
}
