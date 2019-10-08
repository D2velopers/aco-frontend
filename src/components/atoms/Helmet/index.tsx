import React from 'react';
import { useIntl } from 'react-intl';
import Helmet from 'react-helmet';

interface Props {
  localeId: string;
}

export default function HtmlHelmet({ localeId }: Props) {
  const { formatMessage: f } = useIntl();

  return (
    <Helmet>
      <title>{`${f({ id: localeId })} | ACO`}</title>
    </Helmet>
  );
}
