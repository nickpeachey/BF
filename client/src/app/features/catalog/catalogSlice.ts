import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { Beagle } from "../../models/beagle";
import { RootState } from "../../store/configureStore";

const beaglesAdapter = createEntityAdapter<Beagle>();

export const fetchBeaglesAsync = createAsyncThunk<Beagle[]> (
    'catalog/fetchBeaglesAsync',
    async(_, thunkAPI) => {
        try {
            return await agent.Catalog.list();
        } catch(error: any) {
            return thunkAPI.rejectWithValue({
                error: error.data
            })
        }
    }
)

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: beaglesAdapter.getInitialState({
        beaglesLoaded: false,
        beagleLoaded: false,
        state: 'idle'
    }),
    reducers: {},
    extraReducers: (builder => {

    })
});

export const beagleSelectors = beaglesAdapter.getSelectors((state: RootState) => state.catalog);