import { makeStyles } from '@material-ui/core/styles';
import imgAPI from '~/public/images/imgAPI';

export const useTextAlign = makeStyles({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});

export const useFloat = makeStyles({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },
});

export const useText = makeStyles(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 46,
    lineHeight: '72px',
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
      lineHeight: '44px'
    },
  },
  title2: {
    fontSize: 32,
    lineHeight: '48px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px',
    }
  },
  title3: {
    fontSize: 32,
    lineHeight: '48px',
    paddingLeft:'80px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
      lineHeight: '48px',
      paddingLeft:0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px',
      paddingLeft:0,
    }
  },
  title4: {
    fontSize: 24,
    lineHeight: '32px',
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 22,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
      lineHeight: '28px',
    },
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 18,
    lineHeight: '36px',
    padding: theme.spacing(2, 20, 5, 0),
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '36px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '28px',
    },
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 18,
    lineHeight: '32px',
    paddingRight:'80px',
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '32px',
      paddingRight:'40px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '24px',
      paddingRight:0,
    },
  },
  subtitle3: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 18,
    lineHeight: '32px',
    paddingLeft:'80px',
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '32px',
      paddingLeft:0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '24px',
      paddingLeft:0,
    },
  },
  subtitle4: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 16,
    lineHeight: '32px',
    paddingTop: theme.spacing(2),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '32px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      lineHeight: '24px',
      textAlign: 'left',
    },
  },
  subtitle5: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 16,
    lineHeight: '32px',
    paddingTop: theme.spacing(2),
    paddingLeft:'80px',
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '32px',
      textAlign: 'left',
      paddingLeft:0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      lineHeight: '24px',
      textAlign: 'left',
      paddingLeft:0,
    },
  },
  subtitle6: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '32px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '32px',
      paddingRight:0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      lineHeight: '24px',
      paddingRight:0,
    },
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '22px',
    },
  }
}));

export const useHidden = makeStyles(theme => ({
  lgDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));
