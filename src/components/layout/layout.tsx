import HeaderComponent from "./header";
import SidebarComponent from "./sidebar";
import "./layout.css";
import { Route, Routes } from "react-router-dom";
import DashboardComponent from "../pages/dashboard/dashboard";
import OrdersComponent from "../pages/orders/orders";
import NewOrderComponent from "../pages/orders/new-order";

const LayoutComponent = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <SidebarComponent />
      </div>
      <div className="main">
        <HeaderComponent />
        <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/orders" element={<OrdersComponent />} />
        <Route path="/new-order" element={<NewOrderComponent />} />
      </Routes>
      </div>
    </div>
  );
};

export default LayoutComponent;
