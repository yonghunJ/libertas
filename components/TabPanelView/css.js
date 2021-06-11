import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: theme.palette.background.paper,
    width: '100%',
    position: 'relative',
    minHeight: 500,
    marginTop: 130,
    [theme.breakpoints.down('sm')]: {
      marginTop: 300,
    },
  },
  bgColor: {
    position: 'relative',
    backgroundSize: '100% auto',
    //paddingTop: theme.spacing(10),
    marginTop: theme.spacing(2), 
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
  AppBarDesign: {
    width: '80%', 
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  }

}));

export default useStyles;
