export interface Book {
  id: number;
  author: string;
  category: string;
  organization: string;
  ageRestriction: number;
  date: Date | string;
  pages: number;
  name: string;
  description: string;
  icon: string;
  isInSell: boolean;
  price: number;
}
