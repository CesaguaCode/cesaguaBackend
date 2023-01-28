import MilestoneValidations from "./milestone.validations";

const milestoneValidations = new MilestoneValidations();

const body = { title: "Some milestone", date: "2022-07", description: "Some milestone", image: "data:image/jpeg;base64,/9j/", userId: "1" }

test("should correct milestone data -> pass the post middleware", async () => {
  const req: any = { body: body };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePost(req, res, next);

  expect(next).toHaveBeenCalled();
});

test("should missing  milestone data -> not pass the post middleware", async () => {
  const req: any = { body: { } };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePost(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

test("should partially wrong milestone data -> not pass the post middleware", async () => {
  const req: any = { body: {...body,date: "ABC" } };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePost(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

test("should partially wrong milestone data -> not pass the put middleware", async () => {
  const req: any = { params: {id: 1}, body: { ...body, date: "ABC" } };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePut(req, res, next);

  expect(next).not.toHaveBeenCalled();
});

test("should correct milestone data -> pass the put middleware", async () => {
  const req: any = { params: {id: 1}, body: body };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePut(req, res, next);

  expect(next).toHaveBeenCalled();
});

test("should wrong milestone data -> not pass the put middleware", async () => {
  const req: any = { params: {id: 1}, body: {} };
  const res: any = { status: (_n: number) => { return { json: () => {} } } };
  const next: any = jest.fn();

  await milestoneValidations.validatePut(req, res, next);

  expect(next).not.toHaveBeenCalled();
});
