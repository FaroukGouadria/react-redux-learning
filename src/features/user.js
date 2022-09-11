import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: { value: { nom: "", prenom: "", email: "", password: "" } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logOut: (state) => {
            state.value = { nom: "", prenom: "", email: "", password: "" };
        }
    }
});

export const { login,logOut } = userSlice.actions;
export default userSlice.reducer;