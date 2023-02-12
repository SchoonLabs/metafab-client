import { AxiosRequestHeaders } from "axios";
export interface BaseParams {
    network?: string;
    apiUrl?: string;
    accessToken?: string;
    username?: string;
    password?: string;
}
export declare class BaseClass {
    static network?: string;
    static apiUrl?: string;
    static accessToken?: string;
    static username?: string;
    static password?: string;
    constructor(params: BaseParams);
    static call(method: string, baseRoute: string, baseHeaders?: AxiosRequestHeaders, body?: any): Promise<any>;
    static cleanRoute(route: string): string;
}
