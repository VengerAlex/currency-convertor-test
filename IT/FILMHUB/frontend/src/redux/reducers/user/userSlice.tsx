import {createSlice} from "@reduxjs/toolkit";

interface IUser {
    isAuth: boolean
    username: string
}

const initialState: IUser = {
    isAuth: false,
    username: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

export default userSlice.reducer;