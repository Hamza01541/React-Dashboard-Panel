import { createReducer } from "@reduxjs/toolkit";
import { OrderI } from "../../interfaces";
import { actionI } from "./orders.actions";
import { FETCH_ORDERS_BEGIN, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE, ADD_ORDER_BEGIN, ADD_ORDER_FAILURE, ADD_ORDER_SUCCESS, FETCH_TOTAL_REVENEU_BEGIN, FETCH_TOTAL_REVENEU_FAILURE, FETCH_TOTAL_REVENEU_SUCCESS } from "./orders.actions.const";

interface initialStateI {
    orders: OrderI[];
    loading: boolean;
    totalRevenue: number;
    error: any;
}

const initialState: initialStateI = {
    orders: [],
    totalRevenue: 0,
    loading: false,
    error: null,
}

const orderReducer = createReducer(initialState, builder => {
    builder.addCase(FETCH_ORDERS_BEGIN, (state) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    });
    builder.addCase(FETCH_ORDERS_SUCCESS, (state, action: actionI) => {
        return {
            ...state,
            loading: false,
            orders: action.payload,
        }
    });
    builder.addCase(FETCH_ORDERS_FAILURE, (state, action: actionI) => {
        return {
            ...state,
            loading: true,
            error: action.payload,
        }
    });

    builder.addCase(ADD_ORDER_BEGIN, (state) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    });
    builder.addCase(ADD_ORDER_SUCCESS, (state, action: actionI) => {
        return {
            ...state,
            loading: false,
            error: null,
            orders: [...state.orders, action.payload],
        }
    });

    builder.addCase(ADD_ORDER_FAILURE, (state, action: actionI) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        }
    });

    builder.addCase(FETCH_TOTAL_REVENEU_BEGIN, (state) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    });

    builder.addCase(FETCH_TOTAL_REVENEU_SUCCESS, (state, action: actionI) => {
        return {
            ...state,
            loading: false,
            error: null,
            totalRevenue: action.payload,
        }
    });

    builder.addCase(FETCH_TOTAL_REVENEU_FAILURE, (state, action: actionI) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        }
    });
});

export default orderReducer;
