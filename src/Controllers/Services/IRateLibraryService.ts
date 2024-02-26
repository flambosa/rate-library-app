import { IRateLibraryProps } from "../../Models/RateLibraryProps";

export interface IRateLibraryService {
    getRateLibraries: () => Promise<IRateLibraryProps[]>;
    updateRateLibrary: (rateLibrary: IRateLibraryProps) =>  Promise<IRateLibraryProps>;
}