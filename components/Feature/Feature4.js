import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import clsx from 'clsx';
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

const Feature4 = (props) => {
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
                  <svg className={classes.decoPrimary}>
                    <use xlinkHref="/images/mobile/deco-feature.svg#main" />
                  </svg>
                  <figure className={classes.screen}>
                    <img src={imgAPI.feature[3]} alt="Feature(4) Tracking" style={{ height: '100%' }} />
                  </figure>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.text}>
                <Typography display="block" className={text.title2}>{t('common:mobile-landing.feature_title4')} </Typography>
                  <Typography display="block" component="p" className={text.subtitle2}>
                    {t('common:mobile-landing.feature_desc4')}
                  </Typography>
                  <Typography display="block" component="p" className={text.subtitle4}>
                    <li>
                      {t('common:mobile-landing.feature_list4-1')}
                    </li>
                    <li>
                      {t('common:mobile-landing.feature_list4-2')}
                    </li>
                    <li>
                      {t('common:mobile-landing.feature_list4-3')}
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

Feature4.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(Feature4);
