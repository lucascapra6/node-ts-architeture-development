import { Response} from "express";
import {RequestResponseError} from "../../types/Error.js";
import RequestResponseErrorThrowler from "./RequestResponseErrorThrowler.js";
export default class RequestErrorHandler {
  private response: Response;
  constructor(serverResponse: Response) {
    this.response = serverResponse;
  }
  sendError(error: RequestResponseError) {
      this.response.status(error.statusCode).json({ success: error.success, data: error.data, message: error.message});
  }
}
