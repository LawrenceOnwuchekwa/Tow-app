import { Timestamp } from "rxjs";

export class Review implements Timestamp<number>{
    value: number;
    timestamp: number;
    #review_id:number;
    //Add customer id
    //Add tow service id

    #rating:number;
    #comment:string;
    #created_at:Date;
}