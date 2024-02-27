import { AxiosResponse } from "axios";
import { IRateProps, MapToIRateProps } from "../Models/RateProps";
import { IRateService } from "./Services/IRateService";

export class RateController {

    constructor(private rateService: IRateService) {}
    
    async getRates(rateLibraryKey: string) : Promise<IRateProps[]> {

        return await this.rateService.getRates(rateLibraryKey);
    }

    async updateRate(rate: IRateProps) : Promise<IRateProps> {
        return this.rateService.updateRate(rate);
    }
}