class AppError extends Error {
  public statusCode: number;
  public statusError: string;

  constructor(
    statusCode: number,
    message: string,
    statusError: string = 'Error'
  ) {
    super(message);
    this.statusCode = statusCode;
    this.statusError = statusError;
  }
}

export default AppError;
