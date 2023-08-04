import axios from "axios";
import { API_BASE_URL } from "../constants";

const deliveryService = {
    /**
     * Gets Delivery list
     * @returns 
     */
    getDeliveryDetails: async () => {
        const url = `${API_BASE_URL}/delivery-details`;
        const response = await axios.get<any>(url);
        return response.data;
    },
};

export default deliveryService;