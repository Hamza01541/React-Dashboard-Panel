import axios from "axios";
import { API_BASE_URL } from "../constants";
import { OrderI } from "../interfaces";


const orderService = {
    /**
     * Get order list
     * @returns 
     */
    getOrders: async () => {
        const response = await axios.get<OrderI[]>(API_BASE_URL);
        return response.data;
    },

    /**
     * Creates a new order
     * @param order 
     * @returns 
     */
    createOrder: async (order: OrderI) => {
        const response = await axios.post(API_BASE_URL, order);
        return response.data;
    },

    /**
     * Gets total Revenvue amount
     * @returns 
     */
    fetchTotalRevenue: async () => {
        const response = await axios.get<any>(`${API_BASE_URL}/total-revenue`);
        return response.data;
    }
};

export default orderService;