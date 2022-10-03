import BaseService from "../utils/baseService";
import OrganizationPersonModel from './../models/OrgPerson.models';

/**
 * List of the stored procedures of this service
 */
const PROCEDURES = {
  GET_ALL: `sp_organization_person_getAll()`,
  GET_BY_ID: `sp_organization_person_getbyid(?)`,
  CREATE: `sp_organization_person_create(?,?,?,?,?,?,?)`,
  DELETE: `sp_organization_person_delete(?,?)`,
  UPDATE: `sp_organization_person_update(?,?,?,?,?,?,?,?)`,
};

export default class OrganizationServices extends BaseService {
    constructor() {
      super();
    }

    public async createOrganizationPerson(Person: OrganizationPersonModel) {
        const result = await this.db.executeProcedure(
          PROCEDURES.CREATE,
          Object.values(Person)
        );
        return result;
      }
    
      public async updateOrganizationPerson(Person: OrganizationPersonModel) {
        const result = await this.db.executeProcedure(
          PROCEDURES.UPDATE,
          Object.values(Person)
        );
        return result;
      }
    
      public async deleteOrganizationPerson(id: number, deletedby:number) {
        const result = await this.db.executeProcedure(PROCEDURES.DELETE, [id, deletedby]);
        return result;
      }
    
      public async getAllOrganizationPerson() {
        const result = await this.db.executeProcedure(PROCEDURES.GET_ALL);
        return result;
      }
    
      public async getOrganizationPersonById(id: number) {
        const result = await this.db.executeProcedure(PROCEDURES.GET_BY_ID, [id]);
        return result;
      }
}