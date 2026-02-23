export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  link: string;
  reviews: number;

  categoryId: number;
  likes: number;

  isFavorite: boolean;

  installmentMonthly?: number;
  installmentMonths?: number;
  badgeTop?: string;
  badgeGreen?: string;
}