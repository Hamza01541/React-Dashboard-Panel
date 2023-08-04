import "./layout.css";
import Logo from "../../assets/images/logo.svg";
import DashboardIcon from "../../assets/icons/dashboard.svg";
import OrdersIcon from "../../assets/icons/orders.svg";
import { useNavigate } from "react-router-dom";

const SidebarComponent = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      title: "Dashboard",
      icon: DashboardIcon,
      path: "/",
    },
    {
      title: "Orders",
      icon: OrdersIcon,
      path: "/orders",
    },
  ];

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" onClick={() => navigate('')} />
      </div>
      <div className="menuItems">
        {menuItems.map((item) => (
          <img
            key={item.title}
            src={item.icon}
            alt="icon"
            onClick={() => handleItemClick(item.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;
