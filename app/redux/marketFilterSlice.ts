import { IFilters } from '@/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store'

const initialState: { filters: IFilters } = {
  filters: {
    minPrice: 0,
    maxPrice: 2000,
    about15min: false,
    instantly: false,
    colors: [],
  }
}

const fltersSlice = createSlice({
  name: 'marketFilters',
  initialState,
  reducers: {
    setStateFilters: (state, action: PayloadAction<IFilters>) => {
      state.filters = action.payload;
    },
  }
});

export const getFilters = (state: RootState): IFilters => state.marketFilters.filters;
export const { setStateFilters } = fltersSlice.actions;
export default fltersSlice.reducer;
