import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound';
import { ReceptionPage } from '../components/pages/Reception';
import { ToppingPage } from '../components/pages/Topping';
import {DeliveryPage} from '../components/pages/Delivery'
import { TopPage } from '../components/pages/TopPage';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<TopPage/>} />
      <Route path={'/reception'} element={<ReceptionPage />} />
      <Route path={'/topping'} element={<ToppingPage />} />
      <Route path={'/delivery'} element={<DeliveryPage/>} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};
