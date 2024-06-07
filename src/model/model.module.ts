import { Module } from "@nestjs/common";
import { Customer } from "./customer";

@Module({
    imports:[Customer]
})
export class ModelModule{

}