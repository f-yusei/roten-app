export type OrderToppingType = {
  woodenNumber: number;
  orderState: 'waiting' | 'available' | 'finished' | 'discarded';
  orderStateLogs: OrderStateLogs;
  menus: MenuForTopping[];
};

//情報をデータベースから受け取った時の型
export type OrderInformationType = {
  _id: string;
  woodenNumber: number;
  orderState: 'waiting' | 'available' | 'finished' | 'discarded';
  orderStateLogs: OrderStateLogs;
  menus: MenuInformation[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type OrderInformationTypeForPost = {
  woodenNumber: number;
  orderState: 'waiting' | 'available' | 'finished' | 'discarded';
  orderStateLogs: OrderStateLogs;
  menus: MenuInformation[];
};

//トッピング画面のためのオーダーの型
export type OrderType = {
  _id: string;
  woodenNumber?: number;
  orderState?: 'waiting' | 'available' | 'finished' | 'discarded';
  orderStateLogs?: OrderStateLogs;
  menus: MenuForTopping[];
};

type OrderStateLogs = {
  orderReceivedAt?: Date;
  readiedAt?: Date;
  deliveredAt?: Date;
  invalidAt?: Date;
};
//トッピング画面用のメニューの型
type MenuForTopping = {
  isSauce: boolean;
  name:
    | 'ソース前売り'
    | 'めんたい前売り'
    | 'ソース（セット）前売り'
    | 'めんたい（セット）前売り'
    | 'ソース'
    | 'めんたい';
  price: number;
  arranges: boolean[];
};

//データベースから受け取ったメニューの型
type MenuInformation = {
  name:
    | 'ソース前売り'
    | 'めんたい前売り'
    | 'ソース（セット）前売り'
    | 'めんたい（セット）前売り'
    | 'ソース'
    | 'めんたい';
  price: number;
  arranges: SauceToppings | MentaiToppings;
};

type SauceToppings = {
  kind: 'sauce';
  sauce: boolean;
  mayo: boolean;
  katsuo: boolean;
  aosa: boolean;
};

type MentaiToppings = {
  kind: 'mentai';
  sauce: boolean;
  mentaiMayo: boolean;
  katsuo: boolean;
  cheese: boolean;
};

export const sauceToppings = ['ソース', 'マヨ', 'カツオ', 'アオサ'];
export const mentaiToppings = ['ソース', 'めんたいマヨ', 'カツオ', 'チーズ'];
