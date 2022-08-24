import {createAsyncThunk} from "@reduxjs/toolkit";
import RatesService from "../../../services/rates/ratesService";
import {formValue} from "../../../utils";

export const getRates = createAsyncThunk(
    "getAllRates",
    async (_, thunkAPI) => {
        try {
            const response = await RatesService.getRates();

            const object = Object.entries(response.rates)
                .map(([title, price]) => ({name: title, value: formValue(price, 5)}))
                .filter(el =>
                    el.name === "UAH" ||
                    el.name === "EUR" ||
                    el.name === "USD"
                )

            return object
        } catch (error){
            return thunkAPI.rejectWithValue("Sorry, something happened")
        }
    }
)