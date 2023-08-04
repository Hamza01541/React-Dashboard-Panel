import fromAddressImg from "../../../assets/icons/from_address.svg";
import toAddressImg from "../../../assets/icons/to_address.svg";
import { useEffect, useState } from "react";
import orderService from "../../../services/orderService";
import {
  fetchOrdersBegin,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from "../../../store/orders/orders.actions";
import { useDispatch } from "react-redux";
import { OrderI } from "../../../interfaces";
import "./orders.css";
import "leaflet/dist/leaflet.css";
import MapComponent from "../../map/map";

export const OrdersComponent = () => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState<OrderI[]>([]);
  const fetchOrders = () => {
    dispatch(fetchOrdersBegin());
    return orderService.getOrders().then(
      (res: OrderI[]) => {
        setOrders(res);
        dispatch(fetchOrdersSuccess(res));
      },
      (error) => {
        dispatch(fetchOrdersFailure(error));
      }
    );
  };

  useEffect(() => {
    fetchOrders();
  }, [dispatch]);

  return (
    <div className="orders-container">
      <div className="d-flex">
        <div className="left-sidebar">
          <div className="head">
            <h6 className="title">Orders</h6>
          </div>
          <div className="orders-list">
            {orders && orders.map((order: OrderI, index: number) => {
              return (
                <div className="order-detail" key={index}>
                  <span className="order-id">Order ID</span>
                  <span className="id-num">{order._id}</span>

                  {/* from address */}
                  <div className="sub-detail d-flex align-items-center">
                    <div className="icon from">
                      <img alt="" src={fromAddressImg} />
                    </div>
                    <div className="address-detail">
                      <span className="orign">From</span>
                      <span className="address">
                        {order?.businessInformation}
                      </span>
                    </div>
                  </div>
                  {/* To address */}
                  <div className="sub-detail d-flex align-items-center">
                    <div className="icon">
                      <img alt="" src={toAddressImg} />
                    </div>
                    <div className="address-detail">
                      <span className="orign">To</span>
                      <span className="address">{order?.deliverAddress}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="footer">
            <div className="footer-title">
              Order ID
            </div>
          </div>
        </div>
        <div className="map">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default OrdersComponent;
