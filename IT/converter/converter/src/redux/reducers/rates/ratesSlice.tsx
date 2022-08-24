import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRatesInitialState} from "./rates.interface";
import {getRates} from "./rates.actions";

const initialState: IRatesInitialState = {
    ratesData: null,
    isLoading: false,
    isError: "",
    fromCurrency: "USD",
    toCurrency: "USD",
}

const ratesSlice = createSlice({
    name: "rate",
    initialState,
    reducers: {
        handleCurrency(state, {payload}: PayloadAction<[string, string]>){
            if (payload[0] === "fromCurrency"){
                state.fromCurrency = payload[1]
            }
            if (payload[0] === "toCurrency"){
                state.toCurrency = payload[1]
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRates.pending, state => {
                state.isLoading = true
                state.isError = ""
            })
            .addCase(getRates.fulfilled, (state, {payload}) => {
                state.ratesData = payload
                state.isLoading = false
                state.isError = ""
            })
            .addCase(getRates.rejected, (state, {payload}) => {
                state.isLoading = false
                state.isError = ""
            })
    }
})

export const {handleCurrency} = ratesSlice.actions;
export default ratesSlice.reducer;