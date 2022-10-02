import NewsServices from "../services/news.services";

export default class NewsController{

    private service: NewsServices;

    constructor(){
        this.service = new NewsServices();
    }
}