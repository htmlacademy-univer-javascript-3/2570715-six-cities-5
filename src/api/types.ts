export enum OfferType {
    Apartment = 'Apartment',
    Room = 'Room'
}

export type Offer = {
    id: string;
    type: OfferType;
    isFavorite: boolean;
    isPremium: boolean;
    price: number;
    rating: number;
    title: string;
    previewImage: string;
    description: string;
    bedrooms: number;
    maxAdults: number;
};
