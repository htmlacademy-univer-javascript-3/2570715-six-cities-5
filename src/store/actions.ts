import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '@/api/types.ts';
import {SortOption} from '@/constants/sort-option.ts';

export const updateOffers = createAction<{ offers: Offer[] }>('setOffers');
export const updateCity = createAction<{ city: City }>('setCity');
export const updateSortOption = createAction<{ sortOption: SortOption }>('setSortOptions');
