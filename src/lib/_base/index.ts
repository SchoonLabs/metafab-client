import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { NETWORK } from "../constants";
import { Error, Response } from "../models";

export interface BaseParams {
  network?: string;
  apiUrl?: string;
  accessToken?: string;
  username?: string;
  password?: string;
}

export class BaseClass {
  static network?: string;
  static apiUrl?: string;
  static accessToken?: string;
  static username?: string;
  static password?: string;

  constructor(params: BaseParams) {
    BaseClass.network = params.network || NETWORK.ETH_TEST;
    BaseClass.apiUrl = params.apiUrl;
    BaseClass.accessToken = params.accessToken;
    BaseClass.username = params.username;
    BaseClass.password = params.password;
  }

  static async call(
    method: string,
    baseRoute: string,
    baseHeaders?: AxiosRequestHeaders,
    body?: any
  ): Promise<any> {
    const route = BaseClass.cleanRoute(baseRoute);
    const token = `${BaseClass.username}:${BaseClass.password}`;
    const encodedToken = Buffer.from(token).toString("base64");
    const basicAuth = { Authorization: "Basic " + encodedToken };
    const headers = Object.assign({}, basicAuth, baseHeaders || {});

    const config: AxiosRequestConfig = {
      method,
      url: `${BaseClass.apiUrl}/${route}`,
      headers,
    };
    if (body) {
      config.data = body;
    }

    try {
      const response = await axios(config);
      return Promise.resolve(new Response(response));
    } catch (e) {
      const error = new Error(e);
      console.error(error.data);
      return Promise.reject(error);
    }
  }

  static cleanRoute(route: string) {
    if (route?.startsWith("/")) {
      route = route?.substring(1);
    }
    return route;
  }
}
