import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import Title from '../Title';
import NewsCard from '../Cards/News';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './news-event-style';

function NewsEvent(props) {
  const classes = useStyle();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <Title align="center">
        {t('common:mobile-landing.news_title')}
      </Title>
      {/* `<Typography align="center" className={text.subtitle2}>
        {t('common:mobile-landing.news_desc')}
      //#region `</Typography> */}
      <div className={classes.blogWrap}>
        <Container fixed>
          <Grid container spacing={6} className={classes.listNews}>
            <Grid item md={6}>
              <NewsCard
                type="potrait"
                img={imgAPI.photo[11]}
                caption="Tips"
                text="How to Start a Business: A Step-by-Step Guide"
              />
            </Grid>
            <Grid item md={6}>
              <NewsCard
                type={isMobile ? 'potrait' : 'landscape'}
                img={imgAPI.photo[1]}
                caption="Tips"
                text="Productivity Tips for Small Business Owners"
              />
              <NewsCard
                type="landscape"
                img={imgAPI.photo[2]}
                caption="News"
                text="60% of Small Businesses Expect Revenue to Grow in 2021"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

NewsEvent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(NewsEvent);
