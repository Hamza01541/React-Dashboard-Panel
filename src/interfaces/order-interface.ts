export interface OrderI {
    _id?: string;
    orderDate: Date | string;
    contact: string;
    paymentMethod: string;
    businessInformation: string;
    deliverAddress: string;
    containerType: string;
    deliveryHour: string;
    orderDuration: string;
    instructions: string;
    manualOrderNotes: string;
}