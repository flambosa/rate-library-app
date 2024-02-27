import { AxiosResponse } from "axios";
import { IRateProps } from "../../Models/RateProps";

export interface IRateService {
    getRates: (rateLibraryKey: string) => Promise<AxiosResponse<any>>;
    updateRate: (rate: IRateProps) =>  Promise<IRateProps>;
}