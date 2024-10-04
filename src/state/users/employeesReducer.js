import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 employees: [
  {
   id: 1,
   name: "Darlene Robertson",
   email: "trungkienspktnd@gamail.com",
   status: "Free",
   role: "Reporter",
  },
  {
   id: 2,
   name: "Cody Fisher",
   email: "tienlapspktnd@gmail.com",
   status: "Working",
   role: "Sales Manager",
  },
  {
   id: 3,
   name: "Savannah Nguyen",
   email: "manhhachkt08@gmail.com",
   status: "Working",
   role: "Marketer",
  },
  {
   id: 4,
   name: "Jenny Wilson",
   email: "danghoang87hl@gmail.com",
   status: "Busy",
   role: "Bot Editor",
  },
  {
   id: 5,
   name: "Cameron Williamson",
   email: "ckctm12@gmail.com",
   status: "Working",
   role: "PPC Expert",
  },
 ],
 searchQuery: "",
 sortConfig: {
  key: null,
  direction: "asc",
 },
};

const employeesSlice = createSlice({
 name: "employees",
 initialState,
 reducers: {
  addEmployee: (state, action) => {
   state.employees.push({ ...action.payload, id: Date.now() });
  },
  updateEmployee: (state, action) => {
   const index = state.employees.findIndex(
    (emp) => emp.id === action.payload.id
   );
   if (index !== -1) {
    state.employees[index] = action.payload;
   }
  },
  deleteEmployee: (state, action) => {
   state.employees = state.employees.filter((emp) => emp.id !== action.payload);
  },
  setSearchQuery: (state, action) => {
   state.searchQuery = action.payload;
  },
  setSortConfig: (state, action) => {
   state.sortConfig = action.payload;
  },
 },
});

export const {
 addEmployee,
 updateEmployee,
 deleteEmployee,
 setSearchQuery,
 setSortConfig,
} = employeesSlice.actions;
export default employeesSlice.reducer;
