import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../status";
import { TowDriver } from "./tow_driver.entity";
import { Location } from "./location.entity";
import { Payment } from "./payment.entity";
import { Review } from "./review.entity";
import { Customer } from "./customer.entity";
import { History } from "./history.entity"

@Entity()
export class TowService{

    @PrimaryGeneratedColumn()
    private tow_service_id:number;
    //many to one && bidirectional
    @ManyToOne(()=>Customer, customer=>customer.$tow_services)
    @JoinColumn({name:'customer_id'})
    private customer:Customer;

    @ManyToOne(()=>TowDriver,tow_driver=>tow_driver.$tow_services)
    @JoinColumn({name:'tow_driver_id'})
    private tow_driver:TowDriver;

    @ManyToOne(()=>Location)
    @JoinColumn({name:'current_location'})
    private current_location:Location;

    @ManyToOne(()=>Location)
    @JoinColumn({name:'destination_location'})
    private destination:Location

    @OneToOne(()=>Payment,payment => payment.$tow_service, {cascade:['insert']})
    @JoinColumn({name:'payment_id'})
    private payment:Payment

    @Column({
        type:'enum',
        enum:Status
    })
    private status:Status

    @ManyToOne(()=>Review)
    @JoinColumn({name:'review_id'})
    private review:Review[]

    @ManyToOne(()=>History)
    @JoinColumn({name:'history_id'})
    private history:History;

	constructor($tow_service_id: number, $customer: Customer, $tow_driver: TowDriver, $current_location: Location,
        $destination:Location,$payment:Payment,$review:Review[],$history:History) {
		this.tow_service_id = $tow_service_id;
		this.customer = $customer;
		this.tow_driver = $tow_driver;
		this.current_location = $current_location;
        this.destination = $destination;
        this.payment = $payment;
        this.review = $review;
        this.history = $history
	}


    /**
     * Getter $history
     * @return {History}
     */
	public get $history(): History {
		return this.history;
	}

    /**
     * Setter $history
     * @param {History} value
     */
	public set $history(value: History) {
		this.history = value;
	}


    /**
     * Getter $tow_service_id
     * @return {number}
     */
	public get $tow_service_id(): number {
		return this.tow_service_id;
	}

    /**
     * Getter $customer
     * @return {Customer}
     */
	public get $customer(): Customer {
		return this.customer;
	}

    /**
     * Getter $tow_driver
     * @return {TowDriver}
     */
	public get $tow_driver(): TowDriver {
		return this.tow_driver;
	}

  
    /**
     * Getter $current_location
     * @return {Location}
     */
	public get $current_location(): Location {
		return this.current_location;
	}

      /**
     * Getter $destination
     * @return {Location}
     */
	public get $destination(): Location {
		return this.destination;
	}

    /**
     * Getter $payment
     * @return {Payment}
     */
	public get $payment(): Payment {
		return this.payment;
	}

      /**
     * Getter $review
     * @return {Review[]}
     */
	public get $review(): Review[] {
		return this.review;
	}

    /**
     * Setter $tow_service_id
     * @param {number} value
     */
	public set $tow_service_id(value: number) {
		this.tow_service_id = value;
	}

    /**
     * Setter $customer
     * @param {Customer} value
     */
	public set $customer(value: Customer) {
		this.customer = value;
	}

    /**
     * Setter $tow_driver
     * @param {TowDriver} value
     */
	public set $tow_driver(value: TowDriver) {
		this.tow_driver = value;
	}

    /**
     * Setter $current_location
     * @param {Location} value
     */
	public set $current_location(value: Location) {
		this.current_location = value;
	}

    /**
     * Setter $destination
     * @param {Location} value
     */
	public set $destination(value: Location) {
		this.destination = value;
	}

    /**
     * Setter $payment
     * @param {Payment} value
     */
	public set $payment(value: Payment) {
		this.payment = value;
	}

    /**
     * Setter $current_location
     * @param {Review[]} value
     */
	public set $review(value: Review[]) {
		this.review = value;
	}


     
}
