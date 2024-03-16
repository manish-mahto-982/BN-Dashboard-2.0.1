import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "src/features/global/slice";
import { api } from "src/services/client-service/api";
import { api as salesApi } from "src/services/sales/api";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
    [salesApi.reducerPath]: salesApi.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware, salesApi.middleware),
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import globalReducer from "src/features/global/slice";
// import { api  as clientServiceApi} from "src/services/client-service/api";
// import { api  as clientDetailsApi} from "src/services/client-details/api";

// const store = configureStore({
//     reducer: {
//         global: globalReducer,
//         [clientServiceApi.reducerPath]: clientServiceApi.reducer,
//         [clientDetailsApi.reducerPath]: clientDetailsApi.reducer,
//     },
//     middleware: (gDM) => gDM().concat(clientServiceApi.middleware,clientDetailsApi.middleware)
// })

// export default store;
