import { IRateProps } from "../Models/RateProps";
import { IRateService } from "./Services/IRateService";

export class RateController {

    constructor(private rateService: IRateService) {}
    
    async getRates(rateLibraryKey: string) : Promise<IRateProps[]> {

        return this.rateService.getRates(rateLibraryKey)
        // const {} = useAsync(() => {
        //     this.rateLibraryService.getRateLibraries()
        //     .then((response) => {return rateLibraryArray})
        //     .then((data) => console.log(data))
        // });
    }

    async updateRate(rate: IRateProps) : Promise<IRateProps> {
        return this.rateService.updateRate(rate);
    }
}