import { Timestamp } from "rxjs";
import { TowService } from "./tow_service";
import { Customer } from "./customer";
import { Column, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Review{
    @PrimaryGeneratedColumn()
    private review_id:number;

    @ManyToOne(()=>Customer)
    @JoinColumn({name:'customer_id'})
    private customer:Customer;

    @OneToMany(()=>TowService, tow_service=>tow_service.$review, {cascade:['insert']})
    private tow_service:TowService;

    @Column()
    private rating:number;

    @Column()
    private comment:string;

    @CreateDateColumn()
    private created_at:Date;


	constructor($review_id: number, $customer: Customer, $tow_service: TowService, $rating: number, $comment: string, $created_at: Date) {
		this.review_id = $review_id;
		this.customer = $customer;
		this.tow_service = $tow_service;
		this.rating = $rating;
		this.comment = $comment;
		this.created_at = $created_at;
	}


    /**
     * Getter $review_id
     * @return {number}
     */
	public get $review_id(): number {
		return this.review_id;
	}

    /**
     * Getter $customer
     * @return {Customer}
     */
	public get $customer(): Customer {
		return this.customer;
	}

    /**
     * Getter $tow_service
     * @return {TowService}
     */
	public get $tow_service(): TowService {
		return this.tow_service;
	}

    /**
     * Getter $rating
     * @return {number}
     */
	public get $rating(): number {
		return this.rating;
	}

    /**
     * Getter $comment
     * @return {string}
     */
	public get $comment(): string {
		return this.comment;
	}

    /**
     * Getter $created_at
     * @return {Date}
     */
	public get $created_at(): Date {
		return this.created_at;
	}

    /**
     * Setter $review_id
     * @param {number} value
     */
	public set $review_id(value: number) {
		this.review_id = value;
	}

    /**
     * Setter $customer
     * @param {Customer} value
     */
	public set $customer(value: Customer) {
		this.customer = value;
	}

    /**
     * Setter $tow_service
     * @param {TowService} value
     */
	public set $tow_service(value: TowService) {
		this.tow_service = value;
	}

    /**
     * Setter $rating
     * @param {number} value
     */
	public set $rating(value: number) {
		this.rating = value;
	}

    /**
     * Setter $comment
     * @param {string} value
     */
	public set $comment(value: string) {
		this.comment = value;
	}

    /**
     * Setter $created_at
     * @param {Date} value
     */
	public set $created_at(value: Date) {
		this.created_at = value;
	}

}