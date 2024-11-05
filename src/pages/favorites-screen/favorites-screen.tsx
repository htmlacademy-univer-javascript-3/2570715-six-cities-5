import Footer from '@/components/footer/footer.tsx';
import Header from '@/components/header/header.tsx';
import PlaceCard from '@/components/place-card/place-card.tsx';
import {Offer} from '@/api/types.ts';

export interface FavoritesScreenProps {
  offers: Offer[];
}

export default function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.slice(0, 2)
                    .filter((offer) => offer.isFavorite)
                    .map((offer) =>
                      <PlaceCard offer={offer} page={'favorites'} width={150} height={110} key={offer.id}/>)}
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.slice(2, 10)
                    .filter((offer) => offer.isFavorite)
                    .map((offer) =>
                      <PlaceCard offer={offer} page={'favorites'} width={150} height={110} key={offer.id}/>)}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>);
}
