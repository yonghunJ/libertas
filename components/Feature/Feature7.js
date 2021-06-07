import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';
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
        <div className={classes.bgColor}>
          <div className={classes.decoBgTop} />
          <Container fixed>
            <div className={classes.item}>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <div className={classes.text}>
                  <Typography display="block" className={text.title3}>{t('common:mobile-landing.feature_title7')} </Typography>
                    <Typography  display="block" component="p" className={text.subtitle3}>
                      {t('common:mobile-landing.feature_desc7')}
                    </Typography>
                    <Typography display="block" component="p" className={text.subtitle5}>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list7-1')}
                    </li>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list7-2')}
                    </li>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list7-3')}
                    </li>
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <div className={classes.illustrationRight}>
                    <svg className={classes.decoSecondary} viewBox="0 0 512 512">
                      <use xlinkHref="/images/mobile/deco-feature.svg#main" transform="translate(20 -20)"/>
                      <image
                        className={classes.screen}
                        xlinkHref={imgAPI.feature[3]}
                        alt="Feature(7) Tracking"
                        style={{ height: '90%' }}
                        transform="translate(-30 0)"
                      />
                    </svg>
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
