import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { withTranslation } from '~/i18n';
import brand from '~/public/text/brand';
import logo from '~/public/images/mobile-logo.svg';
import linkRouter from '~/public/text/link';
import ParallaxDeco from '../Parallax/Large';
import useStyles from './form-style';

function ComingSoon(props) {
  const classes = useStyles();
  const { t } = props;

  return (
    <div className={classes.pageWrap}>
      <Hidden smDown>
        <div className={classes.background}>
          <div className={classes.gradient}>
            <div className={classes.decoWave} />
            <div className={classes.decoLine} />
            <div className={classes.decoInner}>
              <img src="/images/mobile/animation-banner.png" alt="decoration" />
            </div>
          </div>
        </div>
      </Hidden>
      <div className={classes.parallax}>
        <ParallaxDeco />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        autoHideDuration={4000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <Link href={linkRouter.mobile.home}>
            <a>
              <img src={logo} alt="logo" />
              <Typography component="span">
                {brand.mobile.projectName}
              </Typography>
            </a>
          </Link>
        </div>
      </Hidden>
      <Container maxWidth="md" className={classes.innerWrap}>
        <Link href={linkRouter.mobile.home}>
          <IconButton className={classes.backtohome}>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-thin-left" />
          </IconButton>
        </Link>
        <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
          <div className={classes.fullFromWrap}>
            <Typography
              variant="h3"
              align="center"
              className={classes.title}
              gutterBottom
            >
              {t('common:coming_soon_title')}
            </Typography>
            <Typography className={classes.desc}>
              {t('common:coming_soon_subtitle')}
            </Typography>
            <div className={classes.form}>
              <div className={classes.btnArea}>
                <Link href={linkRouter.mobile.home}>
                  <Button variant="contained" color="secondary" className={classes.button}>
                    {t('common:back')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}


ComingSoon.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(ComingSoon);
