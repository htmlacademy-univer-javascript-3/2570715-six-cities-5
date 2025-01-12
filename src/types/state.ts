import {store} from '@/store';
import {SortOption} from '@/types/sort-option.ts';
import {City, Comment, Offer} from '@/types/api.ts';
import {AuthorizationStatus} from '@/constants/auth-status.ts';

export type AppState = {
  authorizationStatus: AuthorizationStatus;
  city: City;
  offers: Offer[];
  sortOption: SortOption;
  selectedOffer: Offer | undefined;
  isLoading: boolean;
  offerNotFound: boolean;
  offer: Offer;
  nearbyOffers: Offer[];
  comments: Comment[];
};
export type AppDispatch = typeof store.dispatch;
