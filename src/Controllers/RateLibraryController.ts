import { AxiosResponse } from "axios";
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import { IRateLibraryService } from "./Services/IRateLibraryService";

export class RateLibrariesController {

    constructor(private rateLibraryService: IRateLibraryService) {}
    
    async getRateLibraries() : Promise<IRateLibraryProps[]> {

        return this.rateLibraryService.getRateLibraries()
        // const {} = useAsync(() => {
        //     this.rateLibraryService.getRateLibraries()
        //     .then((response) => {return rateLibraryArray})
        //     .then((data) => console.log(data))
        // });
    }

    async updateRateLibrary(rateLibrary: IRateLibraryProps) : Promise<IRateLibraryProps> {
        return this.rateLibraryService.updateRateLibrary(rateLibrary);
    }
}