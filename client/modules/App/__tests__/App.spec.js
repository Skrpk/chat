import React from 'react';
import PropTypes from 'prop-types';
import test from 'ava';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from '../App';
import styles from '../App.css';
import { intlShape } from 'react-intl';
import { intl } from '../../../util/react-intl-test-helper';
import { toggleAddPost } from '../AppActions';
import routes from '../../../routes';
import { configureStore } from '../../../store';

Enzyme.configure({ adapter: new Adapter() });

const intlProp = { ...intl, enabledLanguages: ['en', 'fr'] };
const children = <h1>Test</h1>;
const dispatch = sinon.spy();
const route = { routes };
const props = {
  children,
  dispatch,
  intl: intlProp,
  route,
};

test('renders properly', t => {
  const wrapper = shallow(
    <App {...props} />
  );


  t.is(wrapper.find('Header').length, 1);
  t.is(wrapper.find('Header').prop('toggleAddPost'), wrapper.instance().toggleAddPostSection);
  t.truthy(wrapper.find('Header + main').hasClass(styles.container));
  t.truthy(wrapper.find('Header + main').children(), children);
});

test('calls componentDidMount', t => {
  sinon.spy(App.prototype, 'componentDidMount');
  mount(
    <MemoryRouter>
      <Provider store={configureStore()}>
        <App {...props} />
      </Provider>
    </MemoryRouter>,
    {
      context: {
        router: {
          isActive: sinon.stub().returns(true),
          push: sinon.stub(),
          replace: sinon.stub(),
          go: sinon.stub(),
          goBack: sinon.stub(),
          goForward: sinon.stub(),
          setRouteLeaveHook: sinon.stub(),
          createHref: sinon.stub(),
        },
        intl,
      },
      childContextTypes: {
        router: PropTypes.object,
        intl: intlShape,
      },
    },
  );

  t.truthy(App.prototype.componentDidMount.calledTwice);
  App.prototype.componentDidMount.restore();
});

test('calling toggleAddPostSection dispatches toggleAddPost', t => {
  const wrapper = shallow(
    <App {...props} />
  );

  wrapper.instance().toggleAddPostSection();
  t.truthy(dispatch.calledOnce);
  t.truthy(dispatch.calledWith(toggleAddPost()));
});
