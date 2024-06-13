import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PaymentType } from "../paytype";
import { TowService } from "./tow_service.entity";
import { Customer } from "./customer.entity";
import { History } from "./history.entity"

@Entity()
export class Payment{
    @PrimaryGeneratedColumn()
    private payment_id:number;


    @OneToOne(()=>TowService)
    @JoinColumn({name:'tow_service_id'})
    private tow_service:TowService;

    @ManyToOne(()=>Customer)
    @JoinColumn({name:'customer_id'})
    private customer:Customer;

    @Column({
        type:'enum',
        enum:PaymentType
    })
    private payment_method:PaymentType;

    @Column('decimal', { precision: 10, scale: 2 })
    private payment_amount:number;

    @CreateDateColumn()
    private payment_received_at:Date;

    @ManyToOne(()=>History)
    private history:History

	constructor($payment_id: number, $tow_service: TowService, $customer: Customer, $payment_method: PaymentType,
         $payment_amount: number, $payment_received_at: Date, $history:History) {
		this.payment_id = $payment_id;
		this.tow_service = $tow_service;
		this.customer = $customer;
		this.payment_method = $payment_method;
		this.payment_amount = $payment_amount;
		this.payment_received_at = $payment_received_at;
        this.history = $history
	}


    /**
     * Getter $payment_id
     * @return {number}
     */
	public get $payment_id(): number {
		return this.payment_id;
	}

    /**
     * Getter $tow_service
     * @return {TowService}
     */
	public get $tow_service(): TowService {
		return this.tow_service;
	}

    /**
     * Getter $customer
     * @return {Customer}
     */
	public get $customer(): Customer {
		return this.customer;
	}

    /**
     * Getter $payment_method
     * @return {PaymentType}
     */
	public get $payment_method(): PaymentType {
		return this.payment_method;
	}

    /**
     * Getter $payment_amount
     * @return {number}
     */
	public get $payment_amount(): number {
		return this.payment_amount;
	}

    /**
     * Getter $payment_received_at
     * @return {Date}
     */
	public get $payment_received_at(): Date {
		return this.payment_received_at;
	}

    /**
     * Getter $history
     * @return {History}
     */
	public get $history(): History{
		return this.history;
	}

    /**
     * Setter $payment_id
     * @param {number} value
     */
	public set $payment_id(value: number) {
		this.payment_id = value;
	}

    /**
     * Setter $tow_service
     * @param {TowService} value
     */
	public set $tow_service(value: TowService) {
		this.tow_service = value;
	}

    /**
     * Setter $customer
     * @param {Customer} value
     */
	public set $customer(value: Customer) {
		this.customer = value;
	}

    /**
     * Setter $payment_method
     * @param {PaymentType} value
     */
	public set $payment_method(value: PaymentType) {
		this.payment_method = value;
	}

    /**
     * Setter $payment_amount
     * @param {number} value
     */
	public set $payment_amount(value: number) {
		this.payment_amount = value;
	}

    /**
     * Setter $payment_received_at
     * @param {Date} value
     */
	public set $payment_received_at(value: Date) {
		this.payment_received_at = value;
	}

        /**
     * Setter $history
     * @param {History} value
     */
	public set $history(value: History) {
		this.history = value;
	}






}