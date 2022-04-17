import useAxios from "../Libs/useAxios";

const AuthService = {
    Login({ data, params, signal }) {
        return useAxios("/login", { data, params, signal });
    },

    Logout() {
        return useAxios("/logout");
    }
};

export default AuthService;
