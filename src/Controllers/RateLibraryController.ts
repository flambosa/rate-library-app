import { AxiosResponse } from "axios";
import { IRateLibraryProps, MapToIRateLibraryProps } from "../Models/RateLibraryProps";
import { IRateLibraryService } from "./Services/IRateLibraryService";

export class RateLibrariesController {

    constructor(private rateLibraryService: IRateLibraryService) {}
    
    async getRateLibraries() : Promise<IRateLibraryProps[]> {

        var response = await this.rateLibraryService.getRateLibraries();
        return response.data.value.map((item : any) => MapToIRateLibraryProps(item));
    }

    async updateRateLibrary(rateLibrary: IRateLibraryProps) : Promise<IRateLibraryProps> {
        return this.rateLibraryService.updateRateLibrary(rateLibrary);
    }
}