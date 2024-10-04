// components/EmployeeTable/EmployeeTable.jsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
 addEmployee,
 updateEmployee,
 deleteEmployee,
 setSearchQuery,
 setSortConfig,
} from "../state/users/employeesReducer";
import styles from "./table.module.css";

const STATUS_OPTIONS = ["Free", "Working", "Busy", "On Vacation"];
const ROLE_OPTIONS = [
 "Reporter",
 "Sales Manager",
 "Marketer",
 "Bot Editor",
 "PPC Expert",
 "Analyst",
 "Broadcaster",
 "Analytics Admin",
 "Team Editor",
 "Team Owner",
];

const EmployeeTable = () => {
 const dispatch = useDispatch();
 const { employees, searchQuery, sortConfig } = useSelector(
  (state) => state.employees
 );
 const [editingId, setEditingId] = useState(null);
 const [editedEmployee, setEditedEmployee] = useState(null);
 const [newEmployee, setNewEmployee] = useState({
  name: "",
  email: "",
  status: STATUS_OPTIONS[0],
  role: ROLE_OPTIONS[0],
 });

 const handleSort = (key) => {
  const direction =
   sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
  dispatch(setSortConfig({ key, direction }));
 };

 const handleSearch = (e) => {
  dispatch(setSearchQuery(e.target.value));
 };

 const handleAdd = () => {
  if (newEmployee.name && newEmployee.email) {
   dispatch(addEmployee(newEmployee));
   setNewEmployee({
    name: "",
    email: "",
    status: STATUS_OPTIONS[0],
    role: ROLE_OPTIONS[0],
   });
  }
 };

 const handleEdit = (employee) => {
  setEditingId(employee.id);
  setEditedEmployee({ ...employee });
 };

 const handleEditChange = (field, value) => {
  setEditedEmployee((prev) => ({
   ...prev,
   [field]: value,
  }));
 };

 const handleSaveEdit = () => {
  if (editedEmployee) {
   dispatch(updateEmployee(editedEmployee));
   setEditingId(null);
   setEditedEmployee(null);
  }
 };

 const handleCancelEdit = () => {
  setEditingId(null);
  setEditedEmployee(null);
 };

 const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this employee?")) {
   dispatch(deleteEmployee(id));
  }
 };

 const filteredAndSortedEmployees = [...employees]
  .filter(
   (emp) =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a, b) => {
   if (!sortConfig.key) return 0;

   const aValue = a[sortConfig.key];
   const bValue = b[sortConfig.key];

   if (sortConfig.direction === "asc") {
    return aValue.localeCompare(bValue);
   } else {
    return bValue.localeCompare(aValue);
   }
  });

 const renderStatusBadge = (status) => {
  const statusClasses = {
   Free: styles.statusFree,
   Working: styles.statusWorking,
   Busy: styles.statusBusy,
   "On Vacation": styles.statusVacation,
  };

  return (
   <span className={`${styles.statusBadge} ${statusClasses[status]}`}>
    {status}
   </span>
  );
 };

 return (
  <div className={styles.tableContainer}>
   <div className={styles.controls}>
    <input
     type="text"
     placeholder="Search employees..."
     value={searchQuery}
     onChange={handleSearch}
     className={styles.searchInput}
    />
    <div className={styles.addEmployee}>
     <input
      type="text"
      placeholder="Name"
      value={newEmployee.name}
      onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
     />
     <input
      type="email"
      placeholder="Email"
      value={newEmployee.email}
      onChange={(e) =>
       setNewEmployee({ ...newEmployee, email: e.target.value })
      }
     />
     <select
      value={newEmployee.status}
      onChange={(e) =>
       setNewEmployee({ ...newEmployee, status: e.target.value })
      }
      className={styles.select}
     >
      {STATUS_OPTIONS.map((status) => (
       <option key={status} value={status}>
        {status}
       </option>
      ))}
     </select>
     <select
      value={newEmployee.role}
      onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
      className={styles.select}
     >
      {ROLE_OPTIONS.map((role) => (
       <option key={role} value={role}>
        {role}
       </option>
      ))}
     </select>
     <button onClick={handleAdd}>Add Employee</button>
    </div>
   </div>

   <table className={styles.table}>
    <thead>
     <tr>
      <th onClick={() => handleSort("name")}>
       Name{" "}
       {sortConfig.key === "name" &&
        (sortConfig.direction === "asc" ? "↑" : "↓")}
      </th>
      <th onClick={() => handleSort("email")}>
       Email{" "}
       {sortConfig.key === "email" &&
        (sortConfig.direction === "asc" ? "↑" : "↓")}
      </th>
      <th onClick={() => handleSort("status")}>
       Status{" "}
       {sortConfig.key === "status" &&
        (sortConfig.direction === "asc" ? "↑" : "↓")}
      </th>
      <th onClick={() => handleSort("role")}>
       Role{" "}
       {sortConfig.key === "role" &&
        (sortConfig.direction === "asc" ? "↑" : "↓")}
      </th>
      <th>Actions</th>
     </tr>
    </thead>
    <tbody>
     {filteredAndSortedEmployees.map((employee) => (
      <tr key={employee.id}>
       {editingId === employee.id ? (
        <>
         <td>
          <input
           type="text"
           value={editedEmployee.name}
           onChange={(e) => handleEditChange("name", e.target.value)}
          />
         </td>
         <td>
          <input
           type="email"
           value={editedEmployee.email}
           onChange={(e) => handleEditChange("email", e.target.value)}
          />
         </td>
         <td>
          <select
           value={editedEmployee.status}
           onChange={(e) => handleEditChange("status", e.target.value)}
           className={styles.select}
          >
           {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
             {status}
            </option>
           ))}
          </select>
         </td>
         <td>
          <select
           value={editedEmployee.role}
           onChange={(e) => handleEditChange("role", e.target.value)}
           className={styles.select}
          >
           {ROLE_OPTIONS.map((role) => (
            <option key={role} value={role}>
             {role}
            </option>
           ))}
          </select>
         </td>
         <td>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
         </td>
        </>
       ) : (
        <>
         <td>{employee.name}</td>
         <td>{employee.email}</td>
         <td>{renderStatusBadge(employee.status)}</td>
         <td>{employee.role}</td>
         <td>
          <button onClick={() => handleEdit(employee)}>Edit</button>
          <button onClick={() => handleDelete(employee.id)}>Delete</button>
         </td>
        </>
       )}
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default EmployeeTable;
