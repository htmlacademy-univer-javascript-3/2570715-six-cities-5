import {createAction} from '@reduxjs/toolkit';
import {City, Comment, Offer} from '@/api/types.ts';
import {SortOption} from '@/constants/sort-option.ts';

export const setOffers = createAction<{ offers: Offer[] }>('setOffers');
export const setDetailedOffer = createAction<{
  offer: Offer | undefined;
  nearbyOffers: Offer[];
  comments: Comment[];
}>('setDetailedOffer');
export const setCity = createAction<{ city: City }>('setCity');
export const setSortOption = createAction<{ sortOption: SortOption }>('setSortOption');
export const setSelectedOffer = createAction<{ selectedOffer: Offer | undefined }>('setSelectedOffer');
