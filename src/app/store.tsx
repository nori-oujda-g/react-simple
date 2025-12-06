import { configureStore, Tuple } from "@reduxjs/toolkit";
import { clientApiSlice } from "../features/client/clientApiSlice";
import counterReducer from '../features/counter/counterSlice';

// const rootReducer = combineSlices(count, counterSlice, clientApiSlice);
export const store = configureStore({
    // reducer: rootReducer,
    reducer: {
        counter: counterReducer,
        [clientApiSlice.reducerPath]: clientApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(new Tuple(clientApiSlice.middleware));
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;