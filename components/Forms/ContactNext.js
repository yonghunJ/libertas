import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import emailjs from 'emailjs-com';
import { withTranslation } from '~/i18n';
import brand from '~/public/text/brand';
import logo from '~/public/images/mobile-logo.svg';
import linkRouter from '~/public/text/link';
import Checkbox from './Checkbox';
import ParallaxDeco from '../Parallax/Large';
import useStyles from './form-style';

function Contact(props) {
  const classes = useStyles();
  const { t } = props;
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const setFree = () => {
    setValues({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', value => value);
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = async () => {
    await emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, values, process.env.EMAILJS_USER_ID);
    console.log('sent');
    setFree();
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.pageWrap}>
      <Hidden smDown>
        <div className={classes.background}>
          <div className={classes.gradient}>
            <div className={classes.decoWave} />
            <div className={classes.decoLine} />
            <div className={classes.decoInner}>
              <img src="/images/mobile/animation-banner.png" alt="decoration" />
            </div>
          </div>
        </div>
      </Hidden>
      <div className={classes.parallax}>
        <ParallaxDeco />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <Link href={linkRouter.mobile.home}>
            <a>
              <img src={logo} alt="logo" />
              <Typography component="span">
                {brand.mobile.projectName}
              </Typography>
            </a>
          </Link>
        </div>
      </Hidden>
      <Container maxWidth="md" className={classes.innerWrap}>
        <Link href={linkRouter.mobile.home}>
          <IconButton className={classes.backtohome}>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-thin-left" />
          </IconButton>
        </Link>
        <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
          <div className={classes.fullFromWrap}>
            <Typography
              variant="h3"
              align="center"
              className={classes.title}
              gutterBottom
            >
              {t('common:contact_title')}
            </Typography>
            <Typography className={classes.desc}>
              {t('common:contact_subtitle')}
            </Typography>
            <div className={classes.form}>
              <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
              >
                <Grid container spacing={4}>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t('common:form_name')}
                      onChange={handleChange('name')}
                      name="Name"
                      value={values.name}
                      validators={['required']}
                      errorMessages={['This field is required']}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t('common:form_email')}
                      onChange={handleChange('email')}
                      name="Email"
                      value={values.email}
                      validators={['required', 'isEmail']}
                      errorMessages={['This field is required', 'email is not valid']}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t('common:form_phone')}
                      onChange={handleChange('phone')}
                      name="Phone"
                      value={values.phone}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t('common:form_company')}
                      onChange={handleChange('company')}
                      name="Company"
                      value={values.company}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextValidator
                      variant="filled"
                      multiline
                      rows="6"
                      className={classes.input}
                      label={t('common:form_message')}
                      onChange={handleChange('message')}
                      name="Message"
                      value={values.message}
                    />
                  </Grid>
                </Grid>
                <div className={classes.btnArea}>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        validators={['isTruthy']}
                        errorMessages="This field is required"
                        checked={check}
                        value={check}
                        onChange={(e) => handleCheck(e)}
                        color="primary"
                      />
                    )}
                    label={(
                      <span>
                        {t('common:form_terms')}
                        <br />
                        <Link href="#">
                          <a>
                            {t('common:form_privacy')}
                          </a>
                        </Link>
                      </span>
                    )}
                  />
                  <Button variant="contained" type="submit" color="secondary" size="large">
                    {t('common:form_send')}
                    <SendIcon className={classes.rightIcon} />
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}


Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(Contact);
