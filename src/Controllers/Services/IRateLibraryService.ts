import { AxiosResponse } from "axios";
import { IRateLibraryProps } from "../../Models/RateLibraryProps";

export interface IRateLibraryService {
    getRateLibraries: () => Promise<AxiosResponse<any>>;
    updateRateLibrary: (rateLibrary: IRateLibraryProps) => Promise<IRateLibraryProps>;
}