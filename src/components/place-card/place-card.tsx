﻿import {PlaceOffer} from '@/api/types.ts';

export default function PlaceCard(placeOffer: PlaceOffer): JSX.Element {
  return (
    <article className="cities__card place-card">
      {placeOffer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={placeOffer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{placeOffer.price}</b>
            <span className="place-card__price-text">
                        /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button${placeOffer.isFavorite && '--active'} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${placeOffer.rating * 100 / 5}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {placeOffer.title}
          </a>
        </h2>
        <p className="place-card__type">{placeOffer.type}</p>
      </div>
    </article>);
}
