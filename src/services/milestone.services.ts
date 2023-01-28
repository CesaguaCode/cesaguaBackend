import MilestoneModel from "../models/milestone.model";
import BaseService from "../shared/baseService";

/**
 * List of the stored procedures of this service
 */
const PROCEDURES = {
  GET_ALL: "sp_milestones_getAll()",
  GET_BY_ID: "sp_milestones_getByID(?)",
  CREATE: "sp_milestones_create(?, ?, ?, ?, ?)",
  DELETE: "sp_milestones_delete(?, ?)",
  UPDATE: "sp_milestones_update(?, ?, ?, ?, ?)",
};

export default class MilestoneService extends BaseService {
  constructor() {
    super();
  }

  /**
   * This method request the list of milestones from the database
   * @returns  State and Result of query
   */
  public async getMilestones() {
    const users: any = await this.db.executeProcedure(PROCEDURES.GET_ALL);
    return users;
  }

  /**
   * This method request a milestone to the database passing its id
   * @param id
   * @returns  State and Result of query
   */
  public async getMilestone(id: number): Promise<any> {
    const user: any = await this.db.executeProcedure(PROCEDURES.GET_BY_ID, [ id ]);
    return user;
  }

  /**
   * This method allows the creation of milestones at the database
   * @param milestone
   * @returns  State and Result of query
   */
   public async createMilestone(milestone:MilestoneModel) {
    const result = await this.db.executeProcedure(PROCEDURES.CREATE, Object.values(milestone));
    return result;
  }

  /**
   * This method delete a milestone from the database by id
   * @param id
   * @returns State and Result of query
   */
  public async deleteMilestone(id: number, userId: number) {
    const result = await this.db.executeProcedure(PROCEDURES.DELETE, [id, userId]);
    return result;
  }

  /**
   * This method delete a milestone from the database by id
   * @param milestone
   * @returns State and Result of query
   */
  public async updateMilestone(milestone:MilestoneModel) {
    const result = await this.db.executeProcedure(PROCEDURES.UPDATE, Object.values(milestone));
    return result;
  }
}