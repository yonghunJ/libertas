import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ReactWOW from 'react-wow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import { withTranslation } from '~/i18n';
import useStyles from './action-style';

function CallAction(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  return (
    <div className={classes.background}>
      <ReactWOW animation="fadeInUpShort" fdelay="0.3s" duration="0.5s">
        <Container>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container alignItems="center">
                <Grid item md={8} xs={12}>
                  <Typography variant="h4" display="block">
                    {t('common:mobile-landing.cta_title')}
                  </Typography>
                  <Typography variant="subtitle1" display="block">
                    {t('common:mobile-landing.cta_subtitle')}
                  </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Grid style={{ justifyContent: 'center' }}>
                    <Link href="/contact" passHref>
                      <Button className={classes.button} variant="contained" color="primary">
                        {t('common:mobile-landing.cta_btn')}
                        <SendIcon className={classes.rightIcon} />
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Container>
      </ReactWOW>
    </div>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(CallAction);
