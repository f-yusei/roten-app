export type OrderToppingType = {
  woodenNumber: number;
  orderState: 'waiting' | 'available' | 'finished' | 'discarded';
  orderStateLogs: OrderStateLog[];
  menus: MenuForTopping[];
};

//情報をデータベースから受け取った時の型
export type OrderInformationType = {
  _id: string;
  woodenNuber: number;
  orderState: 'waiting' | 'available' | 'finished' | 'discarded';
  orderStateLogs?: OrderStateLog[];
  menus: MenuInformation[];
};
//トッピング画面のためのオーダーの型
export type OrderType = {
  _id: string;
  woodenNumber?: number;
  orderState?: 'waiting' | 'available' | 'finished' | 'discarded';
  orderStateLogs?: OrderStateLog[];
  menus: MenuForTopping[];
};

type OrderStateLog = {
  orderRecievedAt: Date;
  readiedAt: Date;
  deliveredAt: Date;
  invaildAt: Date;
};

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
  ソース: boolean;
  マヨ: boolean;
  カツオ: boolean;
  アオサ: boolean;
};

type MentaiToppings = {
  ソース: boolean;
  めんたいマヨ: boolean;
  カツオ: boolean;
  チーズ: boolean;
};

export const sauceToppings = ['ソース', 'マヨ', 'カツオ', 'アオサ'];
export const mentaiToppings = ['ソース', 'めんたいマヨ', 'カツオ', 'チーズ'];
