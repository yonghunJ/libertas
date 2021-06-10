import React, { useState } from 'react';
import ReactWOW from 'react-wow'
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

const Feature6 = (props) => {
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
                  <div className={classes.textLeft}>
                  <Typography display="block" className={text.title3}>{t('common:mobile-landing.feature_title6')} </Typography>
                    <Typography display="block" component="p" className={text.subtitle3}>
                      {t('common:mobile-landing.feature_desc6')}
                    </Typography>
                    <Typography display="block" component="p" className={text.subtitle5}>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list6-1')}
                    </li>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list6-2')}
                    </li>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list6-3')}
                    </li>
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <div className={classes.illustrationRight}>
                    <svg className={classes.decoSecondary} viewBox="0 0 512 512">
                    <ReactWOW animation="fadeInUpShort" delay="0.5s" duration="0.5s">
                      <image
                        xlinkHref={imgAPI.featureIcon[0]}
                        style={{ x: '-5', y: '-15', height: '84%' }}
                      />
                    </ReactWOW>
                      <image
                        className={classes.screen}
                        xlinkHref={imgAPI.feature[5]}
                        alt="Feature(6) Conculting"
                        style={{ height: '90%' }}
                        transform="translate(5 0)"
                      />
                    <ReactWOW animation="fadeInUpShort" delay="0.7s" duration="0.5s">
                    <image
                      xlinkHref={imgAPI.featureIcon[6]}
                      style={{ x: '0', y: '-5', height: '28%' }}
                    />
                    </ReactWOW>
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

Feature6.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(Feature6);
