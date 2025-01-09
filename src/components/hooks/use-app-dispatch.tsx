import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/state/types.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
