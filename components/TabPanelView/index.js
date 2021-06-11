import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Zoom from '@material-ui/core/Zoom';
import { withTranslation } from '~/i18n';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { fade, darken } from '@material-ui/core/styles/colorManipulator';
import TabPanel from './TabPanel';
import useStyles from './css';
import Feature1 from '../Feature/Feature1';
import Feature2 from '../Feature/Feature2';
import Feature3 from '../Feature/Feature3';
import Feature4 from '../Feature/Feature4';
import Title from '../Title';

const a11yProps = (index) => {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
};

const FloatingActionButtonZoom = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(1);

  useEffect(() => {
    setValue(0);
  }, []);
  const { t } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [

  ];

  return (
    <div className={classes.root}>
      <Title align="center">
        {t('common:mobile-landing.feature_title')}
      </Title>
      <AppBar position="static" color="default" className={classes.AppBarDesign}>
        <Tabs
          style={{backgroundColor: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.80): 'White'}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label={t('common:mobile-landing.feature_tab_1')} {...a11yProps(0)} />
          <Tab label={t('common:mobile-landing.feature_tab_2')} {...a11yProps(1)} />
          <Tab label={t('common:mobile-landing.feature_tab_3')} {...a11yProps(2)} />
          <Tab label={t('common:mobile-landing.feature_tab_4')} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Feature1 />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Feature2 />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Feature3 />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Feature4 />
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </div>
  );
};

FloatingActionButtonZoom.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation(['mobile-landing'])(FloatingActionButtonZoom);
