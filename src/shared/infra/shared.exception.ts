export default class AppError extends Error {
  status!: number;
  code!: string;
  message!: string;

  constructor(status: number, code: string, message: string) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.status = status;
    this.code = code;
    this.message = message;
  }
}
