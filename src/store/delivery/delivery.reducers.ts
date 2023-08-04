import { createReducer } from "@reduxjs/toolkit";
import { actionI } from "./delivery.actions";
import { FETCH_DELIVERY_DETAILS_BEGIN, FETCH_DELIVERY_DETAILS_FAILURE, FETCH_DELIVERY_DETAILS_SUCCESS } from "./delivery.actions.const";

interface initialStateI {
    deliveryDetails: any[];
    loading: boolean;
    error: any;
}

const initialState: initialStateI = {
    deliveryDetails: [],
    loading: false,
    error: null,
}

const deliveryDetailsReducer = createReducer(initialState, builder => {
    builder.addCase(FETCH_DELIVERY_DETAILS_BEGIN, (state) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    });
    builder.addCase(FETCH_DELIVERY_DETAILS_SUCCESS, (state, action: actionI) => {
        return {
            ...state,
            loading: false,
            deliveryDetails: action.payload,
        }
    });
    builder.addCase(FETCH_DELIVERY_DETAILS_FAILURE, (state, action: actionI) => {
        return {
            ...state,
            loading: true,
            error: action.payload,
        }
    });

});

export default deliveryDetailsReducer;
