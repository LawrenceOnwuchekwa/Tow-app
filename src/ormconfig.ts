import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file located in src directory
dotenv.config({ path: path.resolve(__dirname, 'src', '.env') });

const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false, // Disable automatic schema synchronization
    migrationsRun: false, // Disable automatic migration execution 
    logging: false,
    entities: ["src/model/**/*.ts"],
    migrations: ["src/db/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
};

const AppDataSource = new DataSource(dataSourceOptions);

export default AppDataSource;
