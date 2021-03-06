import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Footer from './Footer';
import useStyles from './footer-style';

function FooterWithDeco(props) {
  const classes = useStyles();
  const text = useText();
  const { t, toggleDir } = props;

  return (
    <div className={classes.footerDeco}>
      <svg className={classes.decoTop}>
        <use xlinkHref="/images/mobile/deco-wave-top.svg#main" />
      </svg>
      <div className={classes.decoration} />
      <div className={classes.action}>
        <Typography variant="h4" className={text.title2}>
          {t('common:mobile-landing.footer_text')}
        </Typography>
        <Link href="/contact">
          <Button variant="contained" color="primary" className={classes.detail}>
            See Detail
          </Button>
        </Link>
      </div>
      <Footer toggleDir={toggleDir} />
    </div>
  );
}

FooterWithDeco.propTypes = {
  t: PropTypes.func.isRequired,
  toggleDir: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(FooterWithDeco);
