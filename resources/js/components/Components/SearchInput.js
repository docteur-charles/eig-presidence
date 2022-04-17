import React from "react";

export default function FileInput({ _id = 0, onChange }) {
    const [isEmpty, setEmpty] = React.useState(true);

    const handleChange = React.useCallback(
        e => {
            setEmpty(e.target.value.length === 0);
            onChange(e);
        },
        [setEmpty]
    );

    return (
        <div className="col-12 p-r-40">
            <input
                type="search"
                placeholder="Votre recherche..."
                required
                onChange={handleChange}
                className="archives col shadow-sm rounded-pill p-3 p-xl-3 text-center font-size-25"
                style={{
                    cursor: "pointer",
                    border: "2px solid #ffa50080",
                    fontWeight: isEmpty,
                    normal: "bold",
                    lineHeight: "25px"
                }}
            />
        </div>
    );
}
