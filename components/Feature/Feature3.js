import React from 'react';
import ReactWOW from 'react-wow'
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import clsx from 'clsx';
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

const Feature3 = (props) => {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <>
      <div className={classes.root}>
        <Container>
          <div className={clsx(classes.item, classes.first)}>
            <Grid container direction={isMobile ? 'column-reverse' : 'row'}>
              <Grid item md={6} xs={12}>
                <div className={classes.illustrationLeft}>
                  <svg className={classes.decoPrimary} viewBox="0 0 512 512">
                    <use xlinkHref="/images/mobile/deco-feature.svg#main" transform="translate(50 -20)"/>
                    <image
                      className={classes.screen}
                      xlinkHref={imgAPI.feature[2]}
                      alt="Feature(3) Invoicing"
                      style={{ height: '90%' }}
                      transform="translate(-10 0)"
                    />
                    <ReactWOW animation="fadeInUpShort" delay="0.7s" duration="0.5s">
                    <image
                      xlinkHref={imgAPI.service[6]}
                      style={{ height: '20%' }}
                      transform="translate(10 0)"
                    />
                    </ReactWOW>
                  </svg>
                </div>

              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.text}>
                <Typography display="block" className={text.title2}>{t('common:mobile-landing.feature_title3')} </Typography>
                  <Typography display="block" component="p" className={text.subtitle2}>
                    {t('common:mobile-landing.feature_desc3')}
                  </Typography>
                  <Typography display="block" component="p" className={text.subtitle4}>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list3-1')}
                    </li>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list3-2')}
                    </li>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list3-3')}
                    </li>
                    </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

Feature3.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(Feature3);
