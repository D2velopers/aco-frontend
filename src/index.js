import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import locale from './locale';
import configureStore from './store';
import App from './components/App';

addLocaleData([...en, ...ko]);

const store = configureStore();
const defaultLang = localStorage.getItem('lang') || 'ko';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={defaultLang} messages={locale[defaultLang]}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
