import { api } from "src/services/client-service/api";

export const newClientBasicStackTableData = {
  fetchQuery: () => api.endpoints.getBasicStackNewClient.useLazyQuery(),
  columns: [
    { id: "client_details", label: "client details" },
    { id: "program_details", label: "program details" },
  ],
};
export const omrClientBasicStackTableData = {
  fetchQuery: () => api.endpoints.getBasicStackOMRClient.useLazyQuery(),
  columns: [
    { id: "client_details", label: "client details" },
    { id: "program_details", label: "program details" },
  ],
};

export const newClientSpecialStackTableData = {
  fetchQuery: () => api.endpoints.getSpecialStackNewClient.useLazyQuery(),
  columns: [
    { id: "client_details", label: "client details" },
    { id: "program_details", label: "program details" },
  ],
};
export const omrClientSpecialStackTableData = {
  fetchQuery: () => api.endpoints.getSpecialStackOMRClient.useLazyQuery(),
  columns: [
    { id: "client_details", label: "client details" },
    { id: "program_details", label: "program details" },
  ],
};

export const nafOverdueData = {
  fetchQuery: () => api.endpoints.getNAFOverdueData.useLazyQuery(),
  columns: [
    { id: "client_details", label: "client details" },
    { id: "program_details", label: "program details" },
  ],
};

export const welcomeCallData = {
  fetchQuery: () => api.endpoints.getWelcomeCall.useLazyQuery(),
  columns: [
    { id: "client_details", label: "client details" },
    { id: "program_details", label: "program details" },
  ],
};
