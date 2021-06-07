import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

const serviceStyles = makeStyles(theme => ({
  root: {
    // backgroundImage: `linear-gradient(185deg, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 50%, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 100%)`,
    paddingTop: theme.spacing(30),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(40),
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(50),
    },
    [theme.breakpoints.down('xs')]: {
      Margin: theme.spacing(2, -10, 2, -10),
    },
    [theme.breakpoints.down(330)]: {
      Margin: theme.spacing(2, -10, 2, -10),
    },
  },
  root1: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(245, 243, 250)',
    padding: '20px',
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
    padding: '25px',
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
}));

export default serviceStyles;
