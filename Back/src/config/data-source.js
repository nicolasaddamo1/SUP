import { DataSource } from "typeorm";
import { Sumar, Restar, Dividir, Multiplicar } from "./entities/entities.js";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "VLDM1234",
  database: "henry2",
  synchronize: true,
  logging: false,
  entities: [Sumar, Restar, Multiplicar, Dividir],
  subscribers: [],
  migrations: [],
  dropSchema: false,
});
export default AppDataSource;
