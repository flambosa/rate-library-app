import { createContext, useEffect, useState } from "react";
import { rateController, rateLibraryController } from "../Controllers/ControllerSingletons";
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import {equals} from "../Utilities/UtilityFunctions";
import { IRateProps } from "../Models/RateProps";
import { AxiosResponse } from "axios";

export const getRateLibraries = () => {
  return getItems(() => rateLibraryController.getRateLibraries());
}

export const getRates = (key: string) => {
  return getItems(() => rateController.getRates(key));
}

function getItems<TItem extends object>(serviceCall: () => Promise<Array<TItem>>) {
  const [items, setItems] = useState<Array<TItem>>([]);
  const [activeItem, setActiveItem] = useState<TItem>()
  const [shouldRefresh, setRefresh] = useState(false);

  useEffect(() => {
      serviceCall()
      .then((response) => {
        setItems(response);
        // retain currently active item if it still exists in the set of refreshed items
        const refreshedActiveItem = activeItem !== undefined ? response?.find(item => equals(item, activeItem) === true) : undefined;
        setActiveItem(refreshedActiveItem ?? (response?.length > 0 ? response[0] : undefined)); 
      })
      .catch((e) => console.log(e));
    },[shouldRefresh]);

    const refreshItems = () => {
      setRefresh(!shouldRefresh)
    };

    return {items, setItems, activeItem, setActiveItem, refreshItems};
}

export const UpsertRateLibraryContext = createContext((rateLibraryProps: IRateLibraryProps) => {});
export const UpsertRateContext = createContext((rateProps: IRateProps) => {});
export const RefreshRateLibrariesContext = createContext(() => {});
export const RefreshRatesContext = createContext((key: string) => {});
export const CloseRateLibraryModalContext = createContext(() => {});
export const CloseRateModalContext = createContext(() => {});