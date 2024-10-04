// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./users/employeesReducer";

export const store = configureStore({
 reducer: {
  employees: employeesReducer,
 },
});
