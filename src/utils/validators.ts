const getSize = require("image-size-from-base64")

const DIGIT_REGEX: RegExp = /^[0-9]+$/;
const SPECIAL_REGEX: RegExp = /[*%<>)(}{]/;
const TEXT_REGEX: RegExp = /^[a-zñáéíóú A-ZÑ]+$/;
const EMAIL_REGEX: RegExp =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,24}$/;
const MIMETYPES = ["data:image/jpeg", "data:image/png", "data:image/jpg", "data:image/webp"];
const IMAGE_SIZE = 500;

export default class Validation {
  /**
   *  Validates email format
   */
  public static isEmail = (mail: string) => EMAIL_REGEX.test(mail);

  /**
   *  Validates special characters
   */
  public static isSanitized = (input: string) => !SPECIAL_REGEX.test(input);

  /**
   *  Validates string max len
   */
  public static isMaxSize = (input: string, max: number) => input.length <= max;

  /**
   *  Validates string min len
   */
  public static isMinSize = (input: string, min: number) => input.length >= min;

  /**
   *  Validates min number
   */
  public static isMinNumber = (input: number, min: number) => input >= min;

  /**
   *  Validates max number
   */
  public static isMaxNumber = (input: number, max: number) => input <= max;

  /**
   *  Validates number
   */
  public static isNumber = (number: string) => DIGIT_REGEX.test(number);

  /**
   *  Validates positive number
   */
  public static isPositive = (number: number) => number >= 0;

  /**
   *  Validates only letters
   */
  public static isText = (input: string) => TEXT_REGEX.test(input);

  /**
   *  Validate a date
   */
  public static isDate = (date: string) => !!new Date(date).getDate();

    /**
   *  Validate a password 
   */
  public static validPassword = (password: string) =>  PASSWORD_REGEX.test(password);

  /**
   *  Validate id an string is a valid array
   */
  public static isArray = (arr: string) => Array.isArray(JSON.parse(arr));

  /**
   *  Validate id an array is positional array
   */
  public static isPositional = (arr: string) => JSON.parse(arr).length === 2;

  /**
   *  Validates a boolean array to verify that all fields are true
   */
  public static isValidImage(image: string) {
    return MIMETYPES.includes(image.split(";")[0]);
  }

  /**
   *  Validates a boolean array to verify that all fields are true
   */
  public static async isValidImageSize(image: string) {
    try {
      return await getSize(image) < IMAGE_SIZE;
    } catch (error) {
      return false;
    }
  }

  /**
   *  Validates a boolean array to verify that all fields are true
   */
  public static isValid(conditions: Array<boolean>) {
    return !conditions.includes(false);
  }



  public static isEmpty (string: string){
    return string.length === 0;
  } 
}

