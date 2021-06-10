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
import useStyles from './feature-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

const Feature = (props) => {
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
                    <ReactWOW animation="fadeInUpShort" delay="0.5s" duration="0.5s">
                      <image
                        xlinkHref={imgAPI.featureIcon[0]}
                        style={{ x: '0', y: '-15', height: '84%' }}
                      />
                    </ReactWOW>

                    <image
                      className={classes.screen}
                      xlinkHref={imgAPI.feature[0]}
                      alt="Feature(1) Communication"
                      style={{ height: '90%' }}
                      transform="translate(10 0)"
                    />

                    <ReactWOW animation="fadeInUpShort" delay="0.7s" duration="0.5s">
                      <image
                        xlinkHref={imgAPI.featureIcon[1]}
                        style={{ x: '0', y: '-5', height: '28%' }}
                      />
                    </ReactWOW>
                  </svg>
                </div>

              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.text}>
                  <Typography display="block" className={text.title2}>{t('common:mobile-landing.feature_title1')}</Typography>
                  <Typography display="block" component="div" className={text.subtitle2}>
                    {t('common:mobile-landing.feature_desc1')}
                  </Typography>
                  <Typography display="block" component="div" className={text.subtitle4}>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list1-1')}
                    </li>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list1-2')}
                    </li>
                    <li className={classes.liStyle}>
                      <CheckIcon fontSize="small"/>
                      {t('common:mobile-landing.feature_list1-3')}
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

Feature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(Feature);
