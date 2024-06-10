import { JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Vehicle } from "./vehicle";
import { TowService } from "./tow_service";
import { Role } from "./role";
import { History } from "./history";
import { Customer } from "./customer";

export class TowDriver extends User{

    @PrimaryGeneratedColumn()
    private tow_driver_id:number;

    @ManyToOne(()=>User)
    @JoinColumn({name:'user_id'})
    private user: User;

    @OneToMany(()=>Vehicle, vehicle=>vehicle.$tow_driver,{cascade:['insert']})
    private vehicle:Vehicle[];

    @OneToMany(()=>TowService, tow_service => tow_service.$tow_driver,{cascade:['insert']})
    private tow_services:TowService[];


	constructor(user_id:number,name:string,username:string,email:string,phoneNumber:string,role:Role,
        histories:History[],customer:Customer[], tow_driver:TowDriver[],$tow_driver_id: number, $user: User, $vehicle: Vehicle[], $tow_services: TowService[]) {
        super(user_id,name,username,email,phoneNumber,role,histories,customer,tow_driver);
		this.tow_driver_id = $tow_driver_id;
		this.user = $user;
		this.vehicle = $vehicle;
		this.tow_services = $tow_services;
	}



    /**
     * Getter $tow_driver_id
     * @return {number}
     */
	public get $tow_driver_id(): number {
		return this.tow_driver_id;
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
     * Setter $tow_driver_id
     * @param {number} value
     */
	public set $tow_driver_id(value: number) {
		this.tow_driver_id = value;
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