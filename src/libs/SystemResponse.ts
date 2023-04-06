import { CodeMessage, StatusCodes } from "./response";

export class SystemResponse {

  static getInstance() {
    return new SystemResponse();
  }

    /**
   * This method gets message, error, and code as parameters and returns the formatted object for the error response.
   * @property {String} message Custom error message.
   * @property {String} error Custom error given.
   * @property {Int} code Error Response Code as per error type.
   * @returns {Object} Formatted object having message custom or as per code, status and error.
   */
    getErrorResponse(message, error, code) {
        return {
          message: message || CodeMessage[code],
          status: code,
          error: error || {},
        }
      }

  static badRequestError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.BAD_REQUEST);
  }
}
