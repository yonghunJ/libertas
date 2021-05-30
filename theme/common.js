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
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px',
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 20,
    lineHeight: '44px',
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
    fontSize: 20,
    lineHeight: '32px',
    paddingRight:'80px',
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '32px',
      paddingRight:0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '24px',
      paddingRight:0,
    },
  },
  subtitle3: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 20,
    lineHeight: '32px',
    paddingLeft:'80px',
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '32px',
      paddingLeft:0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '24px',
      paddingLeft:0,
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
