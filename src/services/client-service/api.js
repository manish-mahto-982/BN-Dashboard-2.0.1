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
      query: () => `/induction-flow/naf_overdue_data.json`,
      providesTags: ["WelcomeCall"],
    }),
    getUserRating: build.query({
      query: () => `/rating-feedback/rating_feedback.json`,
      providesTags: ["UserRating"],
    }),
    getStartWeight: build.query({
      query: () => `/induction-flow/start_weight_data.json`,
      providesTags: ["StartWeight"],
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
    getOnHoldDueDate: build.query({
      query: () => "/overall-pending/get_onhold_due_data.json",
      providesTags: ["OnHoldDueDate"],
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
  useGetUserRatingQuery,
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
