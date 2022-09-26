import DataBase from "../config/database";

export default class TestService {
  private db: DataBase;

  constructor() {
    this.db = new DataBase();
  }

  /**
   * This method allows the creation of tests at the database
   * @param name
   * @returns Number of affected rows
   */
  public async createTest(name: string) {
    const sql = `INSERT INTO tb_tests (name) VALUES ('${name}')`;

    return await this.db
      .getConnection()
      .promise()
      .query(sql)
      .then((data: any) => data[0].affectedRows > 0)
      .catch((err) => false);
  }

  /**
   * This method request the list of tests from the database
   * @returns List of tests
   */
  public async getTests() {
    const sql = `SELECT * FROM tb_tests`;

    const users: any = await this.db.getConnection().promise().query(sql);
    return users[0];
  }

  /**
   * This method request an test to the database passing its id
   * @param id
   * @returns Specific test
   */
  public async getTest(id: number): Promise<any> {
    const sql = `SELECT * FROM tb_tests where id = ${id}`;

    const user: any = await this.db.getConnection().promise().query(sql);
    return user[0][0];
  }
}