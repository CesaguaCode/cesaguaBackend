import { Request, Response, NextFunction as Next } from "express";
import jwt from "jsonwebtoken";

/**
 * List of posible roles.
 */
const ROLES = {
  NONE: 0,
  EDITOR: 1,
  ADMIN: 2,
  SADMIN: 3,
};

/**
 * Class used to validate token authentication.
 */
export default class TokenAuth {

  /**
   * This function creates a token using the .env key.
   * 
   * @param auth : Data to insert into the token
   * @returns : Token
   */
  public static createToken = async (auth: any) => {
    return new Promise((res) => {
      const key = process.env.TOKEN_KEY;

      jwt.sign({ auth }, `${key}`, { expiresIn: "10h" }, (err, token) => {
        if (!key || err) {
          return res({ status: 400, message: "Fail token generation" });
        }

        return res({ status: 200, token: token });
      });
    });
  };

  /**
   * This middleware validates if the token exist in the request,
   * the token must exist as a header of authorization.
   * 
   * If token is correct the function adds it to the request.
   * 
   * Example: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if token not exists
   */
  public static checkToken = async ( req: Request, res: Response, next: Next) => {
    const bearerHeader = req.headers["authorization"];

    if (!bearerHeader) {
      return res.status(403).json({ status: 403, message: "Token not found" });
    }

    const bearerToken = bearerHeader.split(" ")[1];
    const checkToken: any = await this.validateToken(bearerToken);

    if (checkToken.status !== 200) {
      return res.status(checkToken.status).json(checkToken);
    }

    req.token = checkToken.item;

    next();
  };

  /**
   * This middleware validates if the user is has the editor role or higher 
   * checking the rol in the token
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if the role is not editor
   */
  public static editorRol = async (req: Request, res: Response, next: Next) => {

    if (req.token.rol < ROLES.EDITOR) {
      return res.status(403).json({ status: 403, message: "Needs to be editor to access" });
    }

    next()
  };

  /**
   * This middleware validates if the user is has the admin role or higher 
   * checking the rol in the token
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if the rol is invalid
   */
  public static adminRol = (req: Request, res: Response, next: Next) => {

    if (req.token.rol < ROLES.ADMIN) {
      return res.status(403).json({ status: 403, message: "Needs to be admin to access" });
    }

    next()
  };

   /**
   * This middleware validates if the user is has the super-admin role or higher 
   * checking the rol in the token
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if the rol is invalid
   */
  public static superAdminRol = async (req: Request, res: Response, next: Next) => {

    if (req.token.rol < ROLES.SADMIN) {
      return res.status(403).json({ status: 403, message: "Needs to be super-admin to access" });
    }

    next()
  };

  /**
   * This function validates if a provided token is correct.
   * 
   * @param token 
   * @returns Response with the token data or an error.
   */
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
