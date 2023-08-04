import { FETCH_DELIVERY_DETAILS_BEGIN, FETCH_DELIVERY_DETAILS_FAILURE, FETCH_DELIVERY_DETAILS_SUCCESS } from "./delivery.actions.const";

export interface actionI {
    type: string;
    payload?: any;
} 

export const fetchDeliveryDetailsBegin = () => ({
    type: FETCH_DELIVERY_DETAILS_BEGIN,
});

export const fetchDeliveryDetailsSuccess = (deliveryDetails: any) => ({
    type: FETCH_DELIVERY_DETAILS_SUCCESS,
    payload: deliveryDetails
});

export const fetchDeliveryDetailsFailure = (error: any) => ({
    type: FETCH_DELIVERY_DETAILS_FAILURE,
    payload: error
});
