// components/Sidebar/Sidebar.jsx
import { useState } from "react";
import {
 Users,
 BarChart2,
 Calendar,
 MessageSquare,
 Bitcoin,
 Menu,
 LogOut,
 ChevronLeft,
 ChevronRight,
} from "lucide-react";
import styles from "./sidebar.module.css";

const MENU_ITEMS = [
 { icon: Users, label: "Employee", path: "/employee", active: true },
 { icon: BarChart2, label: "Analytics", path: "/analytics" },
 { icon: Calendar, label: "Calendar", path: "/calendar" },
 { icon: MessageSquare, label: "Messenger", path: "/messenger" },
 { icon: Bitcoin, label: "Crypto", path: "/crypto" },
];

const Sidebar = () => {
 const [activeItem, setActiveItem] = useState("Employee");

 return (
  <div className={styles.sidebar}>
   <div className={styles.header}>
    <div className={styles.logo}>
     <Menu size={24} />
     <span>Dashboard</span>
    </div>
   </div>

   <nav className={styles.nav}>
    {MENU_ITEMS.map(({ icon: Icon, label, path }) => (
     <a
      key={path}
      href={path}
      className={`${styles.navItem} ${
       activeItem === label ? styles.active : ""
      }`}
      onClick={(e) => {
       e.preventDefault();
       setActiveItem(label);
      }}
     >
      <Icon size={20} />
      <span>{label}</span>
     </a>
    ))}
   </nav>

   <div className={styles.footer}>
    <button className={styles.signOutButton}>
     <LogOut size={20} />
     <span>Sign Out</span>
    </button>
   </div>
  </div>
 );
};

export default Sidebar;
