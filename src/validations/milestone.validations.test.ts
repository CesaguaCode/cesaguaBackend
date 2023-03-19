import MilestoneValidations from "./milestone.validations";

const milestoneValidations = new MilestoneValidations();

const body = { title: "Some milestone", date: "2022-07", description: "Some milestone", image: "data:image/jpeg;base64,/9j/", userId: "1" }

// This test checks if the middleware allows a valid milestone on the validatePost function
test("should correct milestone data -> pass the post middleware", async () => {
  const req: any = { body: body };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePost(req, res, next);

  expect(next).toHaveBeenCalled();
});

// This test checks if the middleware blocks when there is no milestone on the validatePost function
test("should missing  milestone data -> not pass the post middleware", async () => {
  const req: any = { body: { } };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePost(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

// This test checks if the middleware blocks when the milestone is invalid on the validatePost function
test("should partially wrong milestone data -> not pass the post middleware", async () => {
  const req: any = { body: {...body,date: "ABC" } };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePost(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

// This test checks if the middleware allows a valid milestone on the validatePut function
test("should partially wrong milestone data -> not pass the put middleware", async () => {
  const req: any = { params: {id: 1}, body: { ...body, date: "ABC" } };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePut(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

// This test checks if the middleware blocks when there is no milestone on the validatePut function
test("should correct milestone data -> pass the put middleware", async () => {
  const req: any = { params: {id: 1}, body: body };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePut(req, res, next);

  expect(next).toHaveBeenCalled();
});

// This test checks if the middleware blocks when the milestone is invalid on the validatePut function
test("should wrong milestone data -> not pass the put middleware", async () => {
  const req: any = { params: {id: 1}, body: {} };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePut(req, res, next);

  expect(next).not.toHaveBeenCalled();
});
