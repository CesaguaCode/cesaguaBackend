import PassAuth from "./passAuth";
const passAuth = new PassAuth();

// This test verifies that the function should return false for a wrong password
test("should wrong password -> be false", () => {
  const status = passAuth.comparePassword("123", {
    salt: "dSjjYVDk2OB7B/4gjR6WJg==",
    pepper: "6642",
    password:
      "0006e4628d0f1fc35e4a196f6973e27d53acf33ba9f3b033db745ef9b9937308",
  });

  expect(status).toEqual(false);
});


// This test verifies that the function should return true for a right password
test("should right password -> be true", () => {

    const pwdData = passAuth.encryptPassword("123");
    const status = passAuth.comparePassword("123", pwdData);
  
    expect(status).toEqual(true);
});
 

// This test verifies that the encrypted password should start with "000"
test("should encrypted password -> start with 000", () => {

    const pwdData = passAuth.encryptPassword("123");
    const {password} = pwdData
  
    expect(password.startsWith("000")).toEqual(true);
});
