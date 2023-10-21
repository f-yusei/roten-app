export type ValidOrderType = {
  orderNumber: number;
  woodenNumber: number;
  isAdvanceTicket: boolean;
  arranges: string[];
  orderState: 'waiting' | 'available' | 'finished';
  orderStateLogs: OrderStateLog[];
  menus: menu[];
};

export type OrderType = {
  orderNumber?: number;
  woodenNumber?: number;
  isAdvanceTicket?: boolean;
  arranges?: string[];
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
    | 'セット前売り'
    | 'ソース'
    | 'めんたい';
  price: number;
};
