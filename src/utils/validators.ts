const DIGIT_REGEX: RegExp = /^[0-9]+$/;
const SPECIAL_REGEX: RegExp = /[*%<>)(}{]/;
const TEXT_REGEX: RegExp = /^[a-zñA-ZÑ]+$/;
const EMAIL_REGEX: RegExp =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

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
   *  Validates a boolean array to verify that all fields are true
   */
  public static isValid(conditions:Array<boolean>){
    return !conditions.includes(false)
  }

}