import React, { useState, useEffect, useRef } from 'react';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';
import PropTypes from 'prop-types';
import { withTranslation } from '~/i18n';
import Container from '@material-ui/core/Container';

import useStyles from './services-style';
import data from './data';
import ShowCardMedia from '../ShowCardMedia';

function Services(props) {
  const classes = useStyles();
  const { t } = props;

  const [open, setOpen] = useState(false);
  const [serviceTitle, setServiceTitle] = useState('CLICK HERE');

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'pink' : 'hotpink',
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.6 : 0.2,
  ]);

  return (
    <>
      <Container>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={classes.container}
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          {open ? 'CORE' : serviceTitle }
        </animated.div>
        <div className={classes.wrapper}>
          {transition((style, item) => (
            <animated.div
              className={classes.item}
              style={{ ...style, background: item.css, height: item.height }}
            >
              {/* <h1>{item.name}</h1> */}
              <ShowCardMedia />
            </animated.div>
          ))}
        </div>
      </Container>
    </>
  );
}

Services.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(Services);
