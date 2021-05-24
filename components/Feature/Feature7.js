import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import TitleSecondary from '../Title/TitleSecondary';
import Title from '../Title';
import useStyles from './feature-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

const Feature7 = (props) => {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <div className={classes.root}>
        <Title align="center">
          {t('common:mobile-landing.feature_title')}
        </Title>
        <div className={classes.bgColor}>
          <div className={classes.decoBgTop} />
          <Container fixed>
            <div className={classes.item}>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <div className={classes.text}>
                    <TitleSecondary align={isMobile ? 'center' : 'left'} text={t('common:mobile-landing.feature_title2')} />
                    <Typography display="block" component="p" className={text.subtitle2}>
                      {t('common:mobile-landing.feature_desc2')}
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <div className={classes.illustrationRight}>
                    <svg className={classes.decoSecondary}>
                      <use xlinkHref="/images/mobile/deco-feature.svg#main" />
                    </svg>
                    <figure className={classes.screen}>
                      <img src={imgAPI.mobile[5]} alt="screen" />
                    </figure>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

Feature7.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(Feature7);
