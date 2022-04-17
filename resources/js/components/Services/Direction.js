import useAxios from "../Libs/useAxios";

const DirectionService = {
    List() {
        return useAxios("/getDirectionsList", { method: "GET" });
    }
};

export default DirectionService;
