import DataBase from "../config/database";

/**
 * This base service inherits all the other services.
 * Contains an instance of the database
 */
export default class BaseService {
  protected db: DataBase;

  constructor() {
    this.db = new DataBase();
  }

}