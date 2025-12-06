
import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";
// PayloadAction
interface CounteState {
    value: number;
}
const initialState: CounteState = { value: 14 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            state.value++;
        },
        decremented(state) {
            state.value--;
        },
        amounteAdd(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }
    }
});
export const { incremented, decremented, amounteAdd } = counterSlice.actions;
export default counterSlice.reducer;