import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { fade, darken } from '@material-ui/core/styles/colorManipulator';
import decoLightTop from '~/public/images/mobile/deco-light-top.svg';
import decoDarkTop from '~/public/images/mobile/deco-dark-top.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: theme.palette.background.paper,
    width: '100%',
    position: 'relative',
    minHeight: 700,
  },
    bgColor: {
      position: 'relative',
      background: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.65) : fade(theme.palette.primary.light, 0.2),
      backgroundSize: '100% auto',
      //paddingTop: theme.spacing(10),
      marginTop: theme.spacing(2),
      
    },
    decoBgTop: {
      background: `url(${theme.palette.type === 'dark' ? decoDarkTop : decoLightTop}) no-repeat transparent`,
      backgroundSize: '100% auto',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      '&:after': {
        content: '""',
        background: `url(${theme.palette.type === 'dark' ? decoDarkTop : decoLightTop}) no-repeat transparent`,
        backgroundSize: '100% auto',
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.5,
        left: 20,
        top: 10,
      },
    },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default useStyles;
