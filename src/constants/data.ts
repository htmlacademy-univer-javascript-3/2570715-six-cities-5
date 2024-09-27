import {PlaceOffer, PlaceType} from "../common/types.ts";

export const placeOffers: PlaceOffer[] = [
  {
    type: PlaceType.Apartment,
    isFavorite: false,
    isPremium: true,
    price: 120,
    rating: 4,
    title: "Beautiful & luxurious apartment at great location",
    previewImage: "img/apartment-01.jpg"
  },
  {
    type: PlaceType.Room,
    isFavorite: true,
    isPremium: false,
    price: 80,
    rating: 4,
    title: "Wood and stone place",
    previewImage: "img/room.jpg"
  },
  {
    type: PlaceType.Apartment,
    isFavorite: false,
    isPremium: false,
    price: 132,
    rating: 4,
    title: "Canal View Prinsengracht",
    previewImage: "img/apartment-02.jpg"
  },
  {
    type: PlaceType.Apartment,
    isFavorite: false,
    isPremium: true,
    price: 180,
    rating: 5,
    title: "Nice, cozy, warm big bed apartment",
    previewImage: "img/apartment-03.jpg"
  },
  {
    type: PlaceType.Room,
    isFavorite: true,
    isPremium: false,
    price: 80,
    rating: 4,
    title: "Wood and stone place",
    previewImage: "img/room.jpg"
  }
]
