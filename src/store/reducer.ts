import {createReducer} from '@reduxjs/toolkit';
import {cities} from '@/mocks/cities.ts';
import {offers} from '@/mocks/offers.ts';
import {setCity, setOffers, setSortOption} from '@/store/actions.ts';
import {SortOption} from '@/constants/sort-option.ts';

const initialState = {
  city: cities[5],
  offers: offers.filter((offer) => offer.city.name === cities[5].name),
  sortOption: SortOption.Default,
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
    });
});
