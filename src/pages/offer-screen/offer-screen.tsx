import {useParams} from 'react-router-dom';
import NotFoundScreen from '@/pages/not-found-screen/not-found-screen.tsx';
import Header from '@/components/header/header.tsx';
import ReviewList from '@/components/review-list/review-list.tsx';
import Map from '@/components/map/map.tsx';
import NearbyOfferList from '@/components/nearby-offer-list/nearby-offer-list.tsx';
import {useAppDispatch} from '@/components/hooks/use-app-dispatch.tsx';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';
import {useEffect} from 'react';
import {fetchOfferAction} from '@/store/api-actions.ts';
import Spinner from '@/components/spinner/spinner.tsx';
import OfferImage from '@/components/offer-image/offer-image.tsx';
import {capitalize} from '@/utils/utils.ts';

export default function OfferScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction({offerId: id}));
    }
  }, [dispatch, id]);

  const isLoading = useAppSelector((state) => state.isLoading);
  const offerNotFound = useAppSelector((state) => state.offerNotFound);

  const foundOffer = useAppSelector((state) => state.offer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers).slice(0, 3);
  const comments = useAppSelector((state) => state.comments);

  if (offerNotFound) {
    return <NotFoundScreen/>;
  }

  return (
    <div className="page">
      <Header/>
      {isLoading ? <Spinner/> :
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {foundOffer.images.map((image) => <OfferImage key={image} src={image}/>)}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {foundOffer.isPremium &&
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {foundOffer.title}
                  </h1>
                  <button
                    className={`offer__bookmark-button ${foundOffer.isFavorite && 'offer__bookmark-button--active'} button`}
                    type="button"
                    style={{top: foundOffer.isPremium ? 41 : 4}}
                  >
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${foundOffer.rating * 100 / 5}%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{foundOffer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {capitalize(foundOffer.type)}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {foundOffer.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {foundOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€{foundOffer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">Whats inside</h2>
                  <ul className="offer__inside-list">
                    <li className="offer__inside-item">Wi-Fi</li>
                    <li className="offer__inside-item">Washing machine</li>
                    <li className="offer__inside-item">Towels</li>
                    <li className="offer__inside-item">Heating</li>
                    <li className="offer__inside-item">Coffee machine</li>
                    <li className="offer__inside-item">Baby seat</li>
                    <li className="offer__inside-item">Kitchen</li>
                    <li className="offer__inside-item">Dishwasher</li>
                    <li className="offer__inside-item">Cabel TV</li>
                    <li className="offer__inside-item">Fridge</li>
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={foundOffer.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{foundOffer.host.name}</span>
                    {foundOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {foundOffer.description}
                    </p>
                  </div>
                </div>
                <ReviewList comments={comments}/>
              </div>
            </div>
            <section className="offer__map map">
              <Map location={foundOffer.city.location} offers={nearbyOffers.concat(foundOffer)}
                selectedOffer={foundOffer}
              />
            </section>
          </section>
          <NearbyOfferList nearbyOffers={nearbyOffers}/>
        </main>}
    </div>);
}
