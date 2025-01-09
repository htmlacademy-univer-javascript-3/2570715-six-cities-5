import Header from '@/components/header/header.tsx';
import CityList from '@/components/city-list/city-list.tsx';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';
import {cities} from '@/mocks/cities.ts';
import MainOfferList from '@/components/main-offer-list/main-offer-list.tsx';
import EmptyMainOfferList from '@/components/empty-main-offer-list/empty-main-offer-list.tsx';
import SpinnerScreen from '@/pages/spinner-screen/spinner-screen.tsx';

export default function MainScreen(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const sortOption = useAppSelector((state) => state.sortOption);
  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  const offers = useAppSelector((state) => state.offers);

  if (offers === undefined) {
    return <SpinnerScreen/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${offers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cities={cities}/>
        </div>
        <div className="cities">
          {offers.length > 0
            ? <MainOfferList city={city} selectedOffer={selectedOffer} offers={offers} sortOption={sortOption}/>
            : <EmptyMainOfferList city={city}/>}
        </div>
      </main>
    </div>);
}
