import { Request, Response } from "express";
import ServiceModel from "../models/service.model";
import ServiceService from "../services/service.services";

import { STATUS_MSG } from '../shared/baseController';
import BaseController from "../shared/baseController";

export default class ServiceController extends BaseController {
  /**
   * Testing Service
   */
  private service: ServiceService;

  constructor() {
    super();
    this.service = new ServiceService();
  }

  /**
   * This method returns a list of services
   */
  public listServices = async (req: Request, res: Response) => {
    const result = await this.service.getServices();



     if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    res.status(result.state).json(this.returnAllData(result));
  };

  /**
   * This method returns a specific service by its id
   */
  public listService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getService(parseInt(id));
    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.existsOne(result)) {
      return res.status(404).json(STATUS_MSG.NOT_FOUND);
    }

    res.status(200).json(this.returnOneData(result));
  };

  /**
   * This methood allows create a service
   */
  public createService = async (req: Request, res: Response) => {

    const userId = req.token.id;

    const service: ServiceModel = {
      ...req.body,
      userId: userId
    };

    service.details = JSON.stringify(req.body.details)
    
    const result = await this.service.createService(service);

     if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.affectedRows(result)) {
      return res.status(400).json(STATUS_MSG.NOT_CREATED);
    }

    res.status(201).json(STATUS_MSG.CREATED);
  };

  /**
   * This methood allows delete a service
   */
  public deleteService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = req.token.id;

    const result = await this.service.deleteService(parseInt(id), userId);

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.affectedRows(result)) {
      return res.status(400).json(STATUS_MSG.NOT_DELEATED);
    }

    res.status(200).json(STATUS_MSG.DELEATED);
  };

  /**
   * This methood allows edit a service
   */
  public updateService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const service: ServiceModel = {id, ...req.body };

    service.details = JSON.stringify(req.body.details)

    const result = await this.service.updateService(service);

     if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.affectedRows(result)) {
      return res.status(400).json(STATUS_MSG.NOT_UPDATED);
    }

    res.status(200).json(STATUS_MSG.UPDATED);
  };
}