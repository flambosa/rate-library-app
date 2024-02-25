import { IRateLibraryProps } from "../../Models/RateLibraryProps";

export interface IRateLibraryService {
    getRateLibraries: () => Promise<IRateLibraryProps[]>;
}