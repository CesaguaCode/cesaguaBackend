import { Request, Response } from "express";
import TestService from "../services/test.services";

export default class TestController {
  /**
   * Testing Service
   */
  private service: TestService;

  constructor() {
    this.service = new TestService();
  }

  /**
   * This method returns a list of tests
   */
  public listTests = async (req: Request, res: Response) => {
    const result = await this.service.getTests();
    res.status(result.state).json(result);
  };

  /**
   * This method returns a specific test by its id
   */
  public listTest = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getTest(parseInt(id));
    res.status(result.state).json(result);
  };

  /**
   * This methood allows create a test
   */
  public createTest = async (req: Request, res: Response) => {
    const { name } = req.body;
    const result = await this.service.createTest(name);

    res.status(result.state).json(result);
  };

  /**
   * This methood allows delete a test
   */
  public deleteTest = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.deleteTest(parseInt(id));

    res.status(result.state).json(result);
  };

  /**
   * This methood allows edit a test
   */
  public updateTest = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const result = await this.service.updateTest(parseInt(id), name);

    res.status(result.state).json(result);
  };
}
