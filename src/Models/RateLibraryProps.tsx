export interface IRateLibraryProps {
    rateLibraryKey: string;
    name: string;
    code: string;
    locked: boolean;
    notes: string;
    ratesVisible: true;
    dateAdded: string;
    dateModified: string;
}

export const MapToIRateLibraryProps = (rateLibrary: any): IRateLibraryProps => (
    {
        rateLibraryKey: rateLibrary.RateLibraryKey,
        name: rateLibrary.Name,
        code: rateLibrary.Code,
        locked: rateLibrary.Locked,
        notes: rateLibrary.Notes,
        ratesVisible: rateLibrary.RatesVisible,
        dateAdded: rateLibrary.DateAdded,
        dateModified: rateLibrary.DateModified 
    }
);