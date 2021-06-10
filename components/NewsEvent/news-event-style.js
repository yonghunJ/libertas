import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
import decoLightTop from '~/public/images/mobile/deco-light-top.svg';
import decoDarkBottom from '~/public/images/mobile/deco-dark-top.svg';

const newsEventStyle = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.6) : lighten(theme.palette.primary.light, 0.8),
    //margin: '0 auto',
    paddingBottom: theme.spacing(30),
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(-20),
  },
  decoBgTop: {
    background: `url(${theme.palette.type === 'dark' ? decoDarkBottom : decoLightTop}) no-repeat transparent`,
    backgroundSize: '100% auto',
    transform: 'scale(1, 0.4)',
    position: 'absolute',
    width: '100%',
    height: 800,
    left: 0,
    //top: 220,
    [theme.breakpoints.down('sm')]: {
      top: 400
    }
  },
  parallaxEvent: {
    position: 'absolute',
    top: -320,
    left: 0,
    width: '100%',
  },
  blogWrap: {
    position: 'relative',
    zIndex: 10,
    margin: theme.spacing(15, 0)
  },
  listNews: {
    '& > div': {
      [theme.breakpoints.down('xs')]: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important'
      }
    }
  }
}));

export default newsEventStyle;
