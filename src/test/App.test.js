import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../app/store';
import App from '../App';

const renderApp = () => render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

test('renders header logo', () => {
  window.location.hash = '#/';
  renderApp();
  expect(screen.getAllByText(/다시봄/).length).toBeGreaterThan(0);
});

test.each([
  ['/', /익숙한 문제를/],
  ['/about', /About Us/],
  ['/business', /Business/],
  ['/platforms', /사업영역을 소개합니다/],
  ['/portfolio', /Portfolio/],
  ['/news', /활동소식/],
  ['/news/1', /연세대학교/],
  ['/contact', /Contact Us/],
  ['/privacy', /개인정보처리방침/],
  ['/no-such-page', /404/],
])('renders route %s', (path, expected) => {
  window.location.hash = `#${path}`;
  renderApp();
  expect(screen.getAllByText(expected).length).toBeGreaterThan(0);
});
