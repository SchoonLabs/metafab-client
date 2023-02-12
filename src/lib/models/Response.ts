import { AxiosResponse } from "axios";

export class Response {
  readonly status: number;
  readonly data: any;

  constructor(response: AxiosResponse) {
    this.status = response.status;
    this.data = response.data;
  }
}
