import BaseService from "../utils/baseService";
import UserModel from "./../models/user.model";

const PROCEDURES = {
  GET_ALL: "sp_organization_person_getAll()",
  GET_BY_ID: "sp_users_GetById(?)",
  CREATE: "sp_users_create(?,?,?,?,?)",
  DELETE: "sp_users_delete(?,?)",
  UPDATE: "sp_users_update(?,?,?,?,?,?,?)"
};

export default class UsersServices extends BaseService {
  constructor() {
    super();
  }

  public async createUser(User: UserModel) {
    const result = await this.db.executeProcedure(
      PROCEDURES.CREATE,
      Object.values(User)
    );
    return result;
  }

  public async updateUser(User: UserModel) {
    const result = await this.db.executeProcedure(
      PROCEDURES.UPDATE,
      Object.values(User)
    );
    return result;
  }

  public async deleteUser(id: number, deletedby: number) {
    const result = await this.db.executeProcedure(PROCEDURES.DELETE, [id,deletedby]);
    return result;
  }

  public async getAllUser() {
    const result = await this.db.executeProcedure(PROCEDURES.GET_ALL);
    return result;
  }

  public async getUserById(id: number) {
    const result = await this.db.executeProcedure(PROCEDURES.GET_BY_ID, [id]);
    return result;
  }
}
