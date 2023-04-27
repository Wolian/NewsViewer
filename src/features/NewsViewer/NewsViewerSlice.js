import { createSlice } from "@reduxjs/toolkit";

const viewModeSlice = createSlice({
    name: "viewMode",
    initialState: {
        isListView: true,
    },
    reducers: {
        setViewMode: (state) => {
            state.isListView = !state.isListView;
        },
    },
});

export const { setViewMode } = viewModeSlice.actions;

export default viewModeSlice.reducer;