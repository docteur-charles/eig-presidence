import axios from "axios";

export function getToken() {
    return fetch("/getToken").then(res => res.json());
}

async function customFetch(options = { headers: {} }, requireAuth = true) {
    const Token = await getToken();

    return axios.create({
        timeout: 30000,
        withCredentials: requireAuth,
        ...options,
        headers: {
            "Content-Type": "Application/json",
            Accept: "Application/json",
            "X-CSRF-TOKEN": Token,
            ...options.headers
        }
    });
}

async function manageResponse(response, isExternal = false, url) {
    if (isExternal) {
        return response.data;
    }

    let $response = response.data;
    console.log($response);
    if ($response?.success) {
        return $response.data;
    } else {
        console.log($response);
        let err = new Error(
            $response.message ||
                "Nous n'arrivons pas à contacter le serveur, vérifiez votre connexion à Internet"
        );
        err.name = $response.err?.name;
        throw err;
    }
}

/**
 * Custom Fetch request
 * @param {string} url Endpoint
 * @param {object} options The request options
 * @returns The response body.
 */
async function useAxios(
    url,
    options = {
        method: "POST",
        isExternal: false,
        requireAuth: true,
        isMultipart: false
    }
) {
    let response;

    let {
        data = null,
        isExternal = false,
        method = "POST",
        requireAuth = true,
        isMultipart = false,
        ...others
    } = options;

    if (isExternal) {
        others = {
            ...(others || {}),
            baseURL: "",
            timeout: 0
        };
    }

    if (isMultipart) {
        others = {
            ...others,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
    }

    try {
        let req = await customFetch(others, requireAuth !== false);
        response = await req[method.toLowerCase()](
            url,
            isMultipart
                ? data
                : {
                      ...data
                  }
        );
    } catch (err) {
        if (err.message === "Request failed with status code 401") {
            localStorage.clear();
            return location.reload();
        }
        throw err;
    }
    // response = await response.json();
    return manageResponse(response, isExternal, url);
}

export default useAxios;
