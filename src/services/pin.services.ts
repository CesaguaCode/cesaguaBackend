import PinModel from "../models/pin.model";
import BaseService from "../shared/baseService";

/**
 * List of the stored procedures of this service
 */
const PROCEDURES = {
  GET_ALL: "sp_pins_getAll()",
  GET_BY_ID: "sp_pins_getByID(?)",
  CREATE: "sp_pins_create(?, ?, ?, ?, ?, ?)",
  DELETE: "sp_pins_delete(?, ?)",
  UPDATE: "sp_pins_update(?, ?, ?, ?, ?, ?)",
};

/**
 * This class allows the conection to database to get Map Pins
 */
export default class PinService extends BaseService {
  constructor() {
    super();
  }

  /**
   * This method request the list of pins from the database
   * @returns  State and Result of query
   */
  public async getPins() {
    const users: any = await this.db.executeProcedure(PROCEDURES.GET_ALL);
    return users;
  }

  /**
   * This method request a pin to the database passing its id
   * @param id
   * @returns  State and Result of query
   */
  public async getPin(id: number): Promise<any> {
    const user: any = await this.db.executeProcedure(PROCEDURES.GET_BY_ID, [ id ]);
    return user;
  }

  /**
   * This method allows the creation of pins at the database
   * @param name
   * @returns  State and Result of query
   */
   public async createPin(pin:PinModel) {
    const result = await this.db.executeProcedure(PROCEDURES.CREATE, Object.values(pin));
    return result;
  }

  /**
   * This method delete a pin from the database by id
   * @param id
   * @returns State and Result of query
   */
  public async deletePin(id: number, userId: number) {
    const result = await this.db.executeProcedure(PROCEDURES.DELETE, [id, userId]);
    return result;
  }

  /**
   * This method delete a pin from the database by id
   * @param id
   * @param name
   * @returns State and Result of query
   */
  public async updatePin(pin:PinModel) {
    const result = await this.db.executeProcedure(PROCEDURES.UPDATE, Object.values(pin));
    return result;
  }
}