import {AxiosInstance} from 'axios';
import {AppDispatch, AppState} from '@/state/types.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Offer} from '@/api/types.ts';
import {APIRoute} from '@/constants/api-routes.ts';
import {setOffers} from '@/store/action.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffers({offers: data}));
  },
);
