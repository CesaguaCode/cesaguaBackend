import ServiceModel from "../models/service.model";
import BaseService from "../shared/baseService";

/**
 * List of the stored procedures of this service
 */
const PROCEDURES = {
  GET_ALL: "sp_services_getAll()",
  GET_BY_ID: "sp_services_getByID(?)",
  CREATE: "sp_services_create(?, ?, ?, ?, ?, ?, ?)",
  DELETE: "sp_services_delete(?, ?)",
  UPDATE: "sp_services_update(?, ?, ?, ?, ?, ?, ?)",
};

export default class ServiceService extends BaseService {
  constructor() {
    super();
  }

  /**
   * This method request the list of services from the database
   * @returns  State and Result of query
   */
  public async getServices() {
    const users: any = await this.db.executeProcedure(PROCEDURES.GET_ALL);
    return users;
  }

  /**
   * This method request a service to the database passing its id
   * @param id
   * @returns  State and Result of query
   */
  public async getService(id: number): Promise<any> {
    const user: any = await this.db.executeProcedure(PROCEDURES.GET_BY_ID, [ id ]);
    return user;
  }

  /**
   * This method allows the creation of services at the database
   * @param name
   * @returns  State and Result of query
   */
   public async createService(service:ServiceModel) {
    const result = await this.db.executeProcedure(PROCEDURES.CREATE, Object.values(service));
    return result;
  }

  /**
   * This method delete a service from the database by id
   * @param id
   * @returns State and Result of query
   */
  public async deleteService(id: number, userId: number) {
    const result = await this.db.executeProcedure(PROCEDURES.DELETE, [id, userId]);
    return result;
  }

  /**
   * This method delete a service from the database by id
   * @param id
   * @param name
   * @returns State and Result of query
   */
  public async updateService(service:ServiceModel) {
    const result = await this.db.executeProcedure(PROCEDURES.UPDATE, Object.values(service));
    return result;
  }
}