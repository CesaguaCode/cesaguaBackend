import { Request, Response, NextFunction as Next } from "express";
import jwt from "jsonwebtoken";

const ROLES = {
  NONE: 0,
  EDITOR: 1,
  ADMIN: 2,
  SADMIN: 3,
};

export default class TokenAuth {
  public static createToken = async (auth: any) => {
    return new Promise((res) => {
      const key = process.env.TOKEN_KEY;

      jwt.sign({ auth }, `${key}`, { expiresIn: "10h" }, (err, token) => {
        if (!key || err) {
          return res({ status: 400, message: "Fail token generation" });
        }

        return res({ status: 200, item: token });
      });
    });
  };

  public static checkToken = async (
    req: Request,
    res: Response,
    next: Next
  ) => {
    const bearerHeader = req.headers["authorization"];

    if (!bearerHeader) {
      return res.status(403).json({ status: 403, message: "Token not found" });
    }

    const bearerToken = bearerHeader.split(" ")[1];

    const checkToken: any = await this.validateToken(bearerToken);

    

    if (checkToken.status !== 200) {
      return res.status(checkToken.status);
    }

    req.token = checkToken.item;

    next();
  };

  public static editorRol = async (req: Request, res: Response, next: Next) => {

    if (req.token.rol < ROLES.SADMIN) {
      return res.status(403).json({ status: 403, message: "Needs to be super-admin to access" });
    }

    next()
  };


  public static adminRol = (req: Request, res: Response, next: Next) => {
  
    if (req.token.rol < ROLES.ADMIN) {
      return res.status(403).json( { status: 403, message: "Needs to be admin to access" });
    }

    next()
  };

  public static superAdminRol = async (req: Request, res: Response, next: Next) => {

    if (req.token.rol < ROLES.SADMIN) {
      return res.status(403).json({ status: 403, message: "Needs to be super-admin to access" });
    }

    next()
  };
  

  private static async validateToken(token: any) {
    const key = process.env.TOKEN_KEY;

    if (!key) return { status: 500, message: "Server can not validate token" };

    return new Promise((res) => {
      jwt.verify(token, `${key}`, (err: any, data: any) => {
        if (err) {
          res({ status: 403, message: "Invalid token" });
        }

        res({ status: 200, item: data.auth });
      });
    });
  }
}
