import Home from '../home';
import About from '../About';

const router = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
];

export default router;
