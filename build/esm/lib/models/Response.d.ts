import { AxiosResponse } from "axios";
export declare class Response {
    readonly status: number;
    readonly data: any;
    constructor(response: AxiosResponse);
}
