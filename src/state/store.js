import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./users/employeesReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
 key: "root",
 storage,
};

const rootReducer = combineReducers({
 employees: employeesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: {
    ignoredActions: [
     "persist/PERSIST",
     "persist/REHYDRATE",
     "persist/REGISTER",
    ],
   },
  }),
});

export const persistor = persistStore(store);
