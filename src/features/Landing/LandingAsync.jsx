import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Landing'),
  loading: () => null,
});
