import { CreateDateColumn, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { TowService } from "./tow_service";
import { Payment } from "./payment";

export class History{

    @PrimaryGeneratedColumn()
    private history_id:number;

    @CreateDateColumn()
    private logs:Date;

    @ManyToOne(()=>User)
    @JoinColumn({name:'user_id'})
    private user:User;

    @OneToMany(()=>TowService,tow_service=>tow_service.$history)
    private tow_service:TowService[];

    @OneToMany(()=>Payment,Payment=>Payment.$history, {cascade:['insert']})
    private payment:Payment[];


	constructor($history_id: number, $logs: Date, $user: User, $tow_service: TowService[], $payment: Payment[]) {
		this.history_id = $history_id;
		this.logs = $logs;
		this.user = $user;
		this.tow_service = $tow_service;
		this.payment = $payment;
	}


    /**
     * Getter $history_id
     * @return {number}
     */
	public get $history_id(): number {
		return this.history_id;
	}

    /**
     * Getter $logs
     * @return {Date}
     */
	public get $logs(): Date {
		return this.logs;
	}

    /**
     * Getter $user
     * @return {User}
     */
	public get $user(): User {
		return this.user;
	}

    /**
     * Getter $tow_service
     * @return {TowService[]}
     */
	public get $tow_service(): TowService[] {
		return this.tow_service;
	}

    /**
     * Getter $payment
     * @return {Payment[]}
     */
	public get $payment(): Payment[] {
		return this.payment;
	}

    /**
     * Setter $history_id
     * @param {number} value
     */
	public set $history_id(value: number) {
		this.history_id = value;
	}

    /**
     * Setter $logs
     * @param {Date} value
     */
	public set $logs(value: Date) {
		this.logs = value;
	}

    /**
     * Setter $user
     * @param {User} value
     */
	public set $user(value: User) {
		this.user = value;
	}

    /**
     * Setter $tow_service
     * @param {TowService[]} value
     */
	public set $tow_service(value: TowService[]) {
		this.tow_service = value;
	}

    /**
     * Setter $payment
     * @param {Payment[]} value
     */
	public set $payment(value: Payment[]) {
		this.payment = value;
	}

}