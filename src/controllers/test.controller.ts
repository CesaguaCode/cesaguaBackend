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
    const tests = await this.service.getTests();
    res.status(200).json({ state: "success", tests });
  };

  /**
   * This method returns a specific test by its id
   */
  public listTest = async (req: Request, res: Response) => {
    const { id } = req.params;
    const test = await this.service.getTest(parseInt(id));
    res.status(200).json({ state: "success", test });
  };

  /**
   * This methood allows create a test
   */
  public createTest = async (req: Request, res: Response) => {
    const { name } = req.body;
    const result = await this.service.createTest(name);

    if(result){
      res.status(200).json({ state: "success" });
    }else{
      res.status(400).json({ state: "failure" });
    }
    
  };
}