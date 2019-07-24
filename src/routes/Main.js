import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

export default () => (
  <div>
    <FormattedMessage id="app.logo.subtitle">
      {subtitle => (
        <Helmet>
          <title>{`ACO - ${subtitle}`}</title>
        </Helmet>
      )}
    </FormattedMessage>
    Main
  </div>
);
