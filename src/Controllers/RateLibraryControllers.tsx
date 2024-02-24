import { useEffect, useState } from "react";
import { MapToIRateLibraryProps } from "../Models/RateLibraryProps";
import { useAsync } from "react-async";

const GetRateLibrariesController = () => {
    const [rateLibraryies, setRateLibraries] = useState([]);

        let result = {
        "@odata.context": "https://localhost:17032/odata/v1.0/$metadata#RateLibraries",
        "value": [
            {
                "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNTowNzowNS41ODQrMTA6MDA=\"",
                "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
                "Name": "Rate Libraries Training Rates",
                "Code": "",
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
                "Code": "",
                "Locked": false,
                "Notes": "",
                "RatesVisible": true,
                "DateAdded": "2021-06-10T12:31:23.545+10:00",
                "DateModified": "2021-06-10T12:31:23.545+10:00"
            }
        ]
    }

    const rateLibraryArray = result.value.map(rateLibrary => MapToIRateLibraryProps(rateLibrary));

    const {} = useAsync(() => {
        fetch('https//localhost:17032/odata/v1.0/RateLibraries',{
            method: "GET",
            headers: {
                Authorization: "Basic Y3NoaWVsZDozQUE0QzgwRjI2MjA5OTc2MzJENDcxNjg4QTQ1QkNEMTUwQkU0QjlGNTc3MkE0NUI2NTNBM0VCQ0NEMjBFQUZCLTE=",
                Accept: '*/*',
                ContentType: "application/json",
                Host: 'localhost:17032',
                AcceptEncoding: 'gzip, deflate, br',
                Connection: 'keep-alive',
            }
        })
        .then((response) => {return rateLibraryArray})
        .then((data) => console.log(data))
    });
}

export default GetRateLibrariesController
    //const rateLibraryArray = (await response.json()).value.map((rateLibrary: any) => MapToIRateLibraryProps(rateLibrary));

    // let result = {
    //     "@odata.context": "https://localhost:17032/odata/v1.0/$metadata#RateLibraries",
    //     "value": [
    //         {
    //             "@odata.etag": "W/\"MjAyMS0wNi0wNFQxNTowNzowNS41ODQrMTA6MDA=\"",
    //             "RateLibraryKey": "d897d324-9bb4-452f-b0ab-8a57728a8455",
    //             "Name": "Rate Libraries Training Rates",
    //             "Code": "",
    //             "Locked": false,
    //             "Notes": "",
    //             "RatesVisible": true,
    //             "DateAdded": "2021-06-04T14:17:35.71+10:00",
    //             "DateModified": "2021-06-04T15:07:05.584+10:00"
    //         },
    //         {
    //             "@odata.etag": "W/\"MjAyMS0wNi0xMFQxMjozMToyMy41NDUrMTA6MDA=\"",
    //             "RateLibraryKey": "f72e195e-76c7-4114-891e-9be8e4ec9ef3",
    //             "Name": "Introductory Training Rates",
    //             "Code": "",
    //             "Locked": false,
    //             "Notes": "",
    //             "RatesVisible": true,
    //             "DateAdded": "2021-06-10T12:31:23.545+10:00",
    //             "DateModified": "2021-06-10T12:31:23.545+10:00"
    //         }
    //     ]
    // }

    // const rateLibraryArray = result.value.map(rateLibrary => MapToIRateLibraryProps(rateLibrary));
    // return rateLibraryArray;
