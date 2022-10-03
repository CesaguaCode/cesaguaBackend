import { Request, Response } from "express";
import PinModel from "../models/pin.model";
import PinService from "../services/pin.services";

export default class PinController {
  /**
   * Testing Service
   */
  private service: PinService;

  constructor() {
    this.service = new PinService();
  }

  /**
   * This method returns a list of pins
   */
  public listPins = async (req: Request, res: Response) => {
    const result = await this.service.getPins();
    res.status(result.state).json(result);
  };

  /**
   * This method returns a specific pin by its id
   */
  public listPin = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getPin(parseInt(id));
    res.status(result.state).json(result);
  };

  /**
   * This methood allows create a pin
   */
  public createPin = async (req: Request, res: Response) => {
    const pin:PinModel = {...req.body};
    const result = await this.service.createPin(pin);

    res.status(result.state).json(result);
  };

  /**
   * This methood allows delete a pin
   */
  public deletePin = async (req: Request, res: Response) => {
    const { id } = req.params;

    // TODO: OBTENER ID DEL TOKEN NO COMO PARTE DEL BODY
    const { userId } = req.body;

    const result = await this.service.deletePin(parseInt(id), userId);

    res.status(result.state).json(result);
  };

  /**
   * This methood allows edit a pin
   */
  public updatePin = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const pin:PinModel = {id:req.params.id, ...req.body};
    const result = await this.service.updatePin(pin);

    res.status(result.state).json(result);
  };
}
