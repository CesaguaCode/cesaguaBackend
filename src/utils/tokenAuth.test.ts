import TokenAuth from "./tokenAuth";
import "dotenv/config";

test("should tocken create -> not be null", async () => {
    const token = await TokenAuth.createToken({body:"Body"})
    expect(token).not.toBeNull()
});

test("should correct token -> pass the middleware", async () => {

    const token:any = await TokenAuth.createToken({body:"Body"})
    const req: any = { headers: {authorization: `Bearer ${token.token}`} };
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.checkToken(req,res,next)

    expect(next).toBeCalled()
});

test("should incorrect token -> not pass the middleware", async () => {

    const token:any = "Bearer 123"
    const req: any = { headers: {authorization: `Bearer ${token.token}`} };
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.checkToken(req,res,next)

    expect(next).not.toBeCalled()
});

test("should missing token -> not pass the middleware", async () => { 
    
    const req: any = { headers: {} };
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.checkToken(req,res,next)

    expect(next).not.toBeCalled()
});

test("should none rol token -> not pass the admin middleware", async () => {

    const req: any = {token:{rol:0}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.adminRol(req,res,next)

    expect(next).not.toBeCalled()
});

test("should none rol token -> not pass the admin middleware", async () => {

    const req: any = {token:{rol:0}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.editorRol(req,res,next)

    expect(next).not.toBeCalled()
});
  

test("should none rol token -> not pass the sadmin middleware", async () => {

    
    const req: any = {token:{rol:0}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.superAdminRol(req,res,next)

    expect(next).not.toBeCalled()
});
  
test("should editor rol token -> pass the editor middleware", async () => {

    const req: any = {token:{rol:1}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.editorRol(req,res,next)

    expect(next).toBeCalled()
});

test("should editor rol token -> not pass the admin middleware", async () => {

    const req: any = {token:{rol:1}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.adminRol(req,res,next)

    expect(next).not.toBeCalled()
});

test("should editor rol token -> not pass the sadmin middleware", async () => {

    
    const req: any = {token:{rol:1}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.superAdminRol(req,res,next)

    expect(next).not.toBeCalled()
});

test("should admin rol token -> pass the editor middleware", async () => {

    const req: any = {token:{rol:2}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.editorRol(req,res,next)

    expect(next).toBeCalled()
});

test("should admin rol token -> pass the admin middleware", async () => {

    const req: any = {token:{rol:2}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.adminRol(req,res,next)

    expect(next).toBeCalled()
});

test("should admin rol token -> not pass the sadmin middleware", async () => {

    
    const req: any = {token:{rol:2}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.superAdminRol(req,res,next)

    expect(next).not.toBeCalled()
});

test("should sadmin rol token -> pass the editor middleware", async () => {

    const req: any = {token:{rol:3}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.editorRol(req,res,next)

    expect(next).toBeCalled()
});

test("should sadmin rol token -> pass the admin middleware", async () => {

    const req: any = {token:{rol:3}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.adminRol(req,res,next)

    expect(next).toBeCalled()
});

test("should sadmin rol token -> pass the sadmin middleware", async () => {
    
    const req: any = {token:{rol:3}};
    const res: any = { status: (_n: number) => { return { json: () => {} } } };
    const next: any = jest.fn();
  
    await TokenAuth.superAdminRol(req,res,next)

    expect(next).toBeCalled()
});