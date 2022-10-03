import { Request, Response } from "express";
import ServiceModel from "../models/service.model";
import ServiceService from "../services/service.services";

export default class ServiceController {
  /**
   * Testing Service
   */
  private service: ServiceService;

  constructor() {
    this.service = new ServiceService();
  }

  /**
   * This method returns a list of services
   */
  public listServices = async (req: Request, res: Response) => {
    const result = await this.service.getServices();
    res.status(result.state).json(result);
  };

  /**
   * This method returns a specific service by its id
   */
  public listService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getService(parseInt(id));
    res.status(result.state).json(result);
  };

  /**
   * This methood allows create a service
   */
  public createService = async (req: Request, res: Response) => {
    const service:ServiceModel = {...req.body};
    const result = await this.service.createService(service);

    res.status(result.state).json(result);
  };

  /**
   * This methood allows delete a service
   */
  public deleteService = async (req: Request, res: Response) => {
    const { id } = req.params;

    // TODO: OBTENER ID DEL TOKEN NO COMO PARTE DEL BODY
    const { userId } = req.body;

    const result = await this.service.deleteService(parseInt(id), userId);

    res.status(result.state).json(result);
  };

  /**
   * This methood allows edit a service
   */
  public updateService = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const service:ServiceModel = {id:req.params.id, ...req.body};
    const result = await this.service.updateService(service);

    res.status(result.state).json(result);
  };
}
