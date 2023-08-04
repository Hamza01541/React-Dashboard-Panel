import { OrderI } from "../../interfaces";
import { FETCH_ORDERS_BEGIN, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE, ADD_ORDER_BEGIN, ADD_ORDER_FAILURE, ADD_ORDER_SUCCESS, FETCH_TOTAL_REVENEU_BEGIN, FETCH_TOTAL_REVENEU_FAILURE, FETCH_TOTAL_REVENEU_SUCCESS } from "./orders.actions.const";

export interface actionI {
    type: string;
    payload?: any;
} 

export const fetchOrdersBegin = () => ({
    type: FETCH_ORDERS_BEGIN,
});

export const fetchOrdersSuccess = (orders: OrderI[]) => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: orders
});

export const fetchOrdersFailure = (error: any) => ({
    type: FETCH_ORDERS_FAILURE,
    payload: error
});


export const addOrderBegins = () => ({
    type: ADD_ORDER_BEGIN,
});

export const addOrderSuccess = (order: OrderI) => ({
    type: ADD_ORDER_SUCCESS,
    payload: order
});

export const addOrderFailure = (error: any) => ({
    type: ADD_ORDER_FAILURE,
    payload: error
});

export const fetchTotalRevenueBegin = () => ({
    type: FETCH_TOTAL_REVENEU_BEGIN,
});

export const fetchTotalRevenueSuccess = (totalRevenue: number) => ({
    type: FETCH_TOTAL_REVENEU_SUCCESS,
    payload: totalRevenue
});

export const fetchTotalRevenueFailure = (error: any) => ({
    type: FETCH_TOTAL_REVENEU_FAILURE,
    payload: error
});