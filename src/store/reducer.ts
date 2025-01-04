import {createReducer} from "@reduxjs/toolkit";
import {cities} from "@/mocks/cities.ts";
import {offers} from "@/mocks/offers.ts";
import {updateCity, updateOffers} from "@/store/actions.ts";

const initialState = {
  city: cities[0],
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});
