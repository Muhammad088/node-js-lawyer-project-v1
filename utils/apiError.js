class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    // this.msg = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith(4) ? "failed" : "error";
  }
}

export default ApiError;
