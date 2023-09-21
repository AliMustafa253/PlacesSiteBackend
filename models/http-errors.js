class HttpError extends Error {
  constructor(message, errorCode = 500) {
    super(message); // Add a 'message property
    this.code = errorCode; // Adds a code property
  }
}

module.exports = HttpError;
