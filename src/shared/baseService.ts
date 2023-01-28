import DataBase from "../config/database";

export default class BaseService {
  protected db: DataBase;

  constructor() {
    this.db = new DataBase();
  }

}