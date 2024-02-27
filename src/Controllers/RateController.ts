import { AxiosResponse } from "axios";
import { IRateProps, MapToIRateProps } from "../Models/RateProps";
import { IRateService } from "./Services/IRateService";

export class RateController {

    constructor(private rateService: IRateService) {}
    
    async getRates(rateLibraryKey: string) : Promise<IRateProps[]> {

        var response = await this.rateService.getRates(rateLibraryKey);
        return response.data.value.map((item : any) => MapToIRateProps(item));
    }

    async updateRate(rate: IRateProps) : Promise<IRateProps> {
        return this.rateService.updateRate(rate);
    }
}