import { InsertQueryBuilder, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Vehicle } from "./vehicle";
import { TowService } from "./tow_service";
import { Role } from "./role";
import { History } from "./history";
import { TowDriver } from "./tow_driver";

export class Customer extends User{

    //One customer can have multiple tow service
    @PrimaryGeneratedColumn()
    private customer_id:number;

    //Man
    @ManyToOne(()=>User)
    @JoinColumn({name:'user_id'})
    private user:User;

    //One customer can have multiple vehicles
    //Biidirectional. Vehicles are aware of the customers
    //Customer
    @OneToMany(()=>Vehicle, vehicle => vehicle.$customer, {cascade:['insert']})
    private vehicle:Vehicle[];

    @OneToMany(()=>TowService, tow_service=>tow_service.$customer, {cascade:['insert']})
    private tow_services:TowService[];


	constructor(user_id:number,name:string,username:string,email:string,phoneNumber:string,
        role:Role,histories:History[], customer:Customer[], tow_driver:TowDriver[],
        $customer_id: number, $user: User, $vehicle: Vehicle[], $tow_services: TowService[]) {
        super(user_id,name,username,email,phoneNumber,role,histories,customer,tow_driver);
		this.customer_id = $customer_id;
		this.user = $user;
		this.vehicle = $vehicle;
		this.tow_services = $tow_services;
	}


    /**
     * Getter $customer_id
     * @return {number}
     */
	public get $customer_id(): number {
		return this.customer_id;
	}

    /**
     * Getter $user
     * @return {User}
     */
	public get $user(): User {
		return this.user;
	}

    /**
     * Getter $vehicle
     * @return {Vehicle[]}
     */
	public get $vehicle(): Vehicle[] {
		return this.vehicle;
	}

    /**
     * Getter $tow_services
     * @return {TowService[]}
     */
	public get $tow_services(): TowService[] {
		return this.tow_services;
	}

    /**
     * Setter $customer_id
     * @param {number} value
     */
	public set $customer_id(value: number) {
		this.customer_id = value;
	}

    /**
     * Setter $user
     * @param {User} value
     */
	public set $user(value: User) {
		this.user = value;
	}

    /**
     * Setter $vehicle
     * @param {Vehicle[]} value
     */
	public set $vehicle(value: Vehicle[]) {
		this.vehicle = value;
	}

    /**
     * Setter $tow_services
     * @param {TowService[]} value
     */
	public set $tow_services(value: TowService[]) {
		this.tow_services = value;
	}
    

}