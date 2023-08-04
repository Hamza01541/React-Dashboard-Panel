export class Order {
    orderDate: Date | string = '';
    contact: string = '';
    paymentMethod: string = '';
    businessInformation: string = '';
    deliverAddress: string = '';
    containerType: string = '';
    deliveryHours: string = '';
    orderDuration: string = '';
    orderPrice: number = 0;
    instructions?: string = '';
    manualOrderNotes?: string = '';
}