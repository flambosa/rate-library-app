import { AxiosResponse } from "axios";
import { IRateLibraryProps, MapToIRateLibraryProps } from "../../Models/RateLibraryProps";
import http from "../../http-common"
import { IRateLibraryService } from "./IRateLibraryService";

export class RateLibraryService implements IRateLibraryService {

    getRateLibraries = () => {
        let result = {
            "@odata.context": "https://localhost:17032/odata/v1.0/$metadata#RateLibraries",
            "value": [
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNTowNzowNS41ODQrMTA6MDA=\"",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "Name": "Rate Libraries Training Rates",
                    "Code": "12",
                    "Locked": false,
                    "Notes": "",
                    "RatesVisible": true,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T15:07:05.584+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0xMFQxMjozMToyMy41NDUrMTA6MDA=\"",
                    "RateLibraryKey": "f72e195e-76c7-4114-891e-9be8e4ec9ef3",
                    "Name": "Introductory Training Rates",
                    "Code": "34",
                    "Locked": false,
                    "Notes": "",
                    "RatesVisible": true,
                    "DateAdded": "2021-06-10T12:31:23.545+10:00",
                    "DateModified": "2021-06-10T12:31:23.545+10:00"
                }
            ]
        }
    
        const rateLibraryArray = result.value.map(rateLibrary => MapToIRateLibraryProps(rateLibrary));
        return new Promise<Array<IRateLibraryProps>>((resolve, reject) => {setTimeout(() => {resolve(rateLibraryArray)})})
        //return http.get<IRateLibraryProps[]>("/RateLibraries");
    };
}