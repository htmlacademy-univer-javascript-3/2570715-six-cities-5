﻿export const enum PlaceType {
  Apartment = "Apartment",
  Room = "Room"
}

export type PlaceOffer = {
  type: PlaceType
  isFavorite: boolean
  isPremium: boolean
  price: number
  rating: number
  title: string
  previewImage: string
};
