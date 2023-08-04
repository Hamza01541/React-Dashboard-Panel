import Tick from "../../assets/icons/tick.svg";
import Cross from "../../assets/icons/cross.svg";
import Delivered from "../../assets/icons/package-delivered.svg";
import NotDelivered from "../../assets/icons/package-undelivered.svg";
import { useState } from "react";
import { DeliveryDetails } from "../../interfaces";
import "./table.css";

const TableComponent = (props: any) => {
  const [viewAll, setViewAll] = useState<boolean>(false);
  const deliveryData: DeliveryDetails[] = props.deliveryData;

  return (
    <div>
      <div className="d-flex justify-content-between overview-detail">
        <span>Deliveries</span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setViewAll(!viewAll)}
        >
          {viewAll ? "Show less" : "View all"}
        </span>
      </div>
      {/* table container */}
      <div className="deliveries-table">
        <table>
          <tbody>
            {deliveryData?.length &&
              deliveryData
                .slice(0, viewAll ? deliveryData.length : 4)
                .map((data: DeliveryDetails, index: number) => (
                  <tr key={index}>
                    <td>
                      <div className="status-icon">
                        {data.status === "Active" ||
                        data.status === "Delivered" ? (
                          <img src={Delivered} alt="" />
                        ) : (
                          <img src={NotDelivered} alt="" />
                        )}
                      </div>
                    </td>
                    <td>
                      <span>{data.deliverTo},</span>
                      <span className="sub-text">{data.location}</span>
                    </td>
                    <td>
                      <span className="distance">{data.distance}</span>
                    </td>
                    <td>
                      <span>{data.deliveryTime}</span>
                    </td>
                    <td>
                      <div className={data.status === "Active" || data.status === "Delivered" ? 'correct-icon': 'cross-icon'}>
                        {data.status === "Active" || data.status === "Delivered" ? (
                          <img src={Tick} alt="" />
                        ) : (
                          <>
                         <div className=".cross-icon"> <img src={Cross} alt="" /></div>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
