// components/Layout/Layout.jsx
import Sidebar from "../sidebar/sidebar";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
 return (
  <div className={styles.layout}>
   <Sidebar />
   <main className={styles.main}>{children}</main>
  </div>
 );
};

export default Layout;