import MainScreen from '@/pages/main-screen/main-screen.tsx';
import {placeOffers} from '@/constants/place-offers.ts';

export default function App(): JSX.Element {
  return <MainScreen placeOffers={placeOffers}/>;
}
