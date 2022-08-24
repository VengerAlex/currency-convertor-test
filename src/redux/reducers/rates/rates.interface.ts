
export interface IRatesInitialState {
    ratesData: IRate[] | null,
    isLoading: boolean,
    isError: string,
    fromCurrency: string,
    toCurrency: string,
}

export interface IRate { name: string, value: number };