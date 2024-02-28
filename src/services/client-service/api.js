import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/client-service" }),
  // baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL }),
  reducerPath: "clientServiceApi",
  tagTypes: [
    "User",
    "BasicStack",
    "UserRatting",
    "StartWeight",
    "AppNotUpdatedIOS",
    "AppNotUpdatedAndroid",
    "Drafts",
    "OnHoldDueDate",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admin",
    "UserPerformance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUserRating: build.query({
      query: () => `/rating-feedback/rating_feedback.json`,
      providesTags: ["UserRating"],
    }),
    getUser: build.query({
      // query: (id) => `general/user/${id}`,
      query: () => `/induction-flow/get-new-assign-bs-omr-client-data.json`,
      providesTags: ["User"],
    }),
    getBasicStackNewClient: build.query({
      // query: (id) => `general/user/${id}`,
      query: () => `/induction-flow/new_basic_stack_client.json`,
      providesTags: ["BasicStackNewClient"],
    }),
    getBasicStackOMRClient: build.query({
      // query: (id) => `general/user/${id}`,
      query: () => `/induction-flow/ocr_basic_stack_client.json`,
      providesTags: ["BasicStackOMRClient"],
    }),
    getSpecialStackNewClient: build.query({
      // query: (id) => `general/user/${id}`,
      query: () => `/induction-flow/new_basic_stack_client.json`,
      providesTags: ["SpecialStackNewClient"],
    }),
    getSpecialStackOMRClient: build.query({
      // query: (id) => `general/user/${id}`,
      query: () => `/induction-flow/ocr_basic_stack_client.json`,
      providesTags: ["SpecialStackOMRClient"],
    }),
    getNAFOverdueData: build.query({
      // query: (id) => `general/user/${id}`,
      query: () => `/induction-flow/naf_overdue_data.json`,
      providesTags: ["NAFOverdueData"],
    }),
    getWelcomeCall: build.query({
      query: () => `/induction-flow/welcome_call_data.json`,
      providesTags: ["WelcomeCall"],
    }),
    getAssessmentNotFilled: build.query({
      query: () => `/induction-flow/assessment_not_filled.json`,
      providesTags: ["AssessmentNotFilled"],
    }),
    getSessionStartDate: build.query({
      query: () => `/induction-flow/session_start_date.json`,
      providesTags: ["SessionStartDate"],
    }),
    getICLNotFilled: build.query({
      query: () => `/induction-flow/get_icl_data.json`,
      providesTags: ["SessionStartDate"],
    }),
    getInductionCall: build.query({
      query: () => `/induction-flow/induction_call.json`,
      providesTags: ["WelcomeCall"],
    }),

    getStartWeight: build.query({
      query: () => `/induction-flow/get_start_weight_data.json`,
      providesTags: ["StartWeight"],
    }),
    getStartInch: build.query({
      query: () => `/induction-flow/get_start_inch_data.json`,
      providesTags: ["StartInch"],
    }),
    getStartPhoto: build.query({
      query: () => `/induction-flow/get_start_inch_data.json`,
      providesTags: ["StartPhoto"],
    }),
    getMidWeight: build.query({
      query: () => `/induction-flow/get_start_weight_data.json`,
      providesTags: ["MidWeight"],
    }),
    getEndWeight: build.query({
      query: () => `/induction-flow/get_start_weight_data.json`,
      providesTags: ["EndWeight"],
    }),
    getEndInch: build.query({
      query: () => `/induction-flow/get_start_inch_data.json`,
      providesTags: ["EndInch"],
    }),
    getEndPhoto: build.query({
      query: () => `/induction-flow/get_start_inch_data.json`,
      providesTags: ["EndPhoto"],
    }),
    // Halftime journey
    getHalftimeFeedBackCommon: build.query({
      query: () => `/half-time-journey/ht_feedback_data.json`,
      providesTags: ["HalftimeFeedBackCommon"],
    }),
    getHalftimeCallCommon: build.query({
      query: () => `/half-time-journey/ht_feedback_call_data.json`,
      providesTags: ["HalftimeCallCommon"],
    }),

    getHalftimeHealthScoreCommon: build.query({
      query: () => `/half-time-journey/ht_healthscore_data.json`,
      providesTags: ["HalftimeHealthScoreCommon"],
    }),

    // overall-pending
    getAppNotUpdatedIOS: build.query({
      query: () => `/overall-pending/app_not_updated_ios.json`,
      providesTags: ["AppNotUpdatedIOS"],
    }),
    getAppNotUpdatedAndroid: build.query({
      query: () => `/overall-pending/app_not_updated_android.json`,
      providesTags: ["AppNotUpdatedAndroid"],
    }),
    getAdvancedPurchased: build.query({
      query: () => `/overall-pending/advance_purchase.json`,
      providesTags: ["AdvancedPurchased"],
    }),
    getWMR: build.query({
      query: () => `/overall-pending/wmr_data.json`,
      providesTags: ["WMR"],
    }),
    getNotStarted: build.query({
      query: () => `/overall-pending/not_started.json`,
      providesTags: ["NotStarted"],
    }),
    //Expiry-clients
    getExpiryClientToday: build.query({
      query: () => `/expiry-clients/expiring_today.json`,
      providesTags: ["ExpiryClientToday"],
    }),
    getOnHoldDueDate: build.query({
      query: () => "/overall-pending/get_onhold_due_data.json",
      providesTags: ["OnHoldDueDate"],
    }),
    getTotalOcClients: build.query({
      query: () => "/oc-clients/total_oc_client_list.json",
      providesTags: ["TotalOcClients"],
    }),
    getTenthDayMaintenanceWeight: build.query({
      query: () => "/maintenance/maintenance_weight_10day.json",
      providesTags: ["TenthDayMaintenanceWeight"],
    }),
    // quick-access
    getDrafts: build.query({
      query: () => "/quick-access/draft-data.json",
      providesTags: ["Drafts"],
    }),

    // getProducts: build.query({
    //     query: () => `client/product/all`,
    //     providesTags: ["Products"],
    // }),
    // getCustomers: build.query({
    //     query: () => `client/customer/all`,
    //     providesTags: ["Customers"]
    // }),
    // getTransactions: build.query({
    //     query: ({ page, pageSize, sort, search }) => ({
    //         url: `client/transaction/all`, method: 'GET', params: {
    //             page, pageSize, sort, search
    //         }
    //     }),
    //     providesTags: ["Transactions"]
    // }),
  }),
});

export const {
  useGetUserQuery,
  useGetBasicStackNewClientQuery,
  useGetBasicStackOMRClientQuery,
  useGetNAFOverdueDataQuery,
  useGetWelcomeCallQuery,
  useGetAssessmentNotFilledQuery,
  useGetSessionStartDateQuery,
  useGetInductionCallQuery,
  useGetUserRatingQuery,
  useGetICLNotFilledQuery,
  useGetStartWeightQuery,
  useGetStartInchQuery,
  useGetStartPhotoQuery,
  useGetHalftimeFeedBackCommonQuery,
  useGetHalftimeCallCommonQuery,
  useGetHalftimeHealthScoreCommonQuery,
  useGetAppNotUpdatedIOSQuery,
  useGetAppNotUpdatedAndroidQuery,
  useGetOnHoldDueDateQuery,
  useGetDraftsQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetLocationsQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashBoardQuery,
} = api;
