import { Request, Response } from "express";
import MilestoneModel from "../models/milestone.model";
import MilestoneService from "../services/milestone.services";

export default class MilestoneController {
  /**
   * Testing Service
   */
  private service: MilestoneService;

  constructor() {
    this.service = new MilestoneService();
  }

  /**
   * This method returns a list of milestones
   */
  public listMilestones = async (req: Request, res: Response) => {
    const result = await this.service.getMilestones();
    res.status(result.state).json(result);
  };

  /**
   * This method returns a specific milestone by its id
   */
  public listMilestone = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getMilestone(parseInt(id));
    res.status(result.state).json(result);
  };

  /**
   * This methood allows create a milestone
   */
  public createMilestone = async (req: Request, res: Response) => {
    const milestone:MilestoneModel = {...req.body};
    const result = await this.service.createMilestone(milestone);

    res.status(result.state).json(result);
  };

  /**
   * This methood allows delete a milestone
   */
  public deleteMilestone = async (req: Request, res: Response) => {
    const { id } = req.params;

    // TODO: OBTENER ID DEL TOKEN NO COMO PARTE DEL BODY
    const { userId } = req.body;

    const result = await this.service.deleteMilestone(parseInt(id), userId);
    
    res.status(result.state).json(result);
  };

  /**
   * This methood allows edit a milestone
   */
  public updateMilestone = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const milestone:MilestoneModel = {id:req.params.id, ...req.body};
    const result = await this.service.updateMilestone(milestone);

    res.status(result.state).json(result);
  };
}
