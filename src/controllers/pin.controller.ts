import { Request, Response } from "express";
import PinModel from "../models/pin.model";
import PinService from "../services/pin.services";
import BaseController from "../shared/baseController";

import { STATUS_MSG } from "../shared/baseController";

export default class PinController extends BaseController {
  /**
   * Testing Service
   */
  private service: PinService;

  constructor() {
    super();
    this.service = new PinService();
  }

  /**
   * This method returns a list of pins
   */
  public listPins = async (req: Request, res: Response) => {
    const result = await this.service.getPins();

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    res.status(result.state).json(this.returnAllData(result));
  };

  /**
   * This method returns a specific pin by its id
   */
  public listPin = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getPin(parseInt(id));

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.existsOne(result)) {
      return res.status(404).json(STATUS_MSG.NOT_FOUND);
    }

    res.status(200).json(this.returnOneData(result));
  };

  /**
   * This methood allows create a pin
   */
  public createPin = async (req: Request, res: Response) => {
    const userId = req.token.id;

    const pin: PinModel = { ...req.body, userId: userId };

    const result = await this.service.createPin(pin);

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.affectedRows(result)) {
      return res.status(400).json(STATUS_MSG.NOT_CREATED);
    }

    res.status(201).json(STATUS_MSG.CREATED);
  };

  /**
   * This methood allows delete a pin
   */
  public deletePin = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = req.token.id;

    const result = await this.service.deletePin(parseInt(id), userId);

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.affectedRows(result)) {
      return res.status(400).json(STATUS_MSG.NOT_DELEATED);
    }

    res.status(200).json(STATUS_MSG.DELEATED);
  };

  /**
   * This methood allows edit a pin
   */
  public updatePin = async (req: Request, res: Response) => {
    const { id } = req.params;

    const pin: PinModel = { id: req.params.id, ...req.body };
    const result = await this.service.updatePin(pin);

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.affectedRows(result)) {
      return res.status(400).json(STATUS_MSG.NOT_UPDATED);
    }

    res.status(200).json(STATUS_MSG.UPDATED);
  };
}
