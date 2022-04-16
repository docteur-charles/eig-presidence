import Swal from "sweetalert2";
import { SET_AUTH } from "../Store/Actions";
import { Toast } from "./Const";

export function manageResponse(response, dispatch) {
	console.log(response)
    if (!response.success) {
        if (response.status == 403) {
            localStorage.clear();
			Swal.fire({
				position: 'top-end',
				icon: 'error',
				backdrop: true,
				allowOutsideClick: false,
				title: "Votre session n'est plus valide, merci de vous reconnecter",
				showConfirmButton: false,
				timer: 4000
			});
            return setTimeout(() => {
                dispatch({
                    type: SET_AUTH,
                    data: null
                });
            }, 4000);
		}
		Toast.fire({
			title: response.message || "Impossible de joindre le server",
			icon:'error'
		})
    }
}

export function getToken() {
    return fetch("/getToken").then(res => res.json());
}
