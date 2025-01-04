import {Offer} from '@/api/types.ts';
import Header from '@/components/header/header.tsx';
import OfferList from '@/components/offer-list/offer-list.tsx';
import Map from '@/components/map/map.tsx';
import {useState} from 'react';
import CityList from '@/components/city-list/city-list.tsx';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';
import {cities} from '@/mocks/cities.ts';
import SortOptions from '@/components/sort-options/sort-options.tsx';
import {GetOfferComparer} from '@/utils/utils.ts';
import MainScreenEmpty from '@/pages/main-screen/main-screen-empty.tsx';

export default function MainScreen(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const sortOption = useAppSelector((state) => state.sortOption);
  const offers = useAppSelector((state) => state.offers);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  if (offers.length === 0) {
    return <MainScreenEmpty/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cities={cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city.name}</b>
              <SortOptions/>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={offers.toSorted(GetOfferComparer(sortOption))}
                  selectedOffer={selectedOffer}
                  setSelectedOffer={setSelectedOffer}
                  page={'cities'} width={260} height={200}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={offers} selectedOffer={selectedOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>);
}
