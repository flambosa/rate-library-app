import { IRateService } from "./IRateService";
import { IRateProps, MapToIRateProps } from "../../Models/RateProps";
import { IRateLibraryProps } from "../../Models/RateLibraryProps";
import http from "../../http-common"

export class RateService implements IRateService {

    getRates = async (rateLibraryKey: string) => {
        let allRates = {
            "@odata.context": "https://localhost:17032/odata/v1.0/$metadata#Rates",
            "value": [
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "00ebe79d-6391-44e4-859a-ef980fbc03b1",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "M-720 Door",
                    "Description": "Flush internal door 720 x 2040 x 40",
                    "RateGroup": "Materials - Doors & Windows",
                    "UnitOfMeasure": "no",
                    "Value": 252.0,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "01047621-8d60-426d-a41a-8d240cb07559",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "C-Cill Brds",
                    "Description": "Window boards in medium density fibreboard with hardwood lip on one edge, 18 x 200mm including 1 undercoat and 1 full coat white gloss paint",
                    "RateGroup": "E08-Windows & Exterior Doors",
                    "UnitOfMeasure": "m",
                    "Value": 30.6095,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "01e33a2a-d300-4748-a937-f2dcbcb22f41",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "S-Wall Tiles 150x150",
                    "Description": "150 x 150 x 6mm glazed ceramic wall tiles, fixed with adhesive, white grout",
                    "RateGroup": "E13-Wall Finishes",
                    "UnitOfMeasure": "m2",
                    "Value": 139.3,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "02dad9c8-4d24-44df-b97d-6760ff862c2a",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "C-820 Sliding Door",
                    "Description": "820 x 2040 internal sliding door, flush, veneered both sides, including softwood frame & hardwood architraves, lining, stops and hardware",
                    "RateGroup": "E11-Interior Doors",
                    "UnitOfMeasure": "no",
                    "Value": 1025.21875,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "04a13ae7-4390-4a3c-ae29-a39cdd7146f6",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "M-100x19 SQR",
                    "Description": "100 x 19 square dressed softwood",
                    "RateGroup": "Materials - Framing",
                    "UnitOfMeasure": "m",
                    "Value": 4.45,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "05e214db-2217-4489-985c-e9a030442c88",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "6f04209d-3dcf-44a9-bcbd-7732acc6711e",
                    "ItemCode": "C-Weep Vents",
                    "Description": "Plastic weep vents",
                    "RateGroup": "E07-Exterior Walls",
                    "UnitOfMeasure": "no",
                    "Value": 0.4148,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "05f9c37b-2e36-4e1f-a2b9-b7b254b19bea",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "6f04209d-3dcf-44a9-bcbd-7732acc6711e",
                    "ItemCode": "C-HW DS Db",
                    "Description": "Hardwood door sets, double including frame and hardware",
                    "RateGroup": "E08-Windows & Exterior Doors",
                    "UnitOfMeasure": "no",
                    "Value": 2820.5,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "063b3ef2-1d0b-4ae0-98e4-0816b49a53de",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "6f04209d-3dcf-44a9-bcbd-7732acc6711e",
                    "ItemCode": "M-Stop",
                    "Description": "GIB stopping compound",
                    "RateGroup": "Materials - Interior Linings",
                    "UnitOfMeasure": "l",
                    "Value": 7.0,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "0802180f-e4a0-430c-b08b-b973d526683c",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "S-Flr Tiles 300x300",
                    "Description": "300 x 300 x 10mm ceramic floor tiles, bedded on floor tile adhesive, coloured grout",
                    "RateGroup": "E12-Floor Finishes",
                    "UnitOfMeasure": "m2",
                    "Value": 184.1,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "0bbe1fec-e2e1-4a17-8d51-8ff12ed9722f",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "P-Compressor",
                    "Description": "Compressor",
                    "RateGroup": "Plant",
                    "UnitOfMeasure": "wk",
                    "Value": 157.5,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "0cf06352-0290-4e60-832b-3753a4e0dbc7",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "6f04209d-3dcf-44a9-bcbd-7732acc6711e",
                    "ItemCode": "L-Dogman",
                    "Description": "Dogman",
                    "RateGroup": "Labour",
                    "UnitOfMeasure": "hr",
                    "Value": 57.75,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "0e578da6-77c9-4fbf-a7dc-7e4b27208c34",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "6f04209d-3dcf-44a9-bcbd-7732acc6711e",
                    "ItemCode": "L-Labourer",
                    "Description": "Labourer",
                    "RateGroup": "Labour",
                    "UnitOfMeasure": "hr",
                    "Value": 33.0,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "0e57e2b8-4e91-4e36-b7dc-8850b3415394",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "6f04209d-3dcf-44a9-bcbd-7732acc6711e",
                    "ItemCode": "M-GIB Screws",
                    "Description": "GIB screws",
                    "RateGroup": "Materials - Interior Linings",
                    "UnitOfMeasure": "no",
                    "Value": 0.35,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "0eb2f9ee-db57-4d4b-9fe8-a522597a31d7",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "S-Hip Tiles",
                    "Description": "Concrete half round hip tiles, bedded in mortar",
                    "RateGroup": "E06-Roof",
                    "UnitOfMeasure": "m",
                    "Value": 143.45,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "0faedaf9-9deb-49b9-b5cd-1a92cb38fa6f",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "6f04209d-3dcf-44a9-bcbd-7732acc6711e",
                    "ItemCode": "C-665 Mesh",
                    "Description": "Fabric reinforcement No 665 - in strips 500mm wide",
                    "RateGroup": "E02-Substructure",
                    "UnitOfMeasure": "m2",
                    "Value": 23.255,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "10e5cbfb-0cb5-469a-9999-4c3d271442a2",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "P-Stake",
                    "Description": "Steel stake",
                    "RateGroup": "Plant",
                    "UnitOfMeasure": "week",
                    "Value": 1.8,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "1157f03b-f8f9-4466-ba16-9681c6569004",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "C-665 Mesh",
                    "Description": "Fabric reinforcement No 665 - in strips 500mm wide",
                    "RateGroup": "E02-Substructure",
                    "UnitOfMeasure": "m2",
                    "Value": 20.8975,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "11b16cd5-2482-4fb0-8372-deb1d93d1457",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "6f04209d-3dcf-44a9-bcbd-7732acc6711e",
                    "ItemCode": "C-Pbrd Clg Aqua",
                    "Description": "13mm GIB Aqualine ceiling board, fixed with nails to softwood framing, joints stopped",
                    "RateGroup": "E14-Ceiling Finishes",
                    "UnitOfMeasure": "m2",
                    "Value": 49.7537,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "125e3f00-f62e-4f2c-9ad3-87bf02b32a46",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "P-Block Cutter",
                    "Description": "Block cutter",
                    "RateGroup": "Plant",
                    "UnitOfMeasure": "wk",
                    "Value": 63.0,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "13a82dc8-9ea5-431d-9b27-3270b29731e8",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "6f04209d-3dcf-44a9-bcbd-7732acc6711e",
                    "ItemCode": "M-DPM",
                    "Description": "DPM (incl. allowance for sundries)",
                    "RateGroup": "Materials - Groundworks",
                    "UnitOfMeasure": "m2",
                    "Value": 5.25,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "141e4f14-095d-4818-8755-fc9df0a90214",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "C-Pbrd Clg Aqua",
                    "Description": "13mm GIB Aqualine ceiling board, fixed with nails to softwood framing, joints stopped",
                    "RateGroup": "E14-Ceiling Finishes",
                    "UnitOfMeasure": "m2",
                    "Value": 44.8358196721311,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "15cadd69-1143-4583-bbb0-e4889df8a11b",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "M-HW Windows",
                    "Description": "Hardwood windows, glazed (rate per m²)",
                    "RateGroup": "Materials - Doors & Windows",
                    "UnitOfMeasure": "no",
                    "Value": 1260.0,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "16f4007e-73f7-406e-a189-951cdca3e93e",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "M-100x38 H1.2 Sawn",
                    "Description": "100 x 38 H1.2 sawn softwood",
                    "RateGroup": "Materials - Framing",
                    "UnitOfMeasure": "m",
                    "Value": 3.15,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "175784ec-5a7a-4be2-970d-a817ca282eac",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "M-Hinge Int",
                    "Description": "Hinges - standard internal",
                    "RateGroup": "Materials - Hardware",
                    "UnitOfMeasure": "pr",
                    "Value": 15.75,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                },
                {
                    "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNDoxNzozNS43MSsxMDowMA==\"",
                    "RateKey": "17680a47-10ab-4c27-bea7-bb1b4bc8238b",
                    "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                    "LocationKey": "fc1a23b5-9d63-4ed1-b3be-c84ed238e382",
                    "ItemCode": "M-Metal",
                    "Description": "Metal aggregate sub-base material",
                    "RateGroup": "Materials - Groundworks",
                    "UnitOfMeasure": "m3",
                    "Value": 126.0,
                    "DateAdded": "2021-06-04T14:17:35.71+10:00",
                    "DateModified": "2021-06-04T14:17:35.71+10:00"
                }
            ],
            "@odata.nextLink": "https://localhost:17032/odata/v1.0/RateLibraries(d897d324-9bb4-452f-b0ab-8a57728a8455)/Rates?$skiptoken=RateKey-17680a47-10ab-4c27-bea7-bb1b4bc8238b"
        }
    
        let result : any[];
        const splitter = Math.round((allRates.value.length - 1)/2);
        if (rateLibraryKey === "d897d324-9bb4-452f-b0ab-8a57728a8455") {
            result = allRates.value;
        }
        else {
            result = allRates.value.slice(allRates.value.length-3, allRates.value.length-1);
        }
        const rateLibraryArray = result.map(rates => MapToIRateProps(rates));
        //return new Promise<Array<IRateProps>>((resolve, reject) => {setTimeout(() => {resolve(rateLibraryArray)})})
        var response = await http.get<any>(`/RateLibraries(${rateLibraryKey})/Rates`);
        return response.data.value.map((item : any) => MapToIRateProps(item));
    };

    updateRate = (rate: IRateProps) => {
        return new Promise<IRateProps>((resolve, reject) => {setTimeout(() => {resolve(rate)})})
    };
}