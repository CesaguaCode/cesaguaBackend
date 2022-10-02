import BaseService from "../utils/baseService";
import User from './../models/user.model';

const PROCEDURES = {
    GET_ALL: "sp_organization_person_getAll()",
    GET_BY_ID: "sp_users_GetById(?)",
    CREATE: "sp_users_create(?,?,?,?,?)",
    DELETE: "sp_users_delete(?)",
    UPDATE: "sp_users_update(?, ?,?,?,?,?,?)",
  };

export default class UsersServices extends BaseService{

    constructor() {
        super();
      }
      
      public async createUser(User: any) {
        const result = await this.db.executeProcedure(PROCEDURES.CREATE, Object.values(User));
        return result;
      }
}