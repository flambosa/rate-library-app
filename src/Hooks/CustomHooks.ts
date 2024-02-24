import { useEffect, useState } from "react";
import { RateLibraryService } from "../Controllers/RateLibraryService"
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import axios, { AxiosResponse } from "axios";

export const getRateLibraries = () => {
    const [rateLibraries, setRateLibraries] = useState<Array<IRateLibraryProps>>([]);
    const [shouldRefresh, setRefresh] = useState(false);

    useEffect(() => {
        RateLibraryService.getRateLibraries()
        .then((response) => {
          let blah = response;
          setRateLibraries(response);
        })
        .catch((e) => console.log(e));
      },[shouldRefresh]);

      const refreshItems = () => {
        setRefresh(!shouldRefresh)
      };

      return {rateLibraries, refreshItems};
}