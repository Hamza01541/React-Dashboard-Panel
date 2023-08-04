import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import orderReducer from "./orders/orders.reducers";
import deliveryDetailsReducer from "./delivery/delivery.reducers";

const store = configureStore({
    reducer: {
        orders: orderReducer,
        deliveryDetails: deliveryDetailsReducer,
    },
    middleware: [thunkMiddleware],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;