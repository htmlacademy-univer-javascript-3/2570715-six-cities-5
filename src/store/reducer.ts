import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, setSelectedOffer, setSortOption} from '@/store/action.ts';
import {SortOption} from '@/constants/sort-option.ts';
import {AppState} from '@/state/types.ts';
import {cities} from '@/mocks/cities.ts';

const initialState: AppState = {
  city: cities[5],
  offers: undefined,
  sortOption: SortOption.Default,
  selectedOffer: undefined,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload.sortOption;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload.selectedOffer;
    });
});
