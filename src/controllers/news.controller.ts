import { Request, Response } from "express";
import NewsModel from "../models/news.model";
import NewsServices from "../services/news.services";

export default class NewsController{

    private service: NewsServices;

    constructor(){
        this.service = new NewsServices();
    }

    public createNews =async (req:Request, res:Response) => {

        const {id} = req.params;
        const news:NewsModel = {id:req.params, ...req.body}
        const result = await this.service.createNews(news);
        res.status(result.state).json(result);
        
    }

    public updateNews =async (req:Request, res:Response) => {

        const news:NewsModel = {id:req.params, ...req.body}
        const result = await this.service.updateNews(news);
        res.status(result.state).json(result);
        
    }

    public deletedNews =async (req:Request, res:Response) => {

        const {id} = req.params;

        const result = await this.service.deleteNews(parseInt(id));
        res.status(result.state).json(result);
        
    }

    public getAllNews =async (req:Request, res:Response) => {

        const result = await this.service.getAllNews();
        res.status(result.state).json(result);
        
    }

    public getNewsByid =async (req:Request, res:Response) => {

        const {id} = req.params;

        const result = await this.service.getNewsById(parseInt(id));
        res.status(result.state).json(result);
        
    }
}