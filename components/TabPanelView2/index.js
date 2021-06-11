import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { withTranslation } from '~/i18n';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { fade, darken } from '@material-ui/core/styles/colorManipulator';
import TabPanel from './TabPanel';
import useStyles from './css';
import Feature5 from '../Feature/Feature5';
import Feature6 from '../Feature/Feature6';
import Feature7 from '../Feature/Feature7';
import Feature8 from '../Feature/Feature8';
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
  const [value, setValue] = useState(2);
  const { t } = props;

  useEffect(() => {
    setValue(0);
  }, []);

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
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: 'Expand',
    },
    {
      color: 'red',
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  return (
    <div className={classes.root}>
      <Title align="center">
        {t('common:mobile-landing.feature_title_2')}
      </Title>
      <AppBar position="static" color="default" style={{ width: '80%', margin: 'auto' }}>
        <Tabs
          style={{backgroundColor: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.80): 'White'}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="WEB DESIGN" {...a11yProps(0)} />
          <Tab label="REVISITING" {...a11yProps(1)} />
          <Tab label="TRANSPARENCY" {...a11yProps(2)} />
          <Tab label="SECURITY" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Feature5 />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Feature6 />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Feature7 />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Feature8 />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

FloatingActionButtonZoom.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation(['mobile-landing'])(FloatingActionButtonZoom);
