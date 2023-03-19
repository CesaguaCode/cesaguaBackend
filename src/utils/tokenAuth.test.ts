import TokenAuth from "./tokenAuth";
import "dotenv/config";

// This test checks if the createToken function returns a non-null value.
test("should tocken create -> not be null", async () => {
    const token = await TokenAuth.createToken({ body: "Body" })
    expect(token).not.toBeNull()
});

// This test checks if the checkToken middleware allows the request to pass when the Authorization header is set correctly with a valid token.
test("should correct token -> pass the middleware", async () => {

    const token: any = await TokenAuth.createToken({ body: "Body" })
    const req: any = { headers: { authorization: `Bearer ${token.token}` } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.checkToken(req, res, next)

    expect(next).toBeCalled()
});

// This test checks if the checkToken middleware blocks the request when the Authorization header is set with an invalid token.
test("should incorrect token -> not pass the middleware", async () => {

    const token: any = "Bearer 123"
    const req: any = { headers: { authorization: `Bearer ${token.token}` } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.checkToken(req, res, next)

    expect(next).not.toBeCalled()
});

// This test checks if the checkToken middleware blocks the request when the Authorization header is not set.
test("should missing token -> not pass the middleware", async () => {

    const req: any = { headers: {} };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.checkToken(req, res, next)

    expect(next).not.toBeCalled()
});

// This test checks if the adminRol middleware blocks the request when the token is not associated with an admin role (role 2).
test("should none rol token -> not pass the admin middleware", async () => {

    const req: any = { token: { rol: 0 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.adminRol(req, res, next)

    expect(next).not.toBeCalled()
});

// This test checks if the editorRol middleware blocks the request when the token is not associated with an editor role (role 1).
test("should none rol token -> not pass the admin middleware", async () => {

    const req: any = { token: { rol: 0 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.editorRol(req, res, next)

    expect(next).not.toBeCalled()
});


// This test checks if the superAdminRol middleware blocks the request when the token is not associated with a superadmin role (role 3).
test("should none rol token -> not pass the sadmin middleware", async () => {


    const req: any = { token: { rol: 0 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.superAdminRol(req, res, next)

    expect(next).not.toBeCalled()
});

// This test checks if the editorRol middleware allows the request to pass when the token is associated with an editor role (role 1).
test("should editor rol token -> pass the editor middleware", async () => {

    const req: any = { token: { rol: 1 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.editorRol(req, res, next)

    expect(next).toBeCalled()
});

// This test checks if the adminRol middleware blocks the request when the token is associated with an editor role (role 1).
test("should editor rol token -> not pass the admin middleware", async () => {

    const req: any = { token: { rol: 1 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.adminRol(req, res, next)

    expect(next).not.toBeCalled()
});

// This test checks if the superAdminRol middleware blocks the request when the token is associated with an editor role (role 1).
test("should editor rol token -> not pass the sadmin middleware", async () => {


    const req: any = { token: { rol: 1 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.superAdminRol(req, res, next)

    expect(next).not.toBeCalled()
});

// This test checks if the editorRol middleware allows the request to pass when the token is associated with an admin role (role 2).
test("should admin rol token -> pass the editor middleware", async () => {

    const req: any = { token: { rol: 2 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.editorRol(req, res, next)

    expect(next).toBeCalled()
});

// This test checks if the adminRol middleware allows the request to pass when the token is associated with an admin role (role 2).
test("should admin rol token -> pass the admin middleware", async () => {

    const req: any = { token: { rol: 2 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.adminRol(req, res, next)

    expect(next).toBeCalled()
});

// This test checks if the superAdminRol middleware blocks the request when the token is associated with an admin role (role 2).
test("should admin rol token -> not pass the sadmin middleware", async () => {


    const req: any = { token: { rol: 2 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.superAdminRol(req, res, next)

    expect(next).not.toBeCalled()
});

// This test checks if the editorRol middleware allows the request to pass when the token is associated with a superadmin role (role 3).
test("should sadmin rol token -> pass the editor middleware", async () => {

    const req: any = { token: { rol: 3 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.editorRol(req, res, next)

    expect(next).toBeCalled()
});

// This test checks if the adminRol middleware allows the request to pass when the token is associated with a superadmin role (role 3).
test("should sadmin rol token -> pass the admin middleware", async () => {

    const req: any = { token: { rol: 3 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.adminRol(req, res, next)

    expect(next).toBeCalled()
});

// This test checks if the superAdminRol middleware allows the request to pass when the token is associated with a superadmin role (role 3)
test("should sadmin rol token -> pass the sadmin middleware", async () => {

    const req: any = { token: { rol: 3 } };
    const res: any = { status: (_n: number) => { return { json: () => { } } } };
    const next: any = jest.fn();

    await TokenAuth.superAdminRol(req, res, next)

    expect(next).toBeCalled()
});