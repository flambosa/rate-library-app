import { useEffect, useState } from "react";
import { RateLibraryService } from "../Controllers/Services/RateLibraryService"
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import axios, { AxiosResponse } from "axios";
import { IRateLibraryService } from "../Controllers/Services/IRateLibraryService";
import { RateLibrariesController } from "../Controllers/RateLibraryControllers";

// export const getRateLibraries = () => {
//     const [rateLibraries, setRateLibraries] = useState<Array<IRateLibraryProps>>([]);
//     const [shouldRefresh, setRefresh] = useState(false);

//     useEffect(() => {
//         RateLibraryService.getRateLibraries()
//         .then((response) => {
//           let blah = response;
//           setRateLibraries(response);
//         })
//         .catch((e) => console.log(e));
//       },[shouldRefresh]);

//       const refreshItems = () => {
//         setRefresh(!shouldRefresh)
//       };

//       return {rateLibraries, refreshItems};
// }
const rateLibraryService : IRateLibraryService = new RateLibraryService();
const rateLibraryController : RateLibrariesController = new RateLibrariesController(rateLibraryService);

export const getRateLibraries2 = () => {
  return getItems(() => rateLibraryController.getRateLibraries());
}

function dummyGetRate(key: string) : Promise<string[]> {
  return new Promise((resolve, reject) => setTimeout(() => resolve(["1","2"])))
}

export const dummyGetRates = (key: string) => {
  return getItems(() => dummyGetRate(key));
}

function getItems<TItem>(serviceCall: () => Promise<Array<TItem>>) {
  const [items, setItems] = useState<Array<TItem>>([]);
  const [activeItem, setActiveItem] = useState<TItem>()
  const [shouldRefresh, setRefresh] = useState(false);

  useEffect(() => {
      serviceCall()
      .then((response) => {
        let blah = response;
        setItems(response);
        setActiveItem(response?.length > 0 ? response[0] : undefined)
      })
      .catch((e) => console.log(e));
    },[shouldRefresh]);

    const refreshItems = () => {
      setRefresh(!shouldRefresh)
    };

    return {items, activeItem, setActiveItem, refreshItems};
}