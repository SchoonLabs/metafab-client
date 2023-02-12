import { AxiosError } from "axios";
export declare class Error {
    readonly status: number;
    readonly statusText: string;
    readonly data?: any;
    constructor(error: AxiosError | any);
}
