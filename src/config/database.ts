import mysql2, { Connection } from "mysql2";

export default class DataBase {

  /**
   * Database connection
   */
  private connection: Connection;

  constructor() {
    this.connection = mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
    });
  }

  /**
   * This method create returns the configured connection
   * @returns The configured connection
   */
  public getConnection() : Connection {
    return this.connection;
  }
}