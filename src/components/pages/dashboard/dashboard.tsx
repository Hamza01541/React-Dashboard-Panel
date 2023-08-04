import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import orderService from "../../../services/orderService";
import MapComponent from "../../map/map";
import "./dashboard.css";
import { NEW_ORDER_ROUTE } from "../../../constants";
import Reports from "../../../assets/icons/reports.svg";
import BarChart from "../../charts/barChart";
import SummaryComponent from "../../layout/summary";
import deliveryService from "../../../services/deliveryService";
import { DeliveryDetails } from "../../../interfaces";
import ProgressBar from "../../charts/progressbar";
import TableComponent from "../../table/table";
import {
  fetchOrdersBegin,
  fetchOrdersFailure,
  fetchOrdersSuccess,
  fetchTotalRevenueBegin,
  fetchTotalRevenueFailure,
  fetchTotalRevenueSuccess,
} from "../../../store/orders/orders.actions";
import {
  fetchDeliveryDetailsBegin,
  fetchDeliveryDetailsFailure,
  fetchDeliveryDetailsSuccess,
} from "../../../store/delivery/delivery.actions";

const DashboardComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deliveryData, setDeliveryData] = useState<DeliveryDetails[]>([]);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [deliveredOrders, setDeliveredOrders] = useState<number>(512);
  const [dispatchedOrders, setDispatchedOrders] = useState<number>(22);
  const [deliveredOrdersAvg, setDeliveredOrdersAvg] = useState<number>(63);
  const [dispatchedOrdersAvg, setDispatchedOrdersAvg] = useState<number>(37);

  useEffect(() => {
    const fetchDeliveryDetails = () => {
      dispatch(fetchDeliveryDetailsBegin());
      deliveryService.getDeliveryDetails().then(
        (res) => {
          dispatch(fetchDeliveryDetailsSuccess(res));
          setDeliveryData(res);
        },
        (error) => {
          console.log("error: ", error);
          fetchDeliveryDetailsFailure(error);
        }
      );
    };

    const fetchOrders = () => {
      dispatch(fetchOrdersBegin());
      return orderService.getOrders().then(
        (res) => {
          dispatch(fetchOrdersSuccess(res));
        },
        (error) => {
          dispatch(fetchOrdersFailure(error));
        }
      );
    };

    const fetchTotalRevenue = () => {
      dispatch(fetchTotalRevenueBegin());
      return orderService.fetchTotalRevenue().then(
        (res) => {
          setTotalRevenue(res[0]?.totalRevenue);
          dispatch(fetchTotalRevenueSuccess(totalRevenue));
        }, error => {
          console.log("error: ", error);
          dispatch(fetchTotalRevenueFailure(error));
        }
      );
    };
    fetchDeliveryDetails();
    fetchOrders();
    fetchTotalRevenue();
  }, [dispatch, totalRevenue]);

  return (
    <div className="content-wrapper">
      <div>
        <div className="col-12 col-lg-12 row">
          <div className="col-6 col-lg-6">

            {/* image container */}
            <div className="img-wrapper ">
              <h1>Create new order here.</h1>
              <button onClick={() => navigate(NEW_ORDER_ROUTE)}>
                Create Order
              </button>
            </div>

            {/* charts */}
            <div className="chart-conatiner ">
              <div className="bar-chart">
                <div className="reports-wrapper">
                  <img src={Reports} alt="" />
                  <h6 className="mb-0 mx-2 report">Reports</h6>
                  <h6 className="mb-0 mx-2">Weekly</h6>
                </div>
                <BarChart />
              </div>

              <div className="TotalAmount" style={{ width: 173, height: 238, position: 'relative' }}>
                <div className="pie-card" />
                <div className="TotalAmount" style={{ left: 25, top: 170, position: 'absolute', color: '#383838', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Total Amount</div>
                <div className="0122" style={{ left: 25, top: 203, position: 'absolute', color: '#383838', fontSize: 14, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>{totalRevenue}</div>
                <div style={{ left: 139, top: 203, position: 'absolute', color: '#383838', fontSize: 14, fontFamily: 'Orbitron', fontWeight: '700', wordWrap: 'break-word' }}>€</div>

                <div className="pie-chart" >
                  <ProgressBar />
                </div>
              </div>
            </div>

            {/* overview detail */}
            <div>
              <TableComponent deliveryData={deliveryData} />
            </div>
          </div>

          <div className="col-6 col-lg-6">
            <div className="Old-summary">
              <SummaryComponent
                deliveredOrders={deliveredOrders}
                dispatchedOrders={dispatchedOrders}
                deliveredOrdersAvg={deliveredOrdersAvg}
                dispatchedOrdersAvg={dispatchedOrdersAvg} />
            </div>

            <div className="map-dashboard">
              <div className="map-title"> Your Orders</div>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
