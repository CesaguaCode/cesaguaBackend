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

