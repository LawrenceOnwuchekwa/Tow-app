import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../role";
import { TowDriver } from "./tow_driver.entity";
import { History } from "./history.entity";
import { Customer } from "./customer.entity";



@Entity()
export class User{

    @PrimaryGeneratedColumn()
    private user_id:number;

    @Column()
    private name:string;

    @Column()
    private username:string;

    @Column()
    private email:string;

    @Column()
    private phoneNumber:string;

    @Column({
        type:'enum',
        enum:Role,
        default:Role.User
    })
    private role:Role;

    @OneToMany(()=>History, history=>history.$user, {cascade:['insert']})
    private histories:History[];

    @OneToMany(()=>Customer,customer=>customer.$user, {cascade:['insert']})
    private customer:Customer[];

    @OneToMany(()=>TowDriver,tow_driver=>tow_driver.$user, {cascade:['insert']})
    private tow_driver:TowDriver[];


    constructor($user_id:number,$name:string,$username:string,$email:string,$phoneNumber:string,
        role:Role, $histories:History[],$customer:Customer[],$tow_driver:TowDriver[]){
        this.user_id = $user_id;
        this.name = $name;
        this.username = $username;
        this.email = $email;
        this.phoneNumber = $phoneNumber;
        this.role = Role.User;
        this.histories = $histories;
        this.customer = $customer;
        this.tow_driver = $tow_driver
    }


    /**
     * Getter $customer
     * @return {Customer[]}
     */
	public get $customer(): Customer[] {
		return this.customer;
	}

    /**
     * Setter $customer
     * @param {Customer[]} value
     */
	public set $customer(value: Customer[]) {
		this.customer = value;
	}


    /**
     * Getter $tow_driver
     * @return {TowDriver[]}
     */
	public get $tow_driver(): TowDriver[] {
		return this.tow_driver;
	}

    /**
     * Setter $tow_driver
     * @param {TowDriver[]} value
     */
	public set $tow_driver(value: TowDriver[]) {
		this.tow_driver = value;
	}


    /**
     * Getter $user_id
     * @return {number}
     */
	public get $user_id(): number {
		return this.user_id;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $username
     * @return {string}
     */
	public get $username(): string {
		return this.username;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $phoneNumber
     * @return {string}
     */
	public get $phoneNumber(): string {
		return this.phoneNumber;
	}

    /**
     * Getter $role
     * @return {Role}
     */
	public get $role(): Role {
		return this.role;
	}

    /**
     * Setter $user_id
     * @param {number} value
     */
	public set $user_id(value: number) {
		this.user_id = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set $username(value: string) {
		this.username = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $phoneNumber
     * @param {string} value
     */
	public set $phoneNumber(value: string) {
		this.phoneNumber = value;
	}

    /**
     * Setter $role
     * @param {Role} value
     */
	public set $role(value: Role) {
		this.role = value;
	}
    

    /**
     * Getter $histories
     * @return {History[]}
     */
	public get $histories(): History[] {
		return this.histories;
	}

    /**
     * Setter $histories
     * @param {History[]} value
     */
	public set $histories(value: History[]) {
		this.histories = value;
	}

    



}
