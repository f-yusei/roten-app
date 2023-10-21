export type ValidOrderType = {
  woodenNumber: number;
  orderState: 'waiting' | 'available' | 'finished';
  orderStateLogs: OrderStateLog[];
  menus: menu[];
};

export type OrderType = {
  woodenNumber?: number;
  orderState?: 'waiting' | 'available' | 'finished';
  orderStateLogs?: OrderStateLog[];
  menus: menu[];
};

type OrderStateLog = {
  orderRecievedAt: Date;
  readiedAt: Date;
  deliveredAt: Date;
  invaildAt: Date;
};

type menu = {
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

export const sauceToppings = ['ソース', 'マヨ', 'カツオ', 'アオサ'];
export const mentaiToppings = ['ソース', 'めんたいマヨ', 'カツオ', 'チーズ'];
