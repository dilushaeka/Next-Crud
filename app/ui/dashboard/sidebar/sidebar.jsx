import styles from "./sidebar.module.css"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md"

import MenuLink from "./menuLink/menuLink"


    const menuItems = [
        {
            title: "Pages",
            list: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <MdDashboard />,
                },
                {
                    title: "Users",
                    path: "/dashboard/users",
                    icon: <MdSupervisedUserCircle />,
                },
                {
                    title: "Products",
                    path: "/dashboard/products",
                    icon: <MdShoppingBag />,
                },
                {
                    title: "Transactions",
                    path: "/dashboard/transactions",
                    icon: <MdAttachMoney />,
                },
            ],
        },
        {
            title: "User",
            list: [
                {
                    title: "Settings",
                    path: "/dashboard/settings",
                    icon: <MdOutlineSettings />,
                },
                {
                    title: "Help",
                    path: "/dashboard/help",
                    icon: <MdHelpCenter />,
                },
            ],
        },
    ];

const Sidebar = async () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img src="/noavatar.png" className={styles.userImage} alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.userName}>Kavindu</span>
                    <span className={styles.userTitle}>Developer</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}

                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
            <MdLogout/>
                LogOut
            </button>
            
        </div>
    );
};
export default Sidebar;