import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/sales" }),
  // baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL }),
  reducerPath: "salesApi",
  tagTypes: ["BlockCall", "AllLeadData"],
  endpoints: (build) => ({
    getBlockCall: build.query({
      query: () => `/block_call.son`,
      providesTags: ["BlockCall"],
    }),
    getAllLeadData: build.query({
      query: (params) => {
        // console.log('fdsf',params);
        return {
          url: `/all_lead_table_data.json`,
          params,
        };
      },
      providesTags: ["AllLeadData"],
    }),
  }),
});

export const { useLazyGetBlockCallQuery, useLazyGetAllLeadDataQuery } = api;
