import {PlaceOffer, PlaceType} from '@/api/types.ts';

export const placeOffers: PlaceOffer[] = [
  {
    id: 'ddfde813-2d7b-41f5-b1b4-f6371d4a6e77',
    type: PlaceType.Apartment,
    isFavorite: false,
    isPremium: true,
    price: 120,
    rating: 4,
    title: 'Beautiful & luxurious apartment at great location',
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '1c16024c-7b05-497a-a6d7-3d1fa32a6d27',
    type: PlaceType.Room,
    isFavorite: true,
    isPremium: false,
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    previewImage: 'img/room.jpg'
  },
  {
    id: '092c6e53-e944-472e-bb8f-ddf222ebfb5d',
    type: PlaceType.Apartment,
    isFavorite: false,
    isPremium: false,
    price: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: 'ebe277b0-dd20-4267-a89b-1d74a6a72246',
    type: PlaceType.Apartment,
    isFavorite: false,
    isPremium: true,
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: 'a417ad87-45c5-4a67-80a0-dcf597521725',
    type: PlaceType.Room,
    isFavorite: true,
    isPremium: false,
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    previewImage: 'img/room.jpg'
  }
];
