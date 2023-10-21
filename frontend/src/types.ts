export type ValidOrderType = {
  woodenNumber: number;
  orderState: 'waiting' | 'available' | 'finished';
  orderStateLogs: OrderStateLog[];
  menus: menu<
    | {
        sauce: boolean;
        mayo: boolean;
        katsuo: boolean;
        aosa: boolean;
      }
    | {
        sauce: boolean;
        mentaiMayo: boolean;
        katsuo: boolean;
        cheese: boolean;
      }
  >;
};

export type OrderType = {
  woodenNumber?: number;
  orderState?: 'waiting' | 'available' | 'finished';
  orderStateLogs?: OrderStateLog[];
  menus: menu<
    | {
        sauce: boolean;
        mayo: boolean;
        katsuo: boolean;
        aosa: boolean;
      }
    | {
        sauce: boolean;
        mentaiMayo: boolean;
        katsuo: boolean;
        cheese: boolean;
      }
  >;
};

type OrderStateLog = {
  orderRecievedAt: Date;
  readiedAt: Date;
  deliveredAt: Date;
  invaildAt: Date;
};

type menu<T> = {
  map(
    arg0: (menu: any, index: any) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  name:
    | 'ソース前売り'
    | 'めんたい前売り'
    | 'ソース（セット）前売り'
    | 'めんたい（セット）前売り'
    | 'ソース'
    | 'めんたい';
  price: number;
  arranges: T;
};
