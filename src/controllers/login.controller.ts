import { STATUS_MSG } from "./../utils/baseController";
import { Request, Response } from "express";
import LoginService from "../services/login.services";

import BaseController from "../utils/baseController";
import PassAuth from "../utils/passAuth";
import TokenAuth from "../utils/tokenAuth";

export default class MilestoneController extends BaseController {
  /**
   * Testing Service
   */
  private service: LoginService;
  private auth: PassAuth;

  constructor() {
    super();

    this.auth = new PassAuth();
    this.service = new LoginService();
  }

  /**
   *
   */
  public existsEmail = async (req: Request, res: Response) => {
    const { mail } = req.body;

    const result = await this.service.getExistEmail(mail);

    console.log(result);

    if (!this.validState(result)) {
      return res.status(result.state).json(result);
    }

    if (!this.existsOne(result)) {
      return res.status(404).json(STATUS_MSG.NOT_FOUND);
    }

    res.status(result.state).json(this.returnOneData(result));
  };

  /**
   *
   */
  public validToken = async (req: Request, res: Response) => {
    return res.status(200).json({status:200, valid: true });
  };

  /**
   *
   */
  public validLogin = async (req: Request, res: Response) => {
    const { mail, password } = req.body;

    let result = await this.service.getExistEmail(mail);

    if (result.state !== 200) {
      return res.status(404).json(STATUS_MSG.NOT_VALID);
    }

    if (!this.existsOne(result)) {
      return res.status(404).json(STATUS_MSG.NOT_FOUND);
    }

    result = this.returnOneData(result);

    let pwdData = await this.service.getPassword(result.data.id);

    if (pwdData.state !== 200) {
      return res.status(404).json(STATUS_MSG.NOT_VALID);
    }

    pwdData = this.returnOneData(pwdData).data;

    const isValid = this.auth.comparePassword(password, pwdData);

    if (!isValid) {
      return res.status(200).json(STATUS_MSG.NOT_VALID);
    }

    let authData = await this.service.getAuthData(result.data.id);

    if (authData.state !== 200) {
      return res.status(404).json(STATUS_MSG.NOT_VALID);
    }

    const token = await TokenAuth.createToken(
      this.returnOneData(authData).data
    );

    res.status(result.state).json(token);
  };
}
