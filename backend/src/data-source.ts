import { DataSource } from "typeorm";

require('dotenv').config()


export const AppDataSource = new DataSource({

  type: "postgres",
  url: process.env.DB_URI_DEV,

  synchronize: false,
  logging: true,

  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"]
});


AppDataSource.initialize()
  .then(() => {
    console.log("Data Source Iniciado")
  })
  .catch((err) => {
    console.log("Erro durante a inicialização do Data Source", err)
  });