export type ValidOrderType = {
  orderNumber: number;
  menu: string;
  arranges: string[];
  orderState: 'waiting' | 'available' | 'finished';
  created_at?: string;
};

export type OrderType = {
  orderNumber?: number;
  menu?: string;
  arranges?: string[];
  orderState?: 'waiting' | 'available' | 'finished';
  created_at?: string;
};
