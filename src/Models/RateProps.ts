export interface IRateProps {
    rateKey: string;
    rateLibraryKey: string;
    locationKey: string;
    itemCode: string;
    description: string;
    rateGroup: string;
    unitOfMeasure: string;
    value: number;
    dateAdded: string;
    dateModified: string;
}

export const MapToIRateProps = (rate: any): IRateProps => (
    {
        rateKey: rate.RateKey,
        rateLibraryKey: rate.RateLibraryKey,
        locationKey: rate.LocationKey,
        itemCode: rate.ItemCode,
        description: rate.Description,
        rateGroup: rate.RateGroup,
        unitOfMeasure: rate.UnitOfMeasure,
        value: rate.Value,
        dateAdded: rate.DateAdded,
        dateModified: rate.DateModified 
    }
);