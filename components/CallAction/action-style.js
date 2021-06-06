import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(5),
    width:'70%',
  [theme.breakpoints.down('sm')]: {
    width:'100%',
  },
  },
  background: {
    fill: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.8),
    width: 560,
    height: 560,
    top: theme.spacing(-50),
    left: '20%',
    position: 'absolute',
    transform: 'scale(3)'
  },
  button: {
    color: 'black',
    [theme.breakpoints.up('md')]: {
      width: 240,
      height: 64,
      fontSize: 14,
      color: 'black',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    }
  },
  paper: {
    padding: theme.spacing(4),
    border: `2px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 7),
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 1),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: 700,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontFamily: 'Roboto Condensed',
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        marginBottom: theme.spacing(2)
      },
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      },
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none'
  }
}));

export default useStyles;
