import LoginValidations from "./login.validations";

const loginValidations = new LoginValidations();

// This test checks if the middleware allows a valid email on the validateEmail function
test('should luis.leiton.cr@gmail.com -> pass the middleware', () => {
   const req: any = { body: { email: 'luis.leiton.cr@gmail.com' } };
   const res: any = { status: (_n: number) => { return { json: () => { } } }, };
   const next: any = jest.fn();

   loginValidations.validateEmail(req, res, next)

   expect(next).toHaveBeenCalled()
})

// This test checks if the middleware block an invalid email on the validateEmail function
test('should luis.leiton -> not pass the middleware', () => {
   const req: any = { body: { email: 'luis.leiton' } };
   const res: any = { status: (_n: number) => { return { json: () => { } } }, };
   const next: any = jest.fn();

   loginValidations.validateEmail(req, res, next)

   expect(next).not.toHaveBeenCalled()
})

// This test checks if the middleware block when the email is missing on the validateEmail function
test('should missing email -> not pass the middleware', () => {
   const req: any = { body: {} };
   const res: any = { status: (_n: number) => { return { json: () => { } } }, };
   const next: any = jest.fn();

   loginValidations.validateEmail(req, res, next)

   expect(next).not.toHaveBeenCalled()
})

// This test checks if the middleware allow when the id on body is valid on the validateId function
test('should id:1 on body -> pass the middleware', () => {
   const req: any = { params: {}, body: { id: 1 } };
   const res: any = { status: (_n: number) => { return { json: () => { } } }, };
   const next: any = jest.fn();

   loginValidations.validateId(req, res, next)

   expect(next).toHaveBeenCalled()
})

// This test checks if the middleware block when the id on body is invalid on the validateId function
test('should id:a on body -> not pass the middleware', () => {
   const req: any = { params: {}, body: { id: 'a' } };
   const res: any = { status: (_n: number) => { return { json: () => { } } }, };
   const next: any = jest.fn();

   loginValidations.validateId(req, res, next)

   expect(next).not.toHaveBeenCalled()
})

// This test checks if the middleware allow when the id on params is valid on the validateId function
test('should id:1 on params -> pass the middleware', () => {
   const req: any = { params: { id: 1 }, body: {} };
   const res: any = { status: (_n: number) => { return { json: () => { } } }, };
   const next: any = jest.fn();

   loginValidations.validateId(req, res, next)

   expect(next).toHaveBeenCalled()
})

// This test checks if the middleware block when the id on params is invalid on the validateId function
test('should id:a on params -> not pass the middleware', () => {
   const req: any = { params: { id: 'a' }, body: {} };
   const res: any = { status: (_n: number) => { return { json: () => { } } }, };
   const next: any = jest.fn();

   loginValidations.validateId(req, res, next)

   expect(next).not.toHaveBeenCalled()
})