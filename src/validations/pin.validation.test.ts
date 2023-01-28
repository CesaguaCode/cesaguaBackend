import PinValidations from "./pin.validations";

const pinValidations = new PinValidations();

const body = {
  name: "Asada la prueba de node",
  province: "Limón",
  canton: "Pococí",
  district: "Guápiles",
  position: "[11.18,-83.74]",
  userId: "1",
};

test("should correct pin data -> pass the post middleware", () => {
  const req: any = { body: body };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  pinValidations.validatePost(req, res, next);

  expect(next).toHaveBeenCalled();
});

test("should missing pin data -> not pass the post middleware",  () => {
  const req: any = { body: {} };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  pinValidations.validatePost(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

test("should wrong pin data -> not pass the post middleware",  () => {
  const req: any = { body: {...body, position: "[]" } };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  pinValidations.validatePost(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

test("should correct pin data -> pass the put middleware", () => {
  const req: any = { params: { id: 1 }, body: body };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  pinValidations.validatePut(req, res, next);

  expect(next).toHaveBeenCalled();
});

test("should missing pin data -> not pass the put middleware", () => {
  const req: any = { params: { id: 1 }, body: {} };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  pinValidations.validatePut(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

test("should wrong pin data -> not pass the post middleware",  () => {
  const req: any = { params: { id: 1 }, body: {...body, position: "[]" } };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  pinValidations.validatePut(req, res, next);

  expect(next).not.toHaveBeenCalled();
});