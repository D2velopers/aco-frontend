import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { getStorage } from './lib/useStorage';
import locale from './locale';
import configureStore from './redux';
import App from './App';

type Locale = keyof typeof locale;

const redux = configureStore();
const defaultLang: Locale = getStorage('lang') || 'ko';

ReactDOM.render(
  <IntlProvider locale={defaultLang} messages={locale[defaultLang]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
