import "./App.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import EmployeeTable from "./components/table/table";
import Layout from "./components/layout/layout";

function App() {
 return (
  <Provider store={store}>
   <Layout>
    <EmployeeTable />
   </Layout>
  </Provider>
 );
}

export default App;
