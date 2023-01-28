import UtilsValidations from "./utils.validations";

const serviceValidations = new UtilsValidations();

const body = {
  email: "Testing.ode@outlook.com",
  name: "Luis Fernando Leiton Iglesias",
  message: "My message",
};

test("should correct email data -> pass the middleware", () => {
  const req: any = { body: body };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  serviceValidations.validateContactUsMessage(req, res, next);

  expect(next).toHaveBeenCalled();
});

test("should missing email data -> not pass the middleware", () => {
  const req: any = { body: {}};
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  serviceValidations.validateContactUsMessage(req, res, next);

  expect(next).not.toHaveBeenCalled();
});


test("should incorrect email data -> not pass the middleware", () => {
  const req: any = { body: {...body, email: '1'}};
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  serviceValidations.validateContactUsMessage(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

