import React from 'react';
import ReactWOW from 'react-wow'
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './services-style';
import ShowCardMedia from '../ShowCardMedia';
import Title from '../Title';
import CardAnimation from '../CardAnimation';


function Services(props) {
  const classes = useStyles();
  const { t } = props;

  return (
    <>
      <div className={classes.bgColor}>
        <div className={classes.decoBgTop} />
        <div className={classes.root}>
          <ReactWOW animation="fadeInUpShort" offset={-150} delay="0.4s" duration="0.5s">
            <div className={classes.root1}>
              <Title align="center">
              {t('common:mobile-landing.service_title')}
              </Title>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                {[...Array(6)].map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Grid item xs={6} sm={4} key={`showCard-${index}`}>
                    <CardAnimation>
                      <ShowCardMedia
                        title={t(`common:mobile-landing.service_title_${index + 1}`)}
                        content={t(`common:mobile-landing.service_content_${index + 1}`)}
                        imageUrl={imgAPI.service[index]}
                        imageTitle={t(`common:mobile-landing.service_iamge_title${index}`)}
                      />
                    </CardAnimation>
                  </Grid>
                ))}
              </Grid>
            </div>
          </ReactWOW>
        </div>
      </div>
    </>
  );
}

Services.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(Services);
