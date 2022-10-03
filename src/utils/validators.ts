const MAX_IMAGE_SIZE: Number = 3;

const DIGIT_REGEX: RegExp = /^[0-9]+$/;
const SPECIAL_REGEX: RegExp = /[*%<>)(}{]/;
const TEXT_REGEX: RegExp = /^[a-zñA-ZÑ]+$/;
const EMAIL_REGEX: RegExp =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

export default class Validation {
  // Validates email format
  verifyEmailFormat = (mail: string) => EMAIL_REGEX.test(mail);

  // Validates special characters
  verifySpecialCharacters = (input: string) => !SPECIAL_REGEX.test(input);

  // Validates string max len
  verifyMaxSize = (input: string, max: number) => input.length <= max;

  // Validates string min len
  verifyMinSize = (input: string, min: number) => input.length >= min;

  // Validates min number
  verifyMinNumber = (input: number, min: number) => input >= min;

  // Validates max number
  verifyMaxNumber = (input: number, max: number) => input <= max;

  // Validates number
  verifyNumber = (number: string) => DIGIT_REGEX.test(number);

  // Validates positive number
  verifyPositive = (number: number) => number >= 0;

  // Validates only letters
  verifyText = (input: string) => TEXT_REGEX.test(input);

  // Validate a date
  verifyDate = (date: string) => !!new Date(date).getDate();

}
