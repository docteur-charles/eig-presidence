import useAxios from "../Libs/useAxios";

const OperationService = {
    List({ data }) {
        return useAxios("/getOperations", {
            data
        });
    }
};

export default OperationService;
