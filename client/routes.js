/* eslint-disable global-require */

import App from './modules/App/App';
import ChatPage from './modules/Chat/pages/ChatPage';
import PostDetailPage from './modules/Post/pages/PostDetailPage/PostDetailPage';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Chat/pages/ChatPage');
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: ChatPage,
      },
      { path: '/posts/:cuid',
        component: PostDetailPage,
      },
    ],
  },
];

export default routes;
