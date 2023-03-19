
/**
 * This base controller inherits all the other controllers.
 * Contains methods to validate data from DB results
 */
export default class BaseController {

  /**
   * Validates if exist one entry in the result.
   * 
   * @param result DB result
   * @returns Data in the index if exist
   */
  protected existsOne(result: any) {
    return result.data[0][0];
  }

  /**
   * Validates if the status of the result is valid
   * 
   * @param result DB result
   * @returns Boolean
   */
  protected validState(result: any) {
    return result.state === 200;
  }

  /**
   * Validates if the result affect some rows
   * 
   * @param result DB result
   * @returns Boolean
   */
  protected affectedRows = (result: any) => result.data.affectedRows > 0;

  /**
   * Validates if exist one entry in the result and returns it.
   * 
   * @param result DB result
   * @returns Boolean
   */
  protected returnOneData = (result: any) => {
    return { state: result.state, data: result.data[0][0] }
  };

  /**
   * Validates if exist data in the result and returns it.
   * 
   * @param result DB result
   * @returns Boolean
   */
  protected returnAllData = (result: any) => {
    return { state: result.state, data: result.data[0] }
  };

}

/**
 * Posible status code mapping
 */
export const STATUS_MSG = {
  NOT_FOUND: { state: 404, data: "Elemento no encontrado" },
  NOT_CREATED: { state: 400, data: "Elemento no creado" },
  CREATED: { state: 201, data: "Elemento creado" },
  NOT_DELEATED: { state: 400, data: "Elemento no eliminado" },
  DELEATED: { state: 200, data: "Elemento eliminado" },
  NOT_VALID: { state: 400, data: "Datos inválidos" },
  NOT_UPDATED: { state: 400, data: "Elemento no actualizado" },
  UPDATED: { state: 200, data: "Elemento actualizado" },
};