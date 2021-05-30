import { makeStyles } from '@material-ui/core/styles';

const decoStyle = {
  width: 450,
  height: 550,
  position: 'absolute',
  top: 50,
  right: 30,
};

const featureStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    minHeight: 580,
  },

  /* First feature tab BG */
  decoPrimary: {
    fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      top: -20,
      left: 20,
      transform: 'scale(0.7)',
    },
    ...decoStyle,
  },
 /* Second feature tab BG */
  decoSecondary: {
    fill: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    [theme.breakpoints.down('sm')]: {
      top: -20,
      left: -20,
      transform: 'scale(0.7)',
    },
    ...decoStyle,
  },
  first: {
    position: 'relative',
    zIndex: 10,
  },
  last: {
    position: 'relative',
    zIndex: 30,
    marginBottom: theme.spacing(-70),
    [theme.breakpoints.up('xl')]: {
      marginBottom: theme.spacing(-40),
    },
  },
  decoPrimaryBig: {
    fill: theme.palette.primary.dark,
    width: 500,
    height: 500,
    left: 80,
    top: -40,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: -160,
      transform: 'scale(0.5)',
    },
  },

  
  
  button: {},
  item: {
    position: 'relative',
    paddingBottom: theme.spacing(5),
    '& p': {
      marginBottom: theme.spacing(),
    },
    '& > div': {
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
  },
  text: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(12),
      Width:'80%',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  /*Image*/
  screen: {
    position: 'relative',
    '& img': {
      display: 'block',
      width: 400,
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        width: 320,
        margintop: '0 auto',
      },
    },
    top: 120,
    [theme.breakpoints.down('sm')]: {
      top: 50,
    },
  },


  video: {
    overflow: 'hidden',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    width: '100%',
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      height: 180,
    },
    '& img': {
      position: 'absolute',
      left: 0,
      width: '100%',
      minHeight: '100%',
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'center',
      position: 'relative',
      margin: theme.spacing(8, 0, 4),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(4, 0),
      },
    },
    '& $button': {
      background: theme.palette.primary.main,
      '& i': {
        width: 40,
        height: 40,
        lineHeight: '40px',
        color: theme.palette.common.white,
        transform: 'scale(1.7) translateX(2px)',
      },
    },
  },


  graphic: {
    position: 'absolute',
    '& img': {
      width: '90%',
      display: 'block',
    },
  },
  tabContent: {
    position: 'relative',
    padding: theme.spacing(8, 4),
  },
  tabLabel: {
    fontSize: 18,
    borderBottom: `1px solid ${theme.palette.text.disabled}`,
  },

  /*Image+Graphic location*/
  illustrationLeft: {
    position: 'relative',
    '& $screen': {
      margin: 0,
      [theme.breakpoints.up('md')]: {
        marginTop: -50,
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(),
        marginTop: -40,
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(),
        marginTop: -40,
      },
    },
  },
  illustrationRight: {
    position: 'relative',
    '& $screen': {
      [theme.breakpoints.up('md')]: {
        //left: 20,
        // top: -40,
        marginTop: -50,
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(),
        marginTop: -40,
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(),
        marginTop: -40,
      },
    },
  },
  illustrationCenter: {
    position: 'relative',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
    },



  },
  videoPopup: {
    width: 690,
    maxWidth: 'none',
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
}));

export default featureStyles;
