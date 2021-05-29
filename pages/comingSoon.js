import React, { Fragment } from 'react';
import Head from 'next/head';
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';
import NotYet from '../components/Forms/NotYet';
// import AppLayout from '../components/AppLayout';
function ComingSoon() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.mobile.name }
          &nbsp; - Contact
        </title>
      </Head>
      <div>
        <NotYet />
      </div>
    </Fragment>
  );
}

ComingSoon.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(ComingSoon);
