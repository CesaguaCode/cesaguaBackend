import BaseService from "../utils/baseService";

/**
 * List of the stored procedures of this service
 */
const PROCEDURES = {
  GET_ALL: "sp_tests_getAll()",
  GET_BY_ID: "sp_tests_getByID(?)",
  CREATE: "sp_tests_create(?)",
  DELETE: "sp_tests_delete(?)",
  UPDATE: "sp_tests_update(?, ?)",
};

export default class TestService extends BaseService {
  constructor() {
    super();
  }

  /**
   * This method request the list of tests from the database
   * @returns  State and Result of query
   */
  public async getTests() {
    const users: any = await this.db.executeProcedure(PROCEDURES.GET_ALL);
    return users;
  }

  /**
   * This method request a test to the database passing its id
   * @param id
   * @returns  State and Result of query
   */
  public async getTest(id: number): Promise<any> {
    const user: any = await this.db.executeProcedure(PROCEDURES.GET_BY_ID, [ id ]);
    return user;
  }

  /**
   * This method allows the creation of tests at the database
   * @param name
   * @returns  State and Result of query
   */
   public async createTest(name: string) {
    const result = await this.db.executeProcedure(PROCEDURES.CREATE, [name]);
    return result;
  }

  /**
   * This method delete a test from the database by id
   * @param id
   * @returns State and Result of query
   */
  public async deleteTest(id: number) {
    const result = await this.db.executeProcedure(PROCEDURES.DELETE, [id]);
    return result;
  }

  /**
   * This method delete a test from the database by id
   * @param id
   * @param name
   * @returns State and Result of query
   */
  public async updateTest(id: number, name: string) {
    const result = await this.db.executeProcedure(PROCEDURES.UPDATE, [ id, name ]);
    return result;
  }
}