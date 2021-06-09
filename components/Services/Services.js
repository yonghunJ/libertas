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

const testiContent = [
  {
    imageUrl: imgAPI.service[0],
    imageTitle: 'Logo & Concept Design',
    title: 'Logo & Concept Design',
    content: '모든디자인에 쓰일 브랜드 Identity에 맞는 로고와 컨셉 디자인',
  },
  {
    imageUrl: imgAPI.service[1],
    imageTitle: 'Website Development',
    title: 'Website Development',
    content: 'Animation Effect 를 이용한 impact 있는 웹사이트로 효과적인 내용전달',
  },
  {
    imageUrl: imgAPI.service[2],
    imageTitle: 'Integrated Chat System',
    title: 'Integrated Chat System',
    content: '웹사이트 내 채팅 채널을 통한 상담내용을 관리자 페이지에서 Follow up',
  },
  {
    imageUrl: imgAPI.service[3],
    imageTitle: 'Appointment Scheduling',
    title: 'Appointment Scheduling',
    content: 'Calendar 에서 상담, 미팅, Event 들을 관리',
  },
  {
    imageUrl: imgAPI.service[4],
    imageTitle: 'Invoices & Payment',
    title: 'Invoices & Payment',
    content: '각각의 Estimates에 대한 invoice 발급 및 payment 진행',
  },
  {
    imageUrl: imgAPI.service[5],
    imageTitle: 'Project Tracking',
    title: 'Project Tracking',
    content: 'Project의 진행상황을 각각의 Stage 별로 확인가능 & 업데이트 알림',
  },
];


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
                Our Services
              </Title>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                {testiContent.map((item) => (
                  <Grid item xs={6} sm={4} key={`showCard-${item.title}`}>
                    <CardAnimation>
                      <ShowCardMedia item={item} />
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
