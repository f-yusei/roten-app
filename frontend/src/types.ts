export type OrderInformation = {
  _id: string;
  menu: string;
  arranges: string[];
  orderState: 'waiting' | 'available' | 'finished';
  updated_at: Date;
  created_at: Date;
};
