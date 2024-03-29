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

export const iclNotFilledData = {
  fetchQuery: () => api.endpoints.getICLNotFilled.useLazyQuery(),
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
export const startInchData = {
  fetchQuery: () => api.endpoints.getStartInch.useLazyQuery(),
};
export const startPhotoData = {
  fetchQuery: () => api.endpoints.getStartPhoto.useLazyQuery(),
};

export const midWeightData = {
  fetchQuery: () => api.endpoints.getMidWeight.useLazyQuery(),
};

export const endWeightData = {
  fetchQuery: () => api.endpoints.getEndWeight.useLazyQuery(),
};
export const endInchData = {
  fetchQuery: () => api.endpoints.getEndInch.useLazyQuery(),
};
export const endPhotoData = {
  fetchQuery: () => api.endpoints.getEndPhoto.useLazyQuery(),
};
// Overall Pending
export const OnHoldDueDateData = {
  fetchQuery: () => api.endpoints.getOnHoldDueDate.useLazyQuery(),
};
export const AppNotUpdatedAndroidData = {
  fetchQuery: () => api.endpoints.getAppNotUpdatedAndroid.useLazyQuery(),
};
export const advancedPurchasedData = {
  fetchQuery: () => api.endpoints.getAdvancedPurchased.useLazyQuery(),
};
export const notStartedData = {
  fetchQuery: () => api.endpoints.getNotStarted.useLazyQuery(),
};

// Halftime Journey
export const halfTimeFeedbackCommonData = {
  fetchQuery: () => api.endpoints.getHalftimeFeedBackCommon.useLazyQuery(),
};
export const halftimeHealthScoreCommonData = {
  fetchQuery: () => api.endpoints.getHalftimeHealthScoreCommon.useLazyQuery(),
};
export const halftimeCallCommonData = {
  fetchQuery: () => api.endpoints.getHalftimeCallCommon.useLazyQuery(),
};
export const WMRData = {
  fetchQuery: () => api.endpoints.getWMR.useLazyQuery(),
};

// OC Client
export const totalOcClientsData = {
  fetchQuery: () => api.endpoints.getTotalOcClients.useLazyQuery(),
};

//Maintenance
export const total10thDayMaintenanceWeightOD = {
  fetchQuery: () => api.endpoints.getTenthDayMaintenanceWeight.useLazyQuery(),
};

//ExpiryClients

export const expiryClientTodayData = {
  fetchQuery: () => api.endpoints.getExpiryClientToday.useLazyQuery(),
};
