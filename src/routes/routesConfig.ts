import { paths } from './paths';
import { Accountants } from '../pages/Accountants/Accountants';
import { Home } from '../pages/Home/Home';

export const routesConfig = [
  {
    component: Home,
    path: paths.all,
  },
  {
    component: Accountants,
    path: paths.accountants,
  },
];
