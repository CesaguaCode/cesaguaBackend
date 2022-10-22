import MilestoneModel from "../models/milestone.model";
import BaseService from "../utils/baseService";

/**
 * List of the stored procedures of this service
 */
const PROCEDURES = {
  EXIST_EMAIL: "sp_login_existEmail(?)",
  OBTAIN_PASS: "sp_login_obtainPassword(?)",
  OBTAIN_AUTH: "sp_login_obtainAuth(?)",
  RESET_PASSWORD: "sp_login_updatePassword(?,?,?,?)",
};

export default class LoginService extends BaseService {
  constructor() {
    super();
  }

  /**
   *
   *
   */
  public async getExistEmail(email: string) {
    const result: any = await this.db.executeProcedure(PROCEDURES.EXIST_EMAIL, [
      email,
    ]);
    return result;
  }

  /**
   *
   *
   */
  public async getPassword(id: number) {
    const result: any = await this.db.executeProcedure(PROCEDURES.OBTAIN_PASS, [
      id,
    ]);
    return result;
  }

  /**
   *
   *
   */
  public async getAuthData(id: number) {
    const result: any = await this.db.executeProcedure(PROCEDURES.OBTAIN_AUTH, [
      id,
    ]);
    return result;
  }

  /**
   *
   *
   */
  public async resetPassword(id: number, password: string, salt:string, pepper: number) {
    const result: any = await this.db.executeProcedure(PROCEDURES.RESET_PASSWORD, [ id,salt, pepper, password ]);
    return result;
  }
}
