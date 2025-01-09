import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppState} from '@/state/types.ts';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
