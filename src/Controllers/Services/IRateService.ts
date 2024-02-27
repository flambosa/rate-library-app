import { IRateProps } from "../../Models/RateProps";

export interface IRateService {
    getRates: (rateLibraryKey: string) => Promise<IRateProps[]>;
    updateRate: (rate: IRateProps) =>  Promise<IRateProps>;
}