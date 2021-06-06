import React from 'react';
import ReactWOW from 'react-wow'
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withTranslation } from '~/i18n';

import useStyles from './services-style';
import ShowCardMedia from '../ShowCardMedia';
import Title from '../Title';

const testiContent = [
  {
    imageUrl: 'https://i.pinimg.com/originals/8d/f7/42/8df742ad90ca58d3068fb3d7d2ba250f.png',
    imageTitle: 'hello',
    title: 'title1',
    content: 'content1',
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/8d/f7/42/8df742ad90ca58d3068fb3d7d2ba250f.png',
    imageTitle: 'hello2',
    title: 'title2',
    content: 'content3',
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/8d/f7/42/8df742ad90ca58d3068fb3d7d2ba250f.png',
    imageTitle: 'hello3',
    title: 'title3',
    content: 'content3',
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/8d/f7/42/8df742ad90ca58d3068fb3d7d2ba250f.png',
    imageTitle: 'hello3',
    title: 'title4',
    content: 'content3',
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/8d/f7/42/8df742ad90ca58d3068fb3d7d2ba250f.png',
    imageTitle: 'hello3',
    title: 'title5',
    content: 'content3',
  },

];


function Services(props) {
  const classes = useStyles();
  const { t } = props;

  return (
    <>
      <div className={classes.root}>
        <ReactWOW animation="fadeInUpShort" offset={-150} delay="0.4s" duration="0.5s">
          <div className={classes.root1}>
            <Title align="center">
              Features
            </Title>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="center"
            >
              {testiContent.map((item) => (
                <Grid item xs={12} sm={4} key={`showCard-${item.title}`}>
                  <ShowCardMedia item={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </ReactWOW>
      </div>
    </>
  );
}

Services.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(Services);
