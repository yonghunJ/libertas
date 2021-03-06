import React, { Fragment } from 'react';
import Head from 'next/head';
import brand from '../public/text/brand';
import ContactFrm from '../components/Forms/Contact';
// import AppLayout from '../components/AppLayout';
function Contact() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.mobile.name }
          &nbsp; - Contact
        </title>
      </Head>
      <div>
        <ContactFrm />
      </div>
    </Fragment>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Contact;
