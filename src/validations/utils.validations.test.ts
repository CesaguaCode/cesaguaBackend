import UtilsValidations from "./utils.validations";

const serviceValidations = new UtilsValidations();

const body = {
  email: "Testing.ode@outlook.com",
  name: "Luis Fernando Leiton Iglesias",
  message: "My message",
};

// This test checks if the middleware allows a valid email on the validateContactUsMessage function
test("should correct email data -> pass the middleware", () => {
  const req: any = { body: body };
  const res: any = {
    status: (_n: number) => {
      return { json: () => { } };
    },
  };
  const next: any = jest.fn();

  serviceValidations.validateContactUsMessage(req, res, next);

  expect(next).toHaveBeenCalled();
});

// This test checks if the middleware block a missing email on the validateContactUsMessage function
test("should missing email data -> not pass the middleware", () => {
  const req: any = { body: {} };
  const res: any = {
    status: (_n: number) => {
      return { json: () => { } };
    },
  };
  const next: any = jest.fn();

  serviceValidations.validateContactUsMessage(req, res, next);

  expect(next).not.toHaveBeenCalled();
});


// This test checks if the middleware block a incorrect email on the validateContactUsMessage function
test("should incorrect email data -> not pass the middleware", () => {
  const req: any = { body: { ...body, email: '1' } };
  const res: any = {
    status: (_n: number) => {
      return { json: () => { } };
    },
  };
  const next: any = jest.fn();

  serviceValidations.validateContactUsMessage(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

