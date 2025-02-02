export type TUser = {
  id: number;
  userName: string;
  email: string;
};

export type TCard = {
  id: number;
  menuItemId: number;
  cardIndex: number;
  image: string;
  text: string;
};

export type TMenuItems = {
  id: number;
  menuItemIndex: number;
  name: string;
  category: string;
  cards: TCard[];
};

export type TFaqItems = {
  id: number;
  title: string;
  text: string;
};

export type DBType = {
  users: TUser[];
  menuItems: TMenuItems[];
  faqItems: TFaqItems[];
};