export default class BaseController {

  protected existsOne(result: any) {
    return result.data[0][0];
  }

  protected validState(result: any) {
    return result.state === 200;
  }

  protected affectedRows = (result: any) => result.data.affectedRows > 0;

  protected returnOneData = (result: any) => { 
    return { state: result.state, data: result.data[0][0] }
  };

  protected returnAllData = (result: any) =>{ 
    return { state: result.state, data: result.data[0] }
  };

}

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