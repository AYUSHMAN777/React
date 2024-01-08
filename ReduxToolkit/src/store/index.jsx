import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slice/UserSlice";

const store = configureStore({       //take single object
    reducer: {
        users: UserSlice,
    }
});
export default store;