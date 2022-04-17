import useAxios from "../Libs/useAxios";

const CourrierService = {
    ExternalReceived() {
        return useAxios("/consultExternalReceived", { method: "GET" });
    },

    RegisterIncoming({ data }) {
        return useAxios("/registerIncoming", { data, isMultipart: true });
    },

    ConsultExternalOne({ signal, params, data }) {
        return useAxios("/consultExternalOne", { data, params, signal });
    },

    TransferTo({ data }) {
        return useAxios("/transfertTo", { data });
    },

    ValidateOrReject({ data }) {
        return useAxios("/validateOrReject", { data });
    },

    ImputeTo({ data }) {
        return useAxios("/imputeTo", { data });
    },

    TerminateIncoming({ data }) {
        return useAxios("/terminateIncoming", { data });
    }
};

export default CourrierService;
