import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location{
    @PrimaryGeneratedColumn()
    private location_id:number;

    @Column()
    private longitude:number;

    @Column()
    private latitude:number;

	constructor($location_id: number, $longitude: number, $latitude: number) {
		this.location_id = $location_id;
		this.longitude = $longitude;
		this.latitude = $latitude;
	}


    /**
     * Getter $location_id
     * @return {number}
     */
	public get $location_id(): number {
		return this.location_id;
	}

    /**
     * Getter $longitude
     * @return {number}
     */
	public get $longitude(): number {
		return this.longitude;
	}

    /**
     * Getter $latitude
     * @return {number}
     */
	public get $latitude(): number {
		return this.latitude;
	}

    /**
     * Setter $location_id
     * @param {number} value
     */
	public set $location_id(value: number) {
		this.location_id = value;
	}

    /**
     * Setter $longitude
     * @param {number} value
     */
	public set $longitude(value: number) {
		this.longitude = value;
	}

    /**
     * Setter $latitude
     * @param {number} value
     */
	public set $latitude(value: number) {
		this.latitude = value;
	}

}