import {City} from '@/api/types.ts';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';
import {useAppDispatch} from '@/components/hooks/use-app-dispatch.tsx';
import {updateCity, updateOffers} from '@/store/actions.ts';
import {offers} from '@/mocks/offers.ts';

export interface CityListProps {
  cities: City[];
}

export default function CityList({cities}: CityListProps) {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleCityChoose = (city: City) => {
    dispatch(updateCity({city: city}));
    dispatch(updateOffers({offers: offers.filter((offer) => offer.city.name === city.name)}));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city.name}>
            <a
              className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active' : ''}`}
              href="#"
              onClick={() => handleCityChoose(city)}
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>);
}