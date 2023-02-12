import { AxiosError } from "axios";

export class Error {
  readonly status: number;
  readonly statusText: string;
  readonly data?: any;

  constructor(error: AxiosError | any) {
    this.status = error.response?.status || 400;
    this.statusText = error.response?.statusText || error;
    this.data = error.response?.data || error;
  }
}
