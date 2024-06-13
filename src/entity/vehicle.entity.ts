import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.entity";
import { TowDriver } from "./tow_driver.entity";

@Entity()
export class Vehicle{

    @PrimaryGeneratedColumn()
    private vehicle_id:number;

    @Column()
    private name:string;

    @Column()
    private brand:string;

    @Column()
    private model:string;

    @Column()
    private license_plate:string;

    //Bidirectional relationship between customer and vehicle
    @ManyToOne(()=>Customer, customer => customer.$vehicle)
    @JoinColumn({name:'customer_id'})
    private customer:Customer;

    //Bidirectional relationship between driver and vehicle
    @ManyToOne(()=>TowDriver, tow_driver => tow_driver.$vehicle)
    @JoinColumn({name:'driver_id'})
    private tow_driver:TowDriver;
    




	constructor($vehicle_id:number, $name:string, $brand:string, $model:string, $license_plate:string,
         $customer: Customer, $tow_driver:TowDriver) {
        this.vehicle_id = $vehicle_id;
        this.name = $name;
        this.brand = $brand;
        this.model = $model;
        this.license_plate = $license_plate
		this.customer = $customer;
        this.tow_driver = $tow_driver
	}



    /**
     * Getter $vehicle_id
     * @return {number}
     */
	public get $vehicle_id(): number {
		return this.vehicle_id;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $brand
     * @return {string}
     */
	public get $brand(): string {
		return this.brand;
	}

    /**
     * Getter $model
     * @return {string}
     */
	public get $model(): string {
		return this.model;
	}

    /**
     * Getter $license_plate
     * @return {string}
     */
	public get $license_plate(): string {
		return this.license_plate;
	}


    /**
     * Setter $vehicle_id
     * @param {number} value
     */
	public set $vehicle_id(value: number) {
		this.vehicle_id = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $brand
     * @param {string} value
     */
	public set $brand(value: string) {
		this.brand = value;
	}

    /**
     * Setter $model
     * @param {string} value
     */
	public set $model(value: string) {
		this.model = value;
	}

    /**
     * Setter $license_plate
     * @param {string} value
     */
	public set $license_plate(value: string) {
		this.license_plate = value;
	}


    /**
     * Getter $customer
     * @return {Customer}
     */
	public get $customer(): Customer {
		return this.customer;
	}

    /**
     * Setter $customer
     * @param {Customer} value
     */
	public set $customer(value: Customer) {
		this.customer = value;
	}


    /**
     * Getter $tow_driver
     * @return {TowDriver}
     */
	public get $tow_driver(): TowDriver {
		return this.tow_driver;
	}

    /**
     * Setter $tow_driver
     * @param {TowDriver} value
     */
	public set $tow_driver(value: TowDriver) {
		this.tow_driver = value;
	}
    


}