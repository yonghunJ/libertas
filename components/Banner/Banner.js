import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './banner-style';

function Banner(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const interval = useRef();
  const elem = useRef(null);

  useEffect(() => {
    const isWindowContext = typeof window !== 'undefined';

    interval.current = window.renderParticles && window.renderParticles();

    return () => {
      if (isWindowContext) {
        window.removeEventListener('resize', interval.current);
      }
    };
  }, []);

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.background}>
        <div className={classes.gradient}>
          <div className={classes.decoWave} />
          <Hidden smDown>
            <div className={classes.decoLine} />
          </Hidden>
          <div className={classes.decoInner}>
            <canvas id="particle_art_mobile" width="500px" height="700px" />
          </div>
        </div>
      </div>
      <Container fixed={isDesktop}>
        <Grid container>
          <Grid item md={7} xs={12}>



            <div className={classes.text}>
            <div className={classes.MainMessage}/>
            

              {/*<Typography variant="h3" className={text.title} >
              {t('common:mobile-landing.banner_title1')}
                &nbsp;
                <strong>
                  {t('common:mobile-landing.banner_titlestrong')}
                </strong>
                &nbsp;
  {t('common:mobile-landing.banner_title2')}
              </Typography>*/}
              <Typography variant="h5" className={text.subtitle}>
                {t('common:mobile-landing.banner_desc')}
              </Typography>
              <div className={classes.btnArea}>

                <Link href="/contact" passHref>
                  <Button variant="contained" color="primary">
                    Free Quote
                  </Button>
                </Link>

              </div>
            </div>
          </Grid>
          <Grid item md={5} xs={12}>
            <div className={classes.decoration}>
              <div className={classes.phoneIllustration}>
                <img src={imgAPI.mobile[0]} className={classes.phone} alt="illustration" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Banner.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['mobile-landing'])(Banner);
