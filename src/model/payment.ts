import { PaymentType } from "./paytype";

export class Payment{
    #payment_id:number;
    //add tow_service id
    //add customer id
    #payment_method:PaymentType;
    #payment_amount:number;
    #payment_received_at:Date;
}