export type ValidOrder = {
  orderNumber: number;
  menu: string;
  arranges: string[];
  orderState: 'waiting' | 'available' | 'finished';
  created_at?: string;
};

export type Order = {
  orderNumber?: number;
  menu?: string;
  arranges?: string[];
  orderState?: 'waiting' | 'available' | 'finished';
  created_at?: string;
};
