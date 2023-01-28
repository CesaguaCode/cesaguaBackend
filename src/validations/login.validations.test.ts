import LoginValidations from "./login.validations";

const loginValidations = new LoginValidations();

test('should luis.leiton.cr@gmail.com -> pass the middleware', () => { 
    const req:any = {body:{email: 'luis.leiton.cr@gmail.com'}};
    const res:any = {status: (_n:number)=>{ return {json: () => {}}}, };
    const next:any = jest.fn();

    loginValidations.validateEmail(req, res, next)

    expect(next).toHaveBeenCalled()
 })

 test('should luis.leiton -> not pass the middleware', () => { 
    const req:any = {body:{email: 'luis.leiton'}};
    const res:any = {status: (_n:number)=>{ return {json: () => {}}}, };
    const next:any = jest.fn();

    loginValidations.validateEmail(req, res, next)

    expect(next).not.toHaveBeenCalled()
 })

 test('should missing email -> not pass the middleware', () => { 
   const req:any = {body:{}};
   const res:any = {status: (_n:number)=>{ return {json: () => {}}}, };
   const next:any = jest.fn();

   loginValidations.validateEmail(req, res, next)

   expect(next).not.toHaveBeenCalled()
})

 test('should id:1 on body -> pass the middleware', () => { 
    const req:any = {params: {}, body:{id: 1}};
    const res:any = {status: (_n:number)=>{ return {json: () => {}}}, };
    const next:any = jest.fn();

    loginValidations.validateId(req, res, next)

    expect(next).toHaveBeenCalled()
 })

 test('should id:a on body -> not pass the middleware', () => { 
    const req:any = {params: {}, body:{id: 'a'}};
    const res:any = {status: (_n:number)=>{ return {json: () => {}}}, };
    const next:any = jest.fn();

    loginValidations.validateId(req, res, next)

    expect(next).not.toHaveBeenCalled()
 })

 test('should id:1 on params -> pass the middleware', () => { 
    const req:any = {params: {id: 1}, body:{}};
    const res:any = {status: (_n:number)=>{ return {json: () => {}}}, };
    const next:any = jest.fn();

    loginValidations.validateId(req, res, next)

    expect(next).toHaveBeenCalled()
 })

 test('should id:a on params -> not pass the middleware', () => { 
    const req:any = {params: {id: 'a'}, body:{}};
    const res:any = {status: (_n:number)=>{ return {json: () => {}}}, };
    const next:any = jest.fn();

    loginValidations.validateId(req, res, next)

    expect(next).not.toHaveBeenCalled()
 })