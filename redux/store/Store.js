import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/ReducerCombiner";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(Store);
export default Store;
