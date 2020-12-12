import { SET_AUTH } from "../Store/Actions";

export function manageResponse(response, dispatch) {
	console.log(response)
    if (!response.success) {
        if (response.status == 403) {
            localStorage.clear();
            window.toastr["error"](
                "Votre session n'est plus valide, merci de vous reconnecter",
                "L'opération n'a pas abouti"
            );
            return setTimeout(() => {
                dispatch({
                    type: SET_AUTH,
                    data: null
                });
            }, 4000);
        }
        window.toastr["error"](
            response.message || "Impossible de joindre le server",
            "L'opération a échoué"
        );
    }
}

export function getToken() {
    return fetch("/getToken").then(res => res.json());
}
