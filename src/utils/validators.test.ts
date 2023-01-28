import Validation from "./validators";

test("Correct date -> to be true", () => {
    expect(Validation.isDate("1/1/2023")).toBeTruthy();
})

test("Inorrect date -> to be false", () => {
    expect(Validation.isDate("*23")).toBeFalsy();
})

test("Correct mail -> to be true", () => {
    expect(Validation.isEmail("luis.leiton.cr@gmail.com")).toBeTruthy();
})

test("Inorrect mail -> to be false", () => {
    expect(Validation.isDate("*a*")).toBeFalsy();
})

test("Correct characters -> to be true", () => {
    expect(Validation.isSanitized("luis.leiton.cr@gmail.com")).toBeTruthy();
})

test("Inorrect characters -> to be false", () => {
    expect(Validation.isSanitized("*<>*")).toBeFalsy();
})

test("Number in range -> to be true", () => {
    expect(Validation.isMaxNumber(2, 10)).toBeTruthy();
})

test("Number out of range -> to be false", () => {
    expect(Validation.isMaxNumber(20, 10)).toBeFalsy();
})

test("Text in range -> to be true", () => {
    expect(Validation.isMaxSize("A", 2)).toBeTruthy();
})

test("Text out of range -> to be false", () => {
    expect(Validation.isMaxSize("ABC", 2)).toBeFalsy();
})

test("Text contains letters -> to be false", () => {
    expect(Validation.isNumber("A")).toBeFalsy();
})

test("Text not contains number -> to be true", () => {
    expect(Validation.isNumber("2")).toBeTruthy();
})

test("Positive number -> to be true", () => {
    expect(Validation.isPositive(1)).toBeTruthy();
})

test("Negative number -> to be false", () => {
    expect(Validation.isPositive(-1)).toBeFalsy();
})

test("Just text -> to be true", () => {
    expect(Validation.isText('Aa')).toBeTruthy();
})

test("Text with numbers -> to be false", () => {
    expect(Validation.isText('A1')).toBeFalsy();
})

test("Valid array -> to be true", () => {
    expect(Validation.isArray('[0,1]')).toBeTruthy();
})

test("No array -> to be false", () => {
    expect(Validation.isArray('{}')).toBeFalsy();
})

test("Two positions array -> to be true", () => {
    expect(Validation.isPositional('[1,1]')).toBeTruthy();
})

test("One position array -> to be false", () => {
    expect(Validation.isPositional('[1]')).toBeFalsy();
})
