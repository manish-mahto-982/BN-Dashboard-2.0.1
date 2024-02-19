import { api } from "src/services/client-service/api";

export const newClientBasicStackTableData = {
  fetchQuery: () => api.endpoints.getBasicStackNewClient.useLazyQuery(),

};
export const omrClientBasicStackTableData = {
  fetchQuery: () => api.endpoints.getBasicStackOMRClient.useLazyQuery(),

};

export const newClientSpecialStackTableData = {
  fetchQuery: () => api.endpoints.getSpecialStackNewClient.useLazyQuery(),

};
export const omrClientSpecialStackTableData = {
  fetchQuery: () => api.endpoints.getSpecialStackOMRClient.useLazyQuery(),

};

export const nafOverdueData = {
  fetchQuery: () => api.endpoints.getNAFOverdueData.useLazyQuery(),

};

export const welcomeCallData = {
  fetchQuery: () => api.endpoints.getWelcomeCall.useLazyQuery(),

};

export const assessmentNotFilledData = {
  fetchQuery: () => api.endpoints.getAssessmentNotFilled.useLazyQuery(),

};

export const sessionStartDateData = {
  fetchQuery: () => api.endpoints.getSessionStartDate.useLazyQuery(),

};

export const inductionCallData = {
  fetchQuery: () => api.endpoints.getInductionCall.useLazyQuery(),
};

export const startWeightData = {
  fetchQuery: () => api.endpoints.getStartWeight.useLazyQuery(),
};
