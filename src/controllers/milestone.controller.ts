import { Request, Response } from "express";
import MilestoneModel from "../models/milestone.model";
import MilestoneService from "../services/milestone.services";

import { STATUS_MSG } from "./../utils/baseController";
import BaseController from "../utils/baseController";

export default class MilestoneController extends BaseController {
  /**
   * Testing Service
   */
  private service: MilestoneService;

  constructor() {
    super();
    this.service = new MilestoneService();
  }

  /**
   * This method returns a list of milestones
   */
  public listMilestones = async (req: Request, res: Response) => {
    const result = await this.service.getMilestones();

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    res.status(result.state).json(this.returnAllData(result));
  };

  /**
   * This method returns a specific milestone by its id
   */
  public listMilestone = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getMilestone(parseInt(id));

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.existsOne(result)) {
      return res.status(404).json(STATUS_MSG.NOT_FOUND);
    }

    res.status(200).json(this.returnOneData(result));
  };

  /**
   * This methood allows create a milestone
   */
  public createMilestone = async (req: Request, res: Response) => {
    const userId = req.token.id;

    const milestone: MilestoneModel = new MilestoneModel({
      userId: userId,
      ...req.body,
    });

    const result = await this.service.createMilestone(
      (milestone as any).toJSON()
    );

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.affectedRows(result)) {
      return res.status(400).json(STATUS_MSG.NOT_CREATED);
    }

    res.status(201).json(STATUS_MSG.CREATED);
  };

  /**
   * This methood allows delete a milestone
   */
  public deleteMilestone = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = req.token.id;

    const result = await this.service.deleteMilestone(parseInt(id), userId);

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.affectedRows(result)) {
      return res.status(400).json(STATUS_MSG.NOT_DELEATED);
    }

    res.status(200).json(STATUS_MSG.DELEATED);
  };

  /**
   * This methood allows edit a milestone
   */
  public updateMilestone = async (req: Request, res: Response) => {
    const { id } = req.params;

    const milestone: MilestoneModel = new MilestoneModel({
      id: id,
      ...req.body,
    });
    
    const result = await this.service.updateMilestone(milestone);

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.affectedRows(result)) {
      return res.status(400).json(STATUS_MSG.NOT_UPDATED);
    }

    res.status(200).json(STATUS_MSG.UPDATED);
  };
}
