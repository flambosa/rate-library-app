import { IRateProps } from "../../Models/RateProps";

export interface IRateService {
    getRates: (rateLibraryKey: string) => Promise<IRateProps[]>;
}