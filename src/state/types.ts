import {store} from '@/store';
import {SortOption} from '@/constants/sort-option.ts';
import {City, Offer} from '@/api/types.ts';

export type AppState = {
  city: City;
  offers: Offer[] | undefined;
  sortOption: SortOption;
  selectedOffer: Offer | undefined;
};
export type OfferState = {
  offer: Offer | undefined;
  nearbyOffers: Offer[];
  comments: Comment[];
  isLoading: boolean;
}
export type AppDispatch = typeof store.dispatch;
