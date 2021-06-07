import { makeStyles } from '@material-ui/core/styles';
import { fade, darken } from '@material-ui/core/styles/colorManipulator';
import decoLightTop from '~/public/images/mobile/deco-light-top.svg';
import decoDarkTop from '~/public/images/mobile/deco-dark-top.svg';

const serviceStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(10),
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(20),
    },
    [theme.breakpoints.down('xs')]: {
      Margin: theme.spacing(20, -10, 2, -10),
    },
    [theme.breakpoints.down(330)]: {
      Margin: theme.spacing(20, -10, 2, -10),
    },
  },
  root1: {
    flexGrow: 1,
    padding: theme.spacing(30, 20, 0, 20),
    marginTop: theme.spacing(-10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(20, 2, 0, 2),
      marginTop: theme.spacing(-5),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(245, 243, 250)',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50px 10px',
  },
  container: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))',
    gridGap: '25px',
    padding: '10px',
    background: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.05)',
    willChange: 'width, height',
  },
  item: {
    width: '100%',
    height: '100%',
    background: 'white',
    borderRadius: '5px',
    willChange: 'transform, opacity',
  },
  bgColor: {
    position: 'relative',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.65) : fade(theme.palette.primary.light, 0.2),
    backgroundSize: '100% auto',
    //paddingTop: theme.spacing(10),
    marginTop: theme.spacing(-30),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(-10),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(-5),
    },
    
  },
  decoBgTop: {
    background: `url(${theme.palette.type === 'dark' ? decoDarkTop : decoLightTop}) no-repeat transparent`,
    backgroundSize: '100% auto',
    transform: 'scale(1.5, 0.5)',
    marginTop: theme.spacing(-20),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(-23),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(-31),
    },
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: -100,
    '&:after': {
      content: '""',
      background: `url(${theme.palette.type === 'dark' ? decoDarkTop : decoLightTop}) no-repeat transparent`,
      backgroundSize: '100% auto',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.5,
      left: 50,
      top: 30,
      [theme.breakpoints.down('xs')]: {
        left: 50,
        top: 10,
      },
      [theme.breakpoints.down('md')]: {
        left: 50,
        top: 10,
      },
    },
  },
}));

export default serviceStyles;
