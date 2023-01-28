import BaseService from "../shared/baseService";
import NewsModel from './../models/news.model';

const PROCEDURES = {
    GET_ALL: "sp_news_getAll()",
    GET_BY_ID: "sp_news_getById(?)",
    CREATE: "sp_news_create(?,?,?,?)",
    DELETE:"sp_news_delete(?,?,?)",
    UPDATE: "sp_news_update(?,?,?,?,?)"
}

export default class NewsServices extends BaseService{

    constructor(){
        super();
    }

    public async createNews(News: NewsModel) {
        const result = await this.db.executeProcedure(
          PROCEDURES.CREATE,
          Object.values(News)
        );
        return result;
      }
    
      public async updateNews(News: NewsModel) {
        const result = await this.db.executeProcedure(
          PROCEDURES.UPDATE,
          Object.values(News)
        );
        return result;
      }
    
      public async deleteNews(id: number, deletedby: number, deleted:number) {
        const result = await this.db.executeProcedure(PROCEDURES.DELETE, [id,deletedby,deleted]);
        return result;
      }
    
      public async getAllNews() {
        const result = await this.db.executeProcedure(PROCEDURES.GET_ALL);
        return result;
      }
    
      public async getNewsById(id: number) {
        const result = await this.db.executeProcedure(PROCEDURES.GET_BY_ID, [id]);
        return result;
      }
   

}