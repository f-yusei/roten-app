export type ValidOrderType = {
  woodenNumber: number;
  orderState: 'waiting' | 'available' | 'finished';
  orderStateLogs: OrderStateLog[];
  menus: menu[];
};

export type OrderType = {
  woodenNumber?: number;
  isAdvanceTicket?: boolean;
  orderState?: 'waiting' | 'available' | 'finished';
  orderStateLogs?: OrderStateLog[];
  menus?: menu[];
};

type OrderStateLog = {
  orderRecievedAt: Date;
  readiedAt: Date;
  deliveredAt: Date;
  invaildAt: Date;
};

type menu = {
  name:
    | 'ソース前売り'
    | 'めんたい前売り'
    | 'ソース（セット）前売り'
    | 'めんたい（セット）前売り'
    | 'ソース'
    | 'めんたい';
  price: number;
  arranges: string[];
};
