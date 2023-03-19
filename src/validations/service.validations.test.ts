import ServiceValidations from "./service.validations";

const serviceValidations = new ServiceValidations();

const body = {
  title: "Some service",
  description: "Some description",
  details: [],
  image: "data:image/jpeg;base64,/9j/",
  thumbnail: "data:image/jpeg;base64,/9j/",
  contactId: "1",
  userId: "1",
};

// This test checks if the middleware allow correct data on the validatePost function
test("should correct service data -> pass the post middleware", async () => {
  const req: any = { body: body };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  await serviceValidations.validatePost(req, res, next);

  expect(next).toHaveBeenCalled();
});

// This test checks if the middleware block missing data on the validatePost function
test("should missing service data -> not pass the post middleware", async () => {
  const req: any = { body: {} };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  await serviceValidations.validatePost(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

// This test checks if the middleware block incorrect data on the validatePost function
test("should wrong service data -> not pass the post middleware", async () => {
  const req: any = { body: {...body, image: "Err"} };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  await serviceValidations.validatePost(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

// This test checks if the middleware allow correct data on the validatePut function
test("should correct service data -> pass the put middleware", async () => {
  const req: any = { params: { id: 1 }, body: body };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  await serviceValidations.validatePut(req, res, next);

  expect(next).toHaveBeenCalled();
});

// This test checks if the middleware block missing data on the validatePut function
test("should missing service data -> not pass the put middleware", async () => {
  const req: any = { params: { id: 1 }, body: {} };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  await serviceValidations.validatePut(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

// This test checks if the middleware block incorrect data on the validatePut function
test("should wrong service data -> not pass the put middleware", async () => {
  const req: any = { params: { id: 1 }, body: {...body, image: "Err"} };
  const res: any = {
    status: (_n: number) => {
      return { json: () => {} };
    },
  };
  const next: any = jest.fn();

  await serviceValidations.validatePut(req, res, next);

  expect(next).not.toHaveBeenCalled();
});