import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ORDERS_ROUTE } from "../../../constants";
import { OrderI } from "../../../interfaces";
import orderService from "../../../services/orderService";
import {
  addOrderBegins,
  addOrderFailure,
  addOrderSuccess,
} from "../../../store/orders/orders.actions";
import "./orders.css";

export const NewOrderComponent = () => {
  const navigate = useNavigate();
  const [orderForm, setOrderForm] = useState<OrderI>({
    orderDate: "",
    contact: "",
    paymentMethod: "",
    businessInformation: "",
    deliverAddress: "",
    containerType: "",
    deliveryHours: "",
    orderDuration: "",
    instructions: "",
    manualOrderNotes: "",
  });

  const dispatch = useDispatch();

  function handleSubmit(event: OrderI, { resetForm }: any) {
    setOrderForm(event);
    dispatch(addOrderBegins());
    return orderService.createOrder(event).then(
      (res) => {
        dispatch(addOrderSuccess(res));
        navigate(ORDERS_ROUTE);
        resetForm();
      },
      (error) => {
        dispatch(addOrderFailure(error));
        console.log("error: ", error);
      }
    );
  }

  return (
    <>
      <Formik initialValues={orderForm} onSubmit={handleSubmit}>
        <Form className="d-flex flex-column" action="get">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 ">Create Order</h5>
            <div className="orders-btn-wrapper">
              <button
                className="btn"
                type="button"
                onClick={() => navigate(ORDERS_ROUTE)}
              >
                Cancel
              </button>
              <button className="btn ms-2 create-order-btn" type="submit">
                Create Order
              </button>
            </div>
          </div>

          <div className="card new-order-card w-100">
            <div className="d-flex">
              <h6 className="order-information-title">Order Information</h6>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="OrderDate" className="form-label mb-1">
                    Order Date
                  </label>
                  <Field
                    type="date"
                    className="form-control"
                    id="OrderDate"
                    name="orderDate"
                    placeholder="Order Date"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="Contact" className="form-label mb-1">
                    Contact
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="Contact"
                    name="contact"
                    placeholder="Contact"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="PaymentMethod" className="form-label mb-1">
                    Payment Method
                  </label>
                  <Field
                    as="select"
                    className="form-select"
                    name="paymentMethod"
                    required
                  >
                    <option value="" disabled>
                      Select Type
                    </option>
                    <option value="cashOnDelivery">Cash On Delivery</option>
                    <option value="online">Online</option>
                  </Field>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label
                    htmlFor="BusinessInformation"
                    className="form-label mb-1"
                  >
                    Business Information
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="BusinessInformation"
                    name="businessInformation"
                    placeholder="Business Information"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-4">
                  <label htmlFor="DeliverAddress" className="form-label mb-1">
                    Deliver Address
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="DeliverAddress"
                    name="deliverAddress"
                    placeholder="Deliver Address"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="ContainerType" className="form-label mb-1">
                    Container Type
                  </label>
                  <Field
                    as="select"
                    className="form-select"
                    name="containerType"
                    required
                  >
                    <option value="" disabled>
                      Select Type
                    </option>
                    <option value="small">Small Container</option>
                    <option value="large">Large Container</option>
                  </Field>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="DeliveryHours" className="form-label mb-1">
                    Delivery Hours
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="DeliveryHours"
                    name="deliveryHours"
                    placeholder="Delivery Hours"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="OrderDuration" className="form-label mb-1">
                    Order Duration{" "}
                    <span className="text-muted">
                      (A fixed amount for each additional 7 days*)
                    </span>
                  </label>
                  <Field
                    as="select"
                    className="form-select"
                    name="orderDuration"
                    required
                  >
                    <option value="" disabled>
                      Select Order Duration
                    </option>
                    <option value="14-400">14 Days- 400€</option>
                    <option value="7-800">7 Days- 800€</option>
                  </Field>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="Instructions" className="form-label mb-1">
                    Instruction regarding order pickup{" "}
                    <span className="text-muted">(Optional)</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="Instructions"
                    name="instructions"
                    placeholder="Pickup hours"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-4">
                  <label htmlFor="ManualOrderNotes" className="form-label mb-1">
                    Manual Order Notes
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="ManualOrderNotes"
                    name="manualOrderNotes"
                    placeholder="Manual Order Notes"
                  />
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default NewOrderComponent;
