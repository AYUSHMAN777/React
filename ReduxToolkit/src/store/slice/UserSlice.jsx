import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUsers(state, action) {
            state.push(action.payload);
        },
        removeUsers(state, action) {
            state.splice(action.payload, 1)
        },
        deleteUsers(state, action) { }
    }

});
export const { addUsers } = userSlice.actions;
export default userSlice.reducer;  
