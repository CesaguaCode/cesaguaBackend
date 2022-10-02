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
  private getConnection(): Connection {
    return this.connection;
  }

  /**
   * This method execute all the stored procedures.
   * @param procedure Stored procedure to execute.
   * @param params  Array of params to set the procedure.
   * @returns Result of execution.
   */
  public async executeProcedure(procedure: string, params?: Array<any>) {
    return await this.getConnection()
      .promise()
      .query(`CALL ${procedure}`, params)
      .then((data: any) => {
        return { state: 200, data: data[0] };
      })
      .catch((err) => {
        console.log(err.sqlMessage);
        return { state: 400, data: err.sqlMessage };
      });
  }
}
