import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import EmployeeTable from "./components/table/table";
import Layout from "./components/layout/layout";
import { PersistGate } from "redux-persist/integration/react";

function App() {
 return (
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <Layout>
     <EmployeeTable />
    </Layout>
   </PersistGate>
  </Provider>
 );
}

export default App;
