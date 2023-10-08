import Home from '../views/pages/Home';
import Like from '../views/pages/like';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/now-playing': Home,
  '/upcoming': Like,
  '/detail/:id': Detail,
};

export default routes;
