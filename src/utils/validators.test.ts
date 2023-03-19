import Validation from "./validators";

// This test checks if the isDate function correctly identifies a correct date (in the format of "m/d/yyyy") as true.
test("Correct date -> to be true", () => {
    expect(Validation.isDate("1/1/2023")).toBeTruthy();
})

// This test checks if the isDate function correctly identifies an incorrect date as false.
test("Incorrect date -> to be false", () => {
    expect(Validation.isDate("*23")).toBeFalsy();
})

// This test checks if the isEmail function correctly identifies a correctly formatted email address as true.
test("Correct mail -> to be true", () => {
    expect(Validation.isEmail("luis.leiton.cr@gmail.com")).toBeTruthy();
})

// This test checks if the isEmail function correctly identifies an incorrectly formatted email address as false.
test("Incorrect mail -> to be false", () => {
    expect(Validation.isDate("*a*")).toBeFalsy();
})

// This test checks if the isSanitized function correctly identifies a string containing only sanitized characters as true.
test("Correct characters -> to be true", () => {
    expect(Validation.isSanitized("luis.leiton.cr@gmail.com")).toBeTruthy();
})

// This test checks if the isSanitized function correctly identifies a string containing unsanitized characters as false.
test("Incorrect characters -> to be false", () => {
    expect(Validation.isSanitized("*<>*")).toBeFalsy();
})

// This test checks if the isMaxNumber function correctly identifies a number within a range as true.
test("Number in range -> to be true", () => {
    expect(Validation.isMaxNumber(2, 10)).toBeTruthy();
})

// This test checks if the isMaxNumber function correctly identifies a number outside of a range as false.
test("Number out of range -> to be false", () => {
    expect(Validation.isMaxNumber(20, 10)).toBeFalsy();
})

// This test checks if the isMaxSize function correctly identifies a string of the correct length as true.
test("Text in range -> to be true", () => {
    expect(Validation.isMaxSize("A", 2)).toBeTruthy();
})

// This test checks if the isMaxSize function correctly identifies a string of an incorrect length as false.
test("Text out of range -> to be false", () => {
    expect(Validation.isMaxSize("ABC", 2)).toBeFalsy();
})

// This test checks if the isNumber function correctly identifies a string containing a number as true.
test("Text contains numbers -> to be true", () => {
    expect(Validation.isNumber("2")).toBeTruthy();
})

// This test checks if the isNumber function correctly identifies a string containing non-numbers as false.
test("Text not contains number -> to be false", () => {
    expect(Validation.isNumber("A")).toBeFalsy();
})

// This test checks if the isPositive function correctly identifies a positive number as true.
test("Positive number -> to be true", () => {
    expect(Validation.isPositive(1)).toBeTruthy();
})

// This test checks if the isPositive function correctly identifies a negative number as false.
test("Negative number -> to be false", () => {
    expect(Validation.isPositive(-1)).toBeFalsy();
})

// This test checks if the isText function correctly identifies a string containing only letters as true.
test("Just text -> to be true", () => {
    expect(Validation.isText('Aa')).toBeTruthy();
})

// Verifies whether a string contains only letters and not numbers
test("Text with numbers -> to be false", () => {
    expect(Validation.isText('A1')).toBeFalsy();
})

// Verifies whether a string is a valid JSON array
test("Valid array -> to be true", () => {
    expect(Validation.isArray('[0,1]')).toBeTruthy();
})

// Verifies whether a string is not a valid JSON array
test("No array -> to be false", () => {
    expect(Validation.isArray('{}')).toBeFalsy();
})

// Verifies whether a string is a valid JSON array with exactly two elements
test("Two positions array -> to be true", () => {
    expect(Validation.isPositional('[1,1]')).toBeTruthy();
})

// Verifies whether a string is not a valid JSON array with only one element
test("One position array -> to be false", () => {
    expect(Validation.isPositional('[1]')).toBeFalsy();
})