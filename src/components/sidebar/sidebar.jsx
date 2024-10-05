import {
 BarChart2,
 Calendar,
 MessageSquare,
 Bitcoin,
 Menu,
 LogOut,
 Search,
 Table,
 TableOfContents,
 Anchor,
 Settings,
 CircleUserRound,
} from "lucide-react";
import styles from "./sidebar.module.css";

const MENU_ITEMS = [
 { icon: Search, label: "Search", path: "/search" },
 { icon: TableOfContents, label: "Data Tabel", path: "/data" },
 { icon: Table, label: "Product", path: "/product" },
 { icon: BarChart2, label: "Analytics", path: "/analytics" },
 { icon: Calendar, label: "Calendar", path: "/calendar" },
 { icon: MessageSquare, label: "Messenger", path: "/messenger" },
 { icon: Bitcoin, label: "Crypto", path: "/crypto" },
];

const Sidebar = () => {
 return (
  <div className={styles.sidebar}>
   <div className={styles.header}>
    <div className={styles.logo}>
     <CircleUserRound />
    </div>
    <div className={styles.content}>
     <span>Welcome back,</span>
     <h2>Drax</h2>
    </div>
    <Settings />
   </div>

   <nav className={styles.nav}>
    {MENU_ITEMS.map(({ icon: Icon, label, path }) => (
     <span key={path} href={path} className={styles.navItem}>
      <Icon size={20} />
      <span>{label}</span>
      <div className={styles.menu}>
       <Menu />
      </div>
     </span>
    ))}
   </nav>

   <div className={styles.footer}>
    <button className={styles.footerButton}>
     <Anchor size={20} />
     <span>Support</span>
    </button>
    <button className={styles.footerButton}>
     <LogOut size={20} />
     <span>Sign Out</span>
    </button>
   </div>
  </div>
 );
};

export default Sidebar;
