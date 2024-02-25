import { IRateLibraryProps, MapToIRateLibraryProps } from "../Models/RateLibraryProps";
import { useAsync } from "react-async";
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
}