import "./App.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import EmployeeTable from "./components/table";

function App() {
 return (
  <Provider store={store}>
   <EmployeeTable />
  </Provider>
 );
}

export default App;
